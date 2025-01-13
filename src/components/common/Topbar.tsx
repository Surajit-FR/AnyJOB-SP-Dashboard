import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store/Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AuthLogoutRequest } from "../../store/reducers/AuthReducers";
import { getProfileDataRequest } from "../../store/reducers/ProfileReducer";
import { RootState } from "../../store/Store";
const Topbar = (): JSX.Element => {
    const userId = localStorage.getItem("_id") || ""
    const { userData } = useSelector((state: RootState) => state.profileSlice);
    const toggleClasses = () => {
        document.body.classList.toggle("fixed-left-void");

        const wrapper = document.getElementById("wrapper");
        if (wrapper) {
            wrapper.classList.toggle("enlarged");
        }
    };

    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const userLogout = () => {
        dispatch(AuthLogoutRequest({ navigate }));
    };

    useEffect(() => {
        dispatch({ type: 'location/fetchLocation' });

        // Optionally, you could set an interval to request location periodically
        const intervalId = setInterval(() => {
            dispatch({ type: 'location/fetchLocation' });
        }, 60000); // Retry every 1 minute

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [dispatch]);

    useEffect(() => {
        dispatch(getProfileDataRequest({ id: userId }))
    }, [dispatch, userId])

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
                                    src={userData?.avatar?  userData?.avatar :"https://placehold.co/50x50"}
                                    alt="user"
                                    className="rounded-circle"
                                />
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
                                <Link className="dropdown-item" to="/profile">
                                    <i className="mdi mdi-account-circle m-r-5 text-muted"></i> Profile
                                </Link>
                                {/* <Link className="dropdown-item" to="/profile">
                                    <i className="fa fa-pencil-square-o text-muted"></i> Edit Profile
                                </Link> */}
                                <Link className="dropdown-item" to="#" onClick={userLogout}>
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