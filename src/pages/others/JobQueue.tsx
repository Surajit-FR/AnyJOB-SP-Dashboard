import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
// import { GetAcceptedServicesRequest } from "../../store/reducers/ServiceReducers";
// import { ServiceRequest } from "../../../types/services";
import { Button } from "react-bootstrap";
import { fetchJobDetailRequest, fetchJobDetailRequestByType, assignJobRequest } from "../../store/reducers/jobReducer";
import { FetchFieldAgentRequest } from "../../store/reducers/FieldAgentSlice";
import { IteamMembers } from "../../../types/fieldAgentTypes";
import { socket } from "../../store/api/socket"

const JobQueue = (): JSX.Element => {
    const serviceProviderId = localStorage.getItem("_id") || ""
    // const { acceptedServiceData } = useSelector((state: RootState) => state.serviceSlice);
    const { job, filteredJob,
        // jobSuccess
    } = useSelector((state: RootState) => state.jobSlice)
    const { fieldAgent } = useSelector((state: RootState) => state.fieldAgentSlice)
    const [fieldAgentData, setFieldAgentData] = useState<IteamMembers[]>([])
    const dispatch: AppDispatch = useDispatch();
    // const [acceptedServiceStateData, setAcceptedServiceStateData] = useState<Array<ServiceRequest>>([]);
    const [requestStatusFilter, setRequestStatusFilter] = useState<string>("Accepted");
    const [showDetail, setShowDetail] = useState<boolean>(false)
    const [showAgent, setShowAgent] = useState<boolean>(false)
    const [serviceId, setServiceId] = useState<string>("")
    const [agentId, setAgentId] = useState<string>("")
    const [updationTime, setUpdationTime] = useState("")

    const handleAgentModalOpen = (id: string | null) => {
        dispatch(FetchFieldAgentRequest({ _id: id }))
        setShowAgent(true)
    }
    const handleAgentModalClose = () => {
        setShowAgent(false)
        setAgentId("")
        setServiceId("")
    }

    const modalDeatilOpen = (id: string | null) => {
        dispatch(fetchJobDetailRequest({ id }))
        setShowDetail(true)
    }

    const modalDetailClose = () => {
        setShowDetail(false)
    }
    const getFieldAgentId = (value: string) => {
        setAgentId(value)
    }

    const getServiceId = (value: string) => {
        setServiceId(value)
    }

    const emmitToScket = () => {
        socket.emit("serviceAssigned", {})
    }
    // Filter the jobs based on the selected filters
    // const filteredJobs = acceptedServiceStateData.filter((service) => requestStatusFilter === "" || service.requestProgress === requestStatusFilter);

    // useEffect(() => {
    //     dispatch(GetAcceptedServicesRequest('serviceReducers/GetAcceptedServicesRequest'));
    // }, [dispatch]);

    // useEffect(() => {
    //     setAcceptedServiceStateData(acceptedServiceData as Array<ServiceRequest>);
    // }, [acceptedServiceData]);

    useEffect(() => {
        if (serviceId && agentId) {
            dispatch(assignJobRequest({ serviceId, assignedAgentId: agentId, handleClose: handleAgentModalClose, emmitToScket }))
        }
    }, [serviceId, agentId, dispatch])

    useEffect(() => { dispatch(fetchJobDetailRequestByType({ reqType: requestStatusFilter })) }, [dispatch, requestStatusFilter])
    // useEffect(() => {
    //     if (jobSuccess) {
    //         dispatch(fetchJobDetailRequestByType({ reqType: requestStatusFilter }))
    //         setAgentId("")
    //         setServiceId("")
    //     }

    // }, [dispatch, requestStatusFilter, jobSuccess])

    useEffect(() => {
        if (fieldAgent) {
            setFieldAgentData(fieldAgent.teamMembers);
        }
    }, [fieldAgent]);


    useEffect(() => {
        socket.connect()
        socket.on('connect', () => { console.log("que page connected") })
        socket.on('connect_error', (err) => { console.log("connected err", err) })
        socket.on('jobListUpdate', (data) => {
            setUpdationTime(data?.date)
        })


        socket.on("disconnect", () => console.log("que page disconnected"))

        return () => {
            socket.disconnect()
            setUpdationTime("")
        }
    }, [])


    useEffect(() => {
        if (updationTime) {
            dispatch(fetchJobDetailRequestByType({ reqType: requestStatusFilter }))
        }
    }, [updationTime, dispatch, requestStatusFilter])
    // const reversedJobs = filteredJob && filteredJob.length>0 && filteredJob.reverse()
    // console.log({reversedJobs})
    // console.log({filteredJob})
    return (
        <>
            <AgentListModel show={showAgent} handleClose={handleAgentModalClose} data={fieldAgentData} getFieldAgentId={getFieldAgentId} agentId={agentId} />
            <JobDetailsModal show={showDetail} handleClose={modalDetailClose} data={job} />
            <PageHeader pageTitle="Job Status" />

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="requestStatus" style={{ fontFamily: "system-ui" }}>Filter by Job Status</label>
                    <div className="select-wrapper">
                        <select
                            id="requestStatus"
                            className="form-control select-custom"
                            value={requestStatusFilter}
                            onChange={(e) => setRequestStatusFilter(e.target.value)}
                        >
                            {/* Accepted,Started,Completed,Cancelled */}
                            <option value="Accepted" defaultValue={"Accepted"}>Accepted</option>
                            <option value="Started">Ongoing</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                        </select>
                    </div>

                </div>
            </div>
            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Jobs</h4>
                                </div>
                            </div>
                            <div className="table-responsive">
                                {filteredJob?.length > 0 ?
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Customer</th>
                                                <th>Service Req. Category</th>
                                                <th>Service Status</th>
                                                {/* <th>Incentive</th>
                                                <th>Incentive Amount</th> */}
                                                {requestStatusFilter === "Accepted" && <th className="text-center">Action</th>}
                                                <th className="text-center">view</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredJob?.map((service: any, index: number) => (
                                                <tr key={index}>
                                                    <td>
                                                        <img className="p_img" src={service?.customerAvatar ? service?.customerAvatar : "https://placehold.co/50x50"} alt="" />
                                                    </td>
                                                    <td>{service?.customerFirstName ? service?.customerFirstName : "N/A"} {service?.customerLastName ? service?.customerLastName : ""}</td>
                                                    <td>{service?.categoryName ? service?.categoryName : "N/A"}</td>
                                                    <td>{service?.requestProgress}</td>
                                                    {/* <td>{service?.isIncentiveGiven ? "YES" : "NO"}</td>
                                                    <td>{service?.incentiveAmount ? service?.incentiveAmount : "N/A"}</td> */}
                                                    {requestStatusFilter === "Accepted" && <td className="text-center">
                                                        {service?.assignedAgentId[0]?.firstName ?
                                                            <Button
                                                                disabled
                                                                size="lg"
                                                                variant="outlined"
                                                            > 
                                                                Assigned to {service?.assignedAgentId[0]?.firstName} {service?.assignedAgentId[0]?.lastName}
                                                            </Button>
                                                            :
                                                            <>
                                                                <Link to="#" className="add_er self mr-3" onClick={() => {
                                                                    getServiceId(service?._id)
                                                                    getFieldAgentId(serviceProviderId)
                                                                }}>
                                                                    Self
                                                                </Link>
                                                                <Button
                                                                    onClick={() => {
                                                                        handleAgentModalOpen(service?.serviceProviderId)
                                                                        getServiceId(service?._id)
                                                                    }}
                                                                    className="add_er assign">
                                                                    Assign
                                                                </Button>
                                                            </>}
                                                    </td>}

                                                    <td className="text-center">
                                                        <Button className="add_er assign" onClick={() => modalDeatilOpen(service?._id)}>
                                                            Details
                                                        </Button>
                                                    </td>
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

export default JobQueue;