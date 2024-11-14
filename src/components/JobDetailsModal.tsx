const JobDetailsModal = () => {
    return (
        <>
            <div className="modal fade" id="job_Details" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg b_prosion job_details_1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title f_add" id="myModalLabel">Job Details</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body p-4">
                            <form>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="add_check">
                                            <h4>Service</h4>
                                            <h5>AC Check-Up</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-4">
                                        <div className="add_check">
                                            <h4>Date</h4>
                                            <h5>July,14</h5>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="add_check">
                                            <h4>Time</h4>
                                            <h5>07:00 AM</h5>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="add_check">
                                            <ul className="sara_lit">
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-envelope"></i>
                                                    </span>
                                                    sara.cruz@example.com
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-light fa-phone"></i>
                                                    </span>
                                                    (+1) 555-0129
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </span>
                                                    4140 Parker Rd. Allentown, New Mexico 31134, 2nd Floor
                                                </li>
                                            </ul>

                                            <ul className="sara_lit_123">
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                                    </span>
                                                    Change the Air Filters
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                                    </span>
                                                    Split air conditioner
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                                    </span>
                                                    1.5 ton
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-solid fa-screwdriver-wrench"></i>
                                                    </span>
                                                    0 - 1  years
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-image"></i>
                                                    </span>

                                                    <ul className="k_img">
                                                        <li>
                                                            <img src="./assets/images/img1.png" alt="" />
                                                        </li>
                                                        <li>
                                                            <img src="./assets/images/img2.png" alt="" />
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <span>
                                                        <i className="fa-regular fa-file-zipper"></i>
                                                    </span>
                                                    A room air conditioner's efficiency is measured by the energy efficiency ratio (EER).
                                                </li>
                                            </ul>
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

export default JobDetailsModal;