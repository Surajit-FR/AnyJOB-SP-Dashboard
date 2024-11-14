import { Link } from "react-router-dom";

const Login = (): JSX.Element => {
    return (
        <>
            <div className="sec_ton">
                <div className="container-fluid">
                    <div className="row">

                        <div className="col-md-6 d-flex align-items-center">
                            <div className="rt_yu">
                                <div className="bof">
                                    <div className="loging_logo">
                                        <Link to="/dashboard">
                                            <img src="./assets/images/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <form action="index.html">


                                        <h2>Login</h2>
                                        <div className="n_t">
                                            <h4>Email Address</h4>
                                            <input className="rt" type="email" name="email" placeholder="Enter your email address" />
                                        </div>
                                        <div className="n_t">
                                            <h4>Password</h4>
                                            <input className="rt" type="password" name="password" placeholder="Enter your Password" />
                                            <div className="fa_eye">
                                                <i className="fa-solid fa-eye"></i>
                                                {/* <i className="fa-solid fa-eye-slash"></i> */}
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="hj">
                                                    <input className="login_9" type="submit" value="Login" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="hj text-right">
                                                    <p className="dr"><Link to="#"> Forgot Password</Link></p>
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="hj text-center">
                                                    <p className="dr fe mt-3">Don't have an account? <Link to="sign-up.html">Sign Up</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="fr">
                                <img src="./assets/images/b1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Login;