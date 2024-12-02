import { useState } from "react";
import { Link, NavigateFunction, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/Store";
import { AuthLoginRequest } from "../../store/reducers/AuthReducers";

interface LoginFormValues {
    email: string;
    password: string;
    userType: string;
}

const Login = (): JSX.Element => {
    const [show, setShow] = useState<boolean>(false);
    const dispatch: AppDispatch = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>();

    const onSubmit = (values: LoginFormValues) => {
        const data = { ...values, userType: "ServiceProvider" }
        dispatch(AuthLoginRequest({ data, navigate }));
    };

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
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <h2>Login</h2>

                                        {/* Email Input */}
                                        <div className="n_t">
                                            <h4>Email Address</h4>
                                            <input
                                                className={`rt ${errors.email ? "error-input" : ""}`}
                                                type="email"
                                                placeholder="Enter your email address"
                                                {...register("email", {
                                                    required: "Email is required",
                                                    pattern: {
                                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                        message: "Invalid email address",
                                                    },
                                                })}
                                            />
                                            {errors.email && <div className="error">{errors.email.message}</div>}
                                        </div>

                                        {/* Password Input */}
                                        <div className="n_t">
                                            <h4>Password</h4>
                                            <input
                                                className={`rt ${errors.password ? "error-input" : ""}`}
                                                type={!show ? "password" : "text"}
                                                placeholder="Enter your password"
                                                {...register("password", {
                                                    required: "Password is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Password must be at least 6 characters",
                                                    },
                                                })}
                                            />
                                            <div className="fa_eye" onClick={() => setShow(!show)}>
                                                <i className={!show ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"}></i>
                                            </div>
                                            {errors.password && <div className="error">{errors.password.message}</div>}
                                        </div>

                                        {/* Submit Button */}
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="hj">
                                                    <button type="submit" className="login_9">Login</button>
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