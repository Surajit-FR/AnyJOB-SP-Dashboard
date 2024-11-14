import { Link } from "react-router-dom";

const Topbar = (): JSX.Element => {
    const toggleClasses = () => {
        document.body.classList.toggle("fixed-left-void");

        const wrapper = document.getElementById("wrapper");
        if (wrapper) {
            wrapper.classList.toggle("enlarged");
        }
    };

    return (
        <>
            <div className="topbar">
                <div className="topbar-left d-none d-lg-block">
                    <div className="text-center">
                        <Link to="/dashboard" className="logo j_ot">
                            <img src="./assets/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                </div>

                <nav className="navbar-custom">
                    <ul className="list-inline float-right mb-0">
                        <li className="list-inline-item dropdown notification-list">
                            <Link
                                className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
                                data-toggle="dropdown"
                                to="#"
                                role="button"
                                aria-haspopup="false"
                                aria-expanded="false"
                            >
                                <img
                                    src="./assets/images/p.webp"
                                    alt="user"
                                    className="rounded-circle"
                                />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                                <Link className="dropdown-item" to="/profile">
                                    <i className="mdi mdi-account-circle m-r-5 text-muted"></i> Profile
                                </Link>
                                <Link className="dropdown-item" to="/profile">
                                    <i className="fa fa-pencil-square-o text-muted"></i> Edit Profile
                                </Link>
                                <Link className="dropdown-item" to="/login">
                                    <i className="mdi mdi-logout m-r-5 text-muted"></i> Logout
                                </Link>
                            </div>
                        </li>
                    </ul>

                    <ul className="list-inline menu-left mb-0">
                        <li className="list-inline-item">
                            <button
                                type="button"
                                className="button-menu-mobile open-left waves-effect"
                                onClick={toggleClasses}
                            >
                                <i className="ion-navicon"></i>
                            </button>
                        </li>
                    </ul>

                    <div className="clearfix"></div>
                </nav>
            </div>
        </>
    );
};

export default Topbar;