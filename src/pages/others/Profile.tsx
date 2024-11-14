import PageHeader from "../../components/PageHeader";

const Profile = (): JSX.Element => {
    return (
        <>
            <PageHeader pageTitle="Profile" />

            <div className="row">
                <div className="col-xl-12">
                    <div className="card m-b-30">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="profiles_it">
                                        <div className="profiles_img">
                                            <img src="./assets/images/b1.jpg" alt="" />
                                        </div>
                                        <div className="profiles_text">
                                            <div className="bd_ft">
                                                <img src="./assets/images/p.webp" alt="" />
                                            </div>

                                            <div className="d_showd">
                                                <div className="text-center vg">
                                                    <h4>Madalyn Rascon</h4>
                                                    <p>Company Name</p>
                                                </div>

                                                <ul className="pr_vot">
                                                    <li>
                                                        <p>10</p>
                                                        <h5>Field Agents</h5>
                                                    </li>
                                                    <li>
                                                        <p>20</p>
                                                        <h5>Complete Requests</h5>
                                                    </li>
                                                    <li>
                                                        <p>30</p>
                                                        <h5>New Requests</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h3 className="ty_1"> Personal Info</h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Full Name</h4>
                                                <input className="rt" type="text" name="text" placeholder="Enter your full name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Email</h4>
                                                <input className="rt" type="text" name="text" placeholder="Enter your email address" />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Phone</h4>
                                                <input className="rt" type="text" name="text" placeholder="enter your phone number" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="n_t">
                                                <h4>Address</h4>
                                                <input className="rt" type="text" name="text" placeholder="enter your Address" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="n_t">
                                                <h4>Bio</h4>
                                                <textarea className="rt something_1"
                                                    placeholder="Write something..."></textarea>
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <h3 className="ty_1">Documents</h3>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="./assets/images/p.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="./assets/images/p.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="./assets/images/p.webp" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="so_boxc">
                                                <img src="./assets/images/p.webp" alt="" />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <button type="submit" className="save_rt">
                                                <i className="ri-save-line"></i> Save
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;