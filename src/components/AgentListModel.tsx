const AgentListModel = (): JSX.Element => {
    return (
        <>
            <div className="modal fade" id="largeModal_2" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg b_prosion five_hundred">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title f_add" id="myModalLabel">Assign</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="row px-3">
                                    <div className="col-md-12">
                                        <ul className="patrick_active1">
                                            <li className="culhane_img">
                                                <img className="" src="https://placehold.co/50x50" alt="" />
                                            </li>
                                            <li className="culhane_text" style={{ width: "70%" }}>
                                                <h4>Patrick Culhane</h4>
                                                <p className="active">Agent not engaged in any task</p>
                                            </li>
                                            <li className="raddio_text">
                                                <p className="c_radio">
                                                    <input className="re_radio" type="radio" id="test1" name="radio-group" defaultChecked={true} />
                                                    <label htmlFor="test1"></label>
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="patrick_active1">
                                            <li className="culhane_img">
                                                <img className="" src="https://placehold.co/50x50" alt="" />
                                            </li>
                                            <li className="culhane_text" style={{ width: "70%" }}>
                                                <h4>Ronald Richards</h4>
                                                <p>Agent engaged in a task</p>
                                            </li>
                                            <li className="raddio_text">
                                                <p className="c_radio">
                                                    <input className="re_radio" type="radio" id="test2" name="radio-group" />
                                                    <label htmlFor="test2"></label>
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="patrick_active1">
                                            <li className="culhane_img">
                                                <img className="" src="https://placehold.co/50x50" alt="" />
                                            </li>
                                            <li className="culhane_text" style={{ width: "70%" }}>
                                                <h4>Robert Fox</h4>
                                                <p className="active">Agent not engaged in any task</p>
                                            </li>
                                            <li className="raddio_text">
                                                <p className="c_radio">
                                                    <input className="re_radio" type="radio" id="test3" name="radio-group" />
                                                    <label htmlFor="test3"></label>
                                                </p>
                                            </li>
                                        </ul>
                                        <ul className="patrick_active1">
                                            <li className="culhane_img">
                                                <img className="" src="https://placehold.co/50x50" alt="" />
                                            </li>
                                            <li className="culhane_text" style={{ width: "70%" }}>
                                                <h4>Jacob Jones</h4>
                                                <p>Agent engaged in a task</p>
                                            </li>
                                            <li className="raddio_text">
                                                <p className="c_radio">
                                                    <input className="re_radio" type="radio" id="test3" name="radio-group" />
                                                    <label htmlFor="test3"></label>
                                                </p>
                                            </li>
                                        </ul>
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

export default AgentListModel;