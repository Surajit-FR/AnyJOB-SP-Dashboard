import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import DataCard from "../../components/core/dashboard/DataCard";
import { TCardData } from '../../../types/dashboard'
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/Store";
import { useEffect } from "react";
import { FetchNearbyServicesRequest } from "../../store/reducers/ServiceReducers";

const Dashboard = (): JSX.Element => {
    const { serviceData } = useSelector((state: RootState) => state.serviceSlice);
    // const { userData } = useSelector((state: RootState) => state.profileSlice);
    // const userId = localStorage.getItem("_id") || ""
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'));
    }, [dispatch]);

    const dashboardCardData: Array<TCardData> = [
        {
            title: "Total Services Request",
            icon: "fa-solid fa-note-sticky",
            value: "1456",
        },
        {
            title: "Field Agent",
            icon: "mdi mdi-account-network",
            value: "3567",
        },
        {
            title: "Pending Work",
            icon: "fa-regular fa-hourglass-half",
            value: "15",
        },
        {
            title: "Ongoing Work",
            icon: "fa-solid fa-gear",
            value: "15234",
        }
    ]

    return (
        <>
            <PageHeader pageTitle="Dashboard" />

            <div className="row">
                {
                    dashboardCardData?.map((item, index) => {
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
                                    <h4 className="mt-0 header-title mb-4">Recent Accepted Services</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        <Link to="/job-queue" className="add_er are_add px-5">View All</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
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
                                        {serviceData?.slice(0,5).map((data, index) => (
                                            <tr key={data._id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img className="p_img" src={data.userAvtar ? data.userAvtar: "https://placehold.co/50x50"} alt="" />
                                                </td>
                                                <td>{data.customerName}</td>
                                                <td>{data.categoryName}</td>
                                                <td>{data.isReqAcceptedByServiceProvider ? "Accepted" : "Pending"}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;