import { Flex, Input, Typography } from 'antd';
import type { GetProps } from 'antd';
import type { JSX } from 'react';

type OTPProps = GetProps<typeof Input.OTP>;

const { Title } = Typography;

const OTPComponent = ({onChange} : { onChange : (text: string) => void }) : JSX.Element => {

  const sharedProps: OTPProps = {
    onChange,
    autoFocus: true
};

  return (
    <Flex gap="middle" align="flex-start" vertical>
      
      <Title level={5}>Enter OTP here:</Title>
      <Input.OTP length={8} {...sharedProps} />
      
    </Flex>
  );
};

export default OTPComponent;