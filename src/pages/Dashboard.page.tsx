import { useContext, type JSX } from "react";
import { AuthContext } from "../context/authContext/auth.context";
import { Outlet } from "react-router";

const DashboardPage = (): JSX.Element => {

    const user = useContext(AuthContext)?.user;

    return (
        <>
            <div>{user?.id} welcome to the dashboard</div>
            <Outlet />
        </>
    );
};

export default DashboardPage;