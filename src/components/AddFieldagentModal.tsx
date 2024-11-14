const AddFieldagentModal = (): JSX.Element => {
    return (
        <>
            <div className="modal fade" id="largeModal" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg b_prosion">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title f_add" id="myModalLabel">Add Field Agent</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row p-3">
                                    <div className="col-md-12">
                                        <div className="add_input">
                                            <h4>First Name</h4>
                                            <input className="es_input" type="text" name="text" placeholder="Esther" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="add_input">
                                            <h4>Last Name</h4>
                                            <input className="es_input" type="text" name="text" placeholder="Howard" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="add_input">
                                            <h4>Phone No.*</h4>
                                            <input className="es_input" type="text" name="text" placeholder="(302) 555-0107" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="add_input">
                                            <h4>Email Address </h4>
                                            <input className="es_input" type="email" name="email" placeholder="esther.howard@example.com" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="add_input">
                                            <input className="add_agents" type="submit" value="Add Agent" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddFieldagentModal;