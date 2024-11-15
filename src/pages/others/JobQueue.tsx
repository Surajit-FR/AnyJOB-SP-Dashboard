import { useState } from "react";
import { Link } from "react-router-dom";
import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";

const JobQueue = (): JSX.Element => {
    const [requestStatusFilter, setRequestStatusFilter] = useState<string>("");

    // Sample data for the table
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

    // Filter the jobs based on the selected filters
    const filteredJobs = jobs.filter((job) => requestStatusFilter === "" || job.serviceStatus === requestStatusFilter);

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
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Customer</th>
                                            <th>Services</th>
                                            <th>Service Status</th>
                                            <th className="text-center">Action</th>
                                            <th className="text-center">View</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredJobs.map((job) => (
                                            <tr key={job.id}>
                                                <td>
                                                    <img className="p_img" src={job.imgSrc} alt="" />
                                                </td>
                                                <td>{job.customer}</td>
                                                <td>{job.service}</td>
                                                <td>{job.serviceStatus}</td>
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
                                {filteredJobs.length === 0 && (
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

export default JobQueue;