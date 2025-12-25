import React from 'react';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

const ProfileImage: React.FC = () => (

    <div className="flex justify-center items-center p-4">
        <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 60, xxl: 100 }}
            icon={<AntDesignOutlined />}
            style={{ backgroundColor: '#f59e0b' }}
        />
    </div>
);

export default ProfileImage;