import { Link } from "react-router-dom";

const Navbar = (): JSX.Element => {
    return (
        <>
            <div className="left side-menu">
                <button type="button" className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i className="ion-close"></i>
                </button>

                <div className="left-side-logo d-block d-lg-none">
                    <div className="text-center">
                        <Link to="/dashboard" className="logo"><img src="assets/images/logo-dark.png" height="20" alt="logo" /></Link>
                    </div>
                </div>

                <div className="sidebar-inner slimscrollleft" style={{ height: "auto" }}>

                    <div id="sidebar-menu">
                        <ul>
                            <li>
                                <Link to="/dashboard" className="waves-effect">
                                    <i className="fa-solid fa-chart-simple"></i>
                                    <span> Dashboard</span>
                                </Link>
                            </li>

                            <li>
                                <Link to="/field-agents" className="waves-effect">
                                    <i className="fa-solid fa-user-gear"></i>
                                    <span>Field Agents</span>
                                </Link>
                            </li>
                            {/* <li>
                                <Link to="job-details.html" className="waves-effect">
                                    <i className="fa-solid fa-square-poll-horizontal"></i>
                                    <span>Job Details </span>
                                </Link>
                            </li> */}
                            <li>
                                <Link to="/agent-permission" className="waves-effect">
                                    <i className="fa-solid fa-user-lock"></i>
                                    <span>Agent Permission</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/assign-work" className="waves-effect">
                                    <i className="fa-solid fa-handshake-angle"></i>
                                    <span>Assign Work</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;