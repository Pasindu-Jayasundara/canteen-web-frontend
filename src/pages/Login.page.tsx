import type { JSX } from 'react';
import LoginForm from '../components/LoginForm.component';
import type { LoginFormType } from '../types/LoginPage.type';
import { Image } from 'antd';
import { AxiosInstance } from '../services/Axios.service';

const LoginPage = (): JSX.Element => {

  const onFinish = async (values: LoginFormType) => {
    console.log('Received values of form: ', values.universityMail, values.rememberMe);

    const isLoginSuccessful = await AxiosInstance.post('/api/auth/login', {
      universityMail: values.universityMail,
    });

    if (isLoginSuccessful) {

      if (values.rememberMe) {
        localStorage.setItem('universityMail', values.universityMail);
        localStorage.setItem('rememberMe', 'true');
      } else {
        localStorage.removeItem('universityMail');
        localStorage.removeItem('rememberMe');
      }

      // window.location.href = '/dashboard';
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