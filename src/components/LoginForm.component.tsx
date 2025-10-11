import { MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';
import type { JSX } from 'react';
import type { LoginFormType } from '../types/LoginPage.type';

const LoginFormComponent = ({ onFinish }: { onFinish: (values: LoginFormType) => void }): JSX.Element => {

  return (
    <Form
      name="login"
      initialValues={{ rememberMe: true, universityMail: localStorage.getItem('universityMail') }}
      style={{ maxWidth: 360, width: '100%'}}
      onFinish={onFinish}
    >
      <Form.Item
        name="universityMail"
        rules={[{ required: true, message: 'Please input your valid University Email!', type: 'email', pattern: new RegExp('.+@fot\\.ruh\\.ac\\.lk$') }]}
      >
        <Input prefix={<MailOutlined />} placeholder="University Email" />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="rememberMe" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
        </Flex>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Log in
        </Button>
        or <a href="">Register now!</a>
      </Form.Item>
    </Form>
  );
};

export default LoginFormComponent;