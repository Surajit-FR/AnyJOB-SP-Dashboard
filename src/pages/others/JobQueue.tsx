import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { AppDispatch, RootState } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { GetAcceptedServicesRequest } from "../../store/reducers/ServiceReducers";
import { ServiceRequest } from "../../../types/services";

const JobQueue = (): JSX.Element => {
    const { acceptedServiceData } = useSelector((state: RootState) => state.serviceSlice);
    const dispatch: AppDispatch = useDispatch();
    const [acceptedServiceStateData, setAcceptedServiceStateData] = useState<Array<ServiceRequest>>([]);
    const [requestStatusFilter, setRequestStatusFilter] = useState<string>("");

    // Filter the jobs based on the selected filters
    const filteredJobs = acceptedServiceStateData.filter((service) => requestStatusFilter === "" || service.requestProgress === requestStatusFilter);

    useEffect(() => {
        dispatch(GetAcceptedServicesRequest('serviceReducers/GetAcceptedServicesRequest'));
    }, [dispatch]);
    useEffect(() => {
        setAcceptedServiceStateData(acceptedServiceData as Array<ServiceRequest>);
    }, [acceptedServiceData]);

    console.log(acceptedServiceStateData);

    return (
        <>
            <AgentListModel />
            <JobDetailsModal />
            <PageHeader pageTitle="Job Queue" />

            <div className="row mb-3">
                <div className="col-md-2">
                    <label htmlFor="requestStatus" style={{ fontFamily: "system-ui" }}>Filter by Service Status</label>
                    <div className="select-wrapper">
                        <select
                            id="requestStatus"
                            className="form-control select-custom"
                            value={requestStatusFilter}
                            onChange={(e) => setRequestStatusFilter(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Ongoing">Ongoing</option>
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
                                    <h4 className="mt-0 header-title mb-4">Jobs In Queue</h4>
                                </div>
                            </div>

                            <div className="table-responsive">
                                {filteredJobs?.length > 0 ?
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
                                                <th className="text-center">view</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {filteredJobs?.map((service, index) => (
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
                                                        <Link to="#" className="add_er self mr-3">
                                                            Self
                                                        </Link>
                                                        <Link
                                                            to="#"
                                                            data-toggle="modal"
                                                            data-target="#largeModal_2"
                                                            className="add_er assign"
                                                        >
                                                            Assign
                                                        </Link>
                                                    </td>
                                                    <td className="text-center">
                                                        <Link
                                                            to="#"
                                                            className="add_er assign"
                                                            data-toggle="modal"
                                                            data-target="#job_Details"
                                                        >
                                                            Details
                                                        </Link>
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