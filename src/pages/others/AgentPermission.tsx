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
                                            <th>Permission 1</th>
                                            <th>Permission 2</th>
                                            <th>Permission 3</th>
                                            <th>Permission 4</th>
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
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_4" name="permission" />
                                                    <label htmlFor="per_4"></label>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Patrick Culhane
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_5" name="permission_2" defaultChecked={true} />
                                                    <label htmlFor="per_5"></label>
                                                </p>
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_6" name="permission_2" />
                                                    <label htmlFor="per_6"></label>
                                                </p>
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_7" name="permission_2" />
                                                    <label htmlFor="per_7"></label>
                                                </p>
                                            </td>
                                            <td>
                                                <p className="c_radio">
                                                    <input className="re_radio" type="checkbox" id="per_8" name="permission_2" />
                                                    <label htmlFor="per_8"></label>
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