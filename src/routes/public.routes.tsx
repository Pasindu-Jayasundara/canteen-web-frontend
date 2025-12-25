import { useContext, type JSX } from "react";
import { AuthContext } from "../context/authContext/auth.context";
import { Navigate } from "react-router";
import { Outlet } from "react-router";

export const PublicRoutes = (): JSX.Element => {

    const user = useContext(AuthContext)?.user;
    if(!user){
        return <Outlet/>;
    }else{
        return <Navigate to="/user/dashboard" replace={true} />;
    }

}