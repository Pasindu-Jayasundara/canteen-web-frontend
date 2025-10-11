import type { JSX } from 'react';
import LoginForm from '../components/LoginForm.component';
import type { LoginFormType } from '../types/LoginPage.type';

const LoginPage = (): JSX.Element => {

  const onFinish = (values: LoginFormType) =>{
    console.log('Received values of form: ', values.username, values.password, values.rememberMe);
  }

  return (
    <div className={"h-screen grid place-items-center"}>
    <LoginForm onFinish={onFinish}/>
    </div>
  );
};

export default LoginPage;