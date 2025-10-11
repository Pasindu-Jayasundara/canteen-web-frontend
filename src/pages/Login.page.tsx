import type { JSX } from 'react';
import LoginForm from '../components/LoginForm.component';
import type { LoginFormType } from '../types/LoginPage.type';
import { Image } from 'antd';

const LoginPage = (): JSX.Element => {

  const onFinish = (values: LoginFormType) => {
    console.log('Received values of form: ', values.universityMail, values.rememberMe);
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