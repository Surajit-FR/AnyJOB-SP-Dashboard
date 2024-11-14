import PageHeader from "../../components/PageHeader";

const AgentPermission = (): JSX.Element => {
    return (
        <>
            <PageHeader pageTitle="Agent Permission" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="mt-0 header-title mb-4">Give Permission</h4>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Add New Aggent</th>
                                            <th>Accept Request</th>
                                            <th>Assign Job</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                Patrick Culhane
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_1" name="permission" defaultChecked={true} />
                                                    <label htmlFor="per_1"></label>
                                                </p>
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_2" name="permission" />
                                                    <label htmlFor="per_2"></label>
                                                </p>
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_3" name="permission" />
                                                    <label htmlFor="per_3"></label>
                                                </p>
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

export default AgentPermission;