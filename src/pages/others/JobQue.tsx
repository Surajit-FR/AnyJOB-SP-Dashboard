import { Link } from "react-router-dom";
import AgentListModel from "../../components/AgentListModel";
import PageHeader from "../../components/PageHeader";
import JobDetailsModal from "../../components/JobDetailsModal";

const JobQue = (): JSX.Element => {
    return (
        <>
            <AgentListModel />

            <JobDetailsModal />

            <PageHeader pageTitle="Job Que" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
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
                                            <th>Request Status</th>
                                            <th className="text-center">Action</th>
                                            <th className="text-center">View</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="p_img" src="https://placehold.co/50x50" alt="" />
                                            </td>
                                            <td>Arthur Henry</td>
                                            <td>Change the Air Filters</td>
                                            <td>Pending</td>
                                            <td>Accepted</td>
                                            <td className="text-center">
                                                <Link to="#" className="add_er self mr-3">
                                                    Self
                                                </Link>
                                                <Link to="#" data-toggle="modal" data-target="#largeModal_2"
                                                    className="add_er assign">
                                                    Assign
                                                </Link>
                                            </td>
                                            <td className="text-center">
                                                <Link to="#" className="add_er assign" data-toggle="modal" data-target="#job_Details">
                                                    Details
                                                </Link>
                                            </td>
                                        </tr>
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

export default JobQue;