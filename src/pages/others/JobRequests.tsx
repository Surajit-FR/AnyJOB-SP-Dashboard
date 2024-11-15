import { Link } from "react-router-dom";
import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";
import { RootState } from "../../store/Store";
import { useSelector } from "react-redux";

const JobRequests = (): JSX.Element => {
    const { latitude, longitude } = useSelector((state: RootState) => state.locationSlice);

    const jobs = [
        {
            id: 1,
            customer: "Arthur Henry",
            service: "Change the Air Filters",
            serviceStatus: "Pending",
            requestStatus: "Accepted",
            imgSrc: "https://placehold.co/50x50",
        },
    ];

    console.log({ latitude, longitude });

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
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Customer</th>
                                            <th>Services</th>
                                            <th>Service Status</th>
                                            <th className="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobs.map((job) => (
                                            <tr key={job.id}>
                                                <td>
                                                    <img className="p_img" src={job.imgSrc} alt="" />
                                                </td>
                                                <td>{job.customer}</td>
                                                <td>{job.service}</td>
                                                <td>{job.serviceStatus}</td>
                                                <td className="text-center">
                                                    <Link to="#"
                                                        className="add_er self mr-3"
                                                        data-toggle="modal"
                                                        data-target="#job_Details"
                                                    >
                                                        Job Details
                                                    </Link>
                                                    <Link to="#" className="add_er assign">Accept</Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {jobs.length === 0 && (
                                    <p className="text-center mt-3">No jobs match the selected filters.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JobRequests;