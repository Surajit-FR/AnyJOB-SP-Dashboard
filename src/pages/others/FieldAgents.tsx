import { Link } from "react-router-dom";
import AddFieldagentModal from "../../components/AddFieldagentModal";
import PageHeader from "../../components/PageHeader";

const FieldAgents = (): JSX.Element => {
    return (
        <>
            <AddFieldagentModal />

            <PageHeader pageTitle="Field Agent" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6">
                                    <h4 className="mt-0 header-title mb-4">Agents</h4>
                                </div>
                                <div className="col-md-6">
                                    <div className="text-right">
                                        <Link to="#" className="add_er are_add" data-toggle="modal"
                                            data-target="#largeModal">Add Field Agent</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="p_img" src="./assets/images/p.webp" alt="" />
                                            </td>
                                            <td>Patrick Culhane</td>
                                            <td>mohit@gmail.com </td>
                                            <td>9831855983</td>
                                            <td><Link to="#" className="add_er">Appoint TL</Link></td>
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

export default FieldAgents;