import { Link } from "react-router-dom";
import {
    RiDashboardLine,
    RiUserSettingsLine,
    RiLockLine,
    RiListCheck2,
    RiArchiveStackLine,
} from "react-icons/ri";

const navLinks = [
    {
        path: "/dashboard",
        icon: <RiDashboardLine className="mx-1" />,
        label: "Dashboard"
    },
    {
        path: "/field-agents",
        icon: <RiUserSettingsLine className="mx-1" />,
        label: "Field Agents"
    },
    {
        path: "/agent-permission",
        icon: <RiLockLine className="mx-1" />,
        label: "Agent Permission"
    },
    {
        path: "/job-requests",
        icon: <RiListCheck2 className="mx-1" />,
        label: "Job Requests"
    },
    {
        path: "/job-queue",
        icon: <RiArchiveStackLine className="mx-1" />,
        label: "Job Queue"
    },
];

const Navbar = (): JSX.Element => {
    return (
        <>
            <div className="left side-menu">
                <button type="button" className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                    <i className="ion-close"></i>
                </button>

                <div className="left-side-logo d-block d-lg-none">
                    <div className="text-center">
                        <Link to="/dashboard" className="logo">
                            <img src="./assets/images/logo-dark.png" height="20" alt="logo" />
                        </Link>
                    </div>
                </div>

                <div className="sidebar-inner slimscrollleft" style={{ height: "auto" }}>
                    <div id="sidebar-menu">
                        <ul>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link to={link.path} className="waves-effect">
                                        {link.icon}
                                        <span> {link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </>
    );
};

export default Navbar;