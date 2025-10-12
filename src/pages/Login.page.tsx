import type { JSX } from 'react';
import LoginForm from '../components/LoginForm.component';
import type { LoginFormType } from '../types/LoginPage.type';
import { Image } from 'antd';
import { AxiosInstance } from '../services/Axios.service';
import { useNavigate } from 'react-router';

const LoginPage = (): JSX.Element => {

  const navigate = useNavigate();

  const onFinish = async (values: LoginFormType) => {
    console.log('Received values of form: ', values.universityMail, values.rememberMe);

    const response = await AxiosInstance.post('/api/auth/login', {
      universityMail: values.universityMail,
    });

    console.log("data:", response.data.message);

    if (response.data.message === "Verify OTP") { 

      if (values.rememberMe) {
        localStorage.setItem('universityMail', values.universityMail);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('universityMail');
        localStorage.removeItem('rememberMe');
      }

      navigate('/verify-otp', { replace: true, state: { user: response.data.user } });
    }
  }

  return (
    <div className={"h-screen flex flex-col justify-center items-center"}>
      <Image
        preview={false}
        src="/store.png"
        width={150}
        className={"mb-7"}
      />
      <LoginForm onFinish={onFinish} />
    </div>
  );
};

export default LoginPage;