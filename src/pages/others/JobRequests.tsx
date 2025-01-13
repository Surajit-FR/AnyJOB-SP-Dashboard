// import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchNearbyServicesRequest, HandleServicesRequest } from "../../store/reducers/ServiceReducers";
import { fetchJobDetailRequest } from "../../store/reducers/jobReducer";
import { ServiceRequest } from "../../../types/services";
// import { FetchFieldAgentRequest } from "../../store/reducers/FieldAgentSlice";
import { socket } from '../../store/api/socket'

const JobRequests = (): JSX.Element => {
    // const { latitude, longitude } = useSelector((state: RootState) => state.locationSlice);
    const { serviceData } = useSelector((state: RootState) => state.serviceSlice);
    const { job } = useSelector((state: RootState) => state.jobSlice);
    // const {fieldAgent} = useSelector((state: RootState)=> state.fieldAgentSlice)
    const dispatch: AppDispatch = useDispatch();
    const [detailShow, setDetailShow] = useState<boolean>(false)
    const [stateServiceData, setStateServiceData] = useState<Array<ServiceRequest>>([]);
    const [updationTime,setUpdationTime]= useState("")
    // const [showAgent, setShowAgent] = useState<boolean>(false)

    // const handleAgentModalOpen = () => {
    //     dispatch(FetchFieldAgentRequest('fieldAgentReducers/FetchFieldAgentRequest'))
    //     setShowAgent(true)
    // }
    // const handleAgentModalClose = () => {
    //     setShowAgent(true)
    // }
    // console.log({ latitude, longitude });
    const handleShow = (id: string) => {
        dispatch(fetchJobDetailRequest({ id }))
        setDetailShow(true)
    }
    const handleClose = () => {
        setDetailShow(false)
    }
    const emmitToScket = () => {
        socket.emit("updateNearbyServices", {})
    }

    useEffect(() => {
        dispatch(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'));
    }, [dispatch]);

    useEffect(() => {
        setStateServiceData(serviceData as Array<ServiceRequest>);
    }, [serviceData]);

    useEffect(() => {
            socket.connect()
            socket.on("connect", () => console.log("request page connected"))
            socket.on('connect_error', (err) => { console.log("connected err", err) })
            socket.on('nearbyServicesUpdate',(data)=> {
                setUpdationTime(data?.date)
                console.log(data)
            })
            
            socket.on("disconnect", () => console.log("request page disconnected"))
        return()=>{
            socket.disconnect()
            setUpdationTime("")
        }
    }, [])

    useEffect(()=>{
        if(updationTime){
            dispatch(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'))
        }
    },[updationTime,dispatch])
    
    return (
        <>
            {/* <AgentListModel show={showAgent} handleClose={handleAgentModalClose} data={fieldAgent}/> */}
            <JobDetailsModal show={detailShow} handleClose={handleClose} data={job} />
            <PageHeader pageTitle="Job Requests" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Service Requests</h4>
                                </div>
                            </div>

                            <div className="table-responsive">
                                {stateServiceData?.length > 0 ?
                                    <table className="table table-hover mb-0">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Customer</th>
                                                <th>Service Req. Category</th>
                                                <th>Service Status</th>
                                                <th>Incentive</th>
                                                <th>Incentive Amount</th>
                                                <th className="text-center">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {stateServiceData?.map((service, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <img className="p_img" src={service?.userAvtar ? service?.userAvtar : "https://placehold.co/50x50"} alt="" />
                                                    </td>
                                                    <td>{service?.customerName ? service?.customerName : "N/A"}</td>
                                                    <td>{service?.categoryName ? service?.categoryName : "N/A"}</td>
                                                    <td>{service?.requestProgress}</td>
                                                    <td>{service?.isIncentiveGiven ? "YES" : "NO"}</td>
                                                    <td>{service?.incentiveAmount ? service?.incentiveAmount : "N/A"}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className=" btn add_er self mr-3"
                                                            data-toggle="modal"
                                                            data-target="#job_Details"
                                                            onClick={() => handleShow(service?._id)}
                                                        >
                                                            Job Details
                                                        </button>
                                                        <button
                                                            className="btn add_er assign"
                                                            onClick={() => dispatch(HandleServicesRequest({ serviceId: service?._id, data: { isReqAcceptedByServiceProvider: true, requestProgress: "Pending" }, emmitToScket }))}
                                                        >Accept</button>
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
            </div >
        </>
    );
};

export default JobRequests;