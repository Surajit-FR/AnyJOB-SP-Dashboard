import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import DataCard from "../../components/core/dashboard/DataCard";
import { TCardData } from '../../../types/dashboard'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { useEffect, useState } from "react";
import { FetchNearbyServicesRequest } from "../../store/reducers/ServiceReducers";
import { fetchJobDetailRequestByType } from "../../store/reducers/jobReducer";
import { FetchFieldAgentRequest } from "../../store/reducers/FieldAgentSlice";
import Spinner from 'react-bootstrap/Spinner';

const dashboardCardData: Array<TCardData> = [
    {
        title: "Total Services Request",
        icon: "fa-solid fa-note-sticky",
        value: "-- --",
        id: "tsc",
    },
    {
        title: "Field Agent",
        icon: "mdi mdi-account-network",
        value: "-- --",
        id: "fa",

    },
    {
        title: "Pending Work",
        icon: "fa-regular fa-hourglass-half",
        value: "-- --",
        id: "pw",

    },
    {
        title: "Ongoing Work",
        icon: "fa-solid fa-gear",
        value: "-- --",
        id: "ow",

    }
]
const Dashboard = (): JSX.Element => {
    const userId = localStorage.getItem("_id") || ""
    const { serviceData, isServiceloading } = useSelector((state: RootState) => state.serviceSlice);
    const { filteredJob, isJobLoading } = useSelector((state: RootState) => state.jobSlice)
    const { fieldAgent } = useSelector((state: RootState) => state.fieldAgentSlice)
    const [dcardData, setDcardData] = useState(dashboardCardData)

    const dispatch = useDispatch()
    useEffect(() => {
        if (userId) {
            dispatch(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'));
            // dispatch(fetchJobDetailRequestByType({ reqType: "Accepted" }));
            dispatch(FetchFieldAgentRequest({ _id: userId }))
            dispatch(fetchJobDetailRequestByType({ reqType: "All" }));
        }
    }, [dispatch, userId]);


    const dataParser = (initialData: any, allJob: any, pending: any, agent: any, ongoing: any) => {
        const temp = [...initialData]
        temp[0].value = Number(allJob.length)
        temp[1].value = Number(agent.length)
        temp[2].value = Number(pending.length)
        temp[3].value = Number(ongoing.length)
        return temp
    }

    useEffect(() => {
        if (filteredJob && filteredJob.length > 0) {
            setDcardData(prevData => (
                dataParser(
                    prevData,
                    filteredJob,
                    filteredJob.filter((item: any) => item.requestProgress === "Pending"),
                    fieldAgent?.teamMembers,
                    filteredJob.filter((item: any) => item.requestProgress === "Started"))
            )
            )
        }
    }, [filteredJob, fieldAgent])

    const jobsToshow = filteredJob.filter((item: any) => item.requestProgress === "Pending")
    const trimmedReqData = (serviceData && serviceData.length > 5) ? serviceData.slice(0, 5) : serviceData
    const trimmedAccData = (jobsToshow && jobsToshow.length > 5) ? jobsToshow.slice(0, 5) : jobsToshow

    return (
        <>
            <PageHeader pageTitle="Dashboard" />

            <div className="row">
                {
                    dcardData?.map((item, index) => {
                        return (
                            <DataCard key={index} item={item} />
                        )
                    })
                }
            </div>

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Recent Service Requests</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        <Link to="/job-requests" className="add_er are_add px-5">View All</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                {isJobLoading ?
                                    <div className="row justify-content-center m-0 p-3">
                                        <Spinner animation="border" role="status" />
                                    </div>
                                    :
                                    <table 
                                    // className="table table-hover mb-0"
                                    className="table table-striped dt-responsive nowrap w-100"
                                    >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Avatar</th>
                                                <th>Customer</th>
                                                <th>Service Request</th>
                                                <th>Request Status</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {trimmedReqData && trimmedReqData.length > 0 &&trimmedReqData?.map((data, index) => (
                                                <tr key={data._id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img className="p_img" src={data.userAvtar ? data.userAvtar : "/assets/images/userSmall.png"} alt="" />
                                                    </td>
                                                    <td>{data.customerName}</td>
                                                    <td>{data.categoryName}</td>
                                                    {/* <td>{data.isReqAcceptedByServiceProvider ? "Accepted" : "Pending"}</td> */}
                                                    <td>{data.requestProgress === "NotStarted" ? "Not Started" : data.requestProgress}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Recent Accepted Requests</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        <Link to="/job-status" className="add_er are_add px-5">View All</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                {isServiceloading && <div className="row justify-content-center m-0 p-3">
                                    <Spinner animation="border" role="status" />
                                </div>}
                                {filteredJob.length > 0 ?
                                    <table 
                                    // className="table table-hover mb-0"
                                    className="table table-striped dt-responsive nowrap w-100"
                                    >
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Avatar</th>
                                                <th>Customer</th>
                                                <th>Service Req. Category</th>
                                                <th>Service Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {trimmedAccData?.map((service: any, index: number) => (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img className="p_img" src={service?.customerAvatar ? service?.customerAvatar : "/assets/images/userSmall.png"} alt="" />
                                                    </td>
                                                    <td>{service?.customerFirstName ? service?.customerFirstName : "N/A"} {service?.customerLastName ? service?.customerLastName : ""}</td>
                                                    <td>{service?.categoryName ? service?.categoryName : "N/A"}</td>
                                                    <td>{service?.requestProgress}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    : <p className="text-center mt-3">No jobs match the selected filters.</p>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;