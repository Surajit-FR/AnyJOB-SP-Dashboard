import { ReactNode } from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";

type PrivateOneProps = {
    children?: ReactNode;
}

const PrivateOne = ({ children }: PrivateOneProps): JSX.Element => {
    const accessToken: string | null = window.localStorage.getItem("accessToken");
    const refreshToken: string | null = window.localStorage.getItem("refreshToken");
    const location = useLocation();

    if (accessToken || refreshToken) {
        return <>{children ? children : <Outlet />}</>;
    } else {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
};

export default PrivateOne;