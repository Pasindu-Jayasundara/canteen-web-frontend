import { useContext, type JSX } from "react"
import { AuthContext } from "../context/authContext/auth.context"
import { Navigate, Outlet } from "react-router";

export const ProtectedRoutes = () : JSX.Element =>{

    const user = useContext(AuthContext)?.user;
    if(user){
        return <Outlet/>; 
    }else{
        return <Navigate to="/" replace={true} />;
    }
}