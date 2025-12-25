import type { OTPProps } from "antd/es/input/OTP";
import OTPComponent from "../components/OTP.component";
import { AxiosInstance } from "../services/Axios.service";
import { useLocation, useNavigate } from "react-router";
import { useContext } from "react";
import type { UserType } from "../types/User.type";
import { AuthContext } from "../context/authContext/auth.context";

const VerifyOtpPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const authContext = useContext(AuthContext);

    const { user } = location.state || {};

    const onChange: OTPProps['onChange'] = async (text) => {


        const response = await AxiosInstance.post("/api/auth/verify-otp", {
            otp: text,
            user: user
        });

        if (response.data.message === "Login successful") {

            const loggedUser: UserType = {
                id: response.data.user._id,
                universityMail: response.data.user.universityMail
            };

            authContext?.setUser?.(loggedUser);
            localStorage.setItem("user", JSON.stringify(loggedUser));
            
            navigate('/user/dashboard', { replace: true });
        }
    }

    return (
        <div className={"h-screen flex flex-col justify-center items-center"}>
            <OTPComponent onChange={onChange} />
        </div>
    );
}

export default VerifyOtpPage;