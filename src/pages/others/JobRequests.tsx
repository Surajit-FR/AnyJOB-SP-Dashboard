import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FetchNearbyServicesRequest, HandleServicesRequest } from "../../store/reducers/ServiceReducers";
import { ServiceRequest } from "../../../types/services";

const JobRequests = (): JSX.Element => {
    // const { latitude, longitude } = useSelector((state: RootState) => state.locationSlice);
    const { serviceData } = useSelector((state: RootState) => state.serviceSlice);
    const dispatch: AppDispatch = useDispatch();

    const [stateServiceData, setStateServiceData] = useState<Array<ServiceRequest>>([]);
    // console.log({ latitude, longitude });

    useEffect(() => {
        dispatch(FetchNearbyServicesRequest('serviceReducers/FetchNearbyServicesRequest'));
    }, [dispatch]);

    useEffect(() => {
        setStateServiceData(serviceData as Array<ServiceRequest>);
    }, [serviceData]);


    return (
        <>
            <AgentListModel />
            <JobDetailsModal />
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
                                                        <img className="p_img" src={service?.userId?.avatar ? service?.userId?.avatar : "https://placehold.co/50x50"} alt="" />
                                                    </td>
                                                    <td>{`${service?.userId?.firstName} ${service?.userId?.lastName}`}</td>
                                                    <td>{service?.categoryId?.name ? service?.categoryId?.name : "N/A"}</td>
                                                    <td>{service?.requestProgress}</td>
                                                    <td>{service?.isIncentiveGiven ? "YES" : "NO"}</td>
                                                    <td>{service?.incentiveAmount ? service?.incentiveAmount : "N/A"}</td>
                                                    <td className="text-center">
                                                        <button
                                                            className=" btn add_er self mr-3"
                                                            data-toggle="modal"
                                                            data-target="#job_Details"
                                                        >
                                                            Job Details
                                                        </button>
                                                        <button
                                                            className="btn add_er assign"
                                                            onClick={() => dispatch(HandleServicesRequest({ serviceId: service?._id, data: { isReqAcceptedByServiceProvider: true, requestProgress: "Pending" } }))}
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