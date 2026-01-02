import React, { useState } from "react";
import { Card, Row, Col, Avatar, Typography, Button, Divider, Tag, Space, Upload, message, Input } from "antd";
import { UserOutlined, MailOutlined, PhoneOutlined, EnvironmentOutlined, CameraOutlined, EditOutlined, CalendarOutlined, SaveOutlined, CloseOutlined } from "@ant-design/icons";
import type { UploadProps } from 'antd';

const { Title, Text, Paragraph } = Typography;

export const ProfileComponent = () => {
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "John Doe",
        email: "john.doe@example.com",
        phone: "+94 77 123 4567",
        location: "Colombo, Sri Lanka",
        bio: "Experienced canteen manager with over 5 years in food service management. Passionate about delivering quality meals and maintaining high standards of hygiene and customer satisfaction. Skilled in inventory management, staff coordination, and menu planning."
    });

    const handleSave = () => {
        setEditing(false);
        message.success('Profile updated successfully');
    };

    const handleCancel = () => {
        setEditing(false);
    };

    const uploadProps: UploadProps = {
        name: 'avatar',
        showUploadList: false,
        beforeUpload: (file) => {
            const isImage = file.type.startsWith('image/');
            if (!isImage) {
                message.error('You can only upload image files!');
            }
            return isImage || Upload.LIST_IGNORE;
        },
        onChange: (info) => {
            if (info.file.status === 'done') {
                message.success('Profile picture updated successfully');
            } else if (info.file.status === 'error') {
                message.error('Failed to upload profile picture');
            }
        },
    };

    return (
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>
                    Profile
                </Title>
                <Text type="secondary">Configure your profile information.</Text>
            </div>
            <Space direction="vertical" size={22} style={{ width: "100%" }}>
                {/* Profile Header Card */}
                <Card bordered={false} style={{ borderRadius: 12 }}>
                    <Row gutter={[24, 24]} align="middle">
                        <Col xs={24} md={6} style={{ textAlign: "center" }}>
                            <div style={{ position: "relative", display: "inline-block" }}>
                                <Avatar size={100} icon={<UserOutlined />} src="/path-to-avatar.jpg" />
                                <Upload {...uploadProps}>
                                    <Button
                                        shape="circle"
                                        icon={<CameraOutlined />}
                                        size="large"
                                        style={{
                                            position: "absolute",
                                            bottom: 5,
                                            right: 5,
                                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)"
                                        }}
                                    />
                                </Upload>
                            </div>
                        </Col>
                        <Col xs={24} md={18}>
                            <Space direction="vertical" size={1} style={{ width: "100%" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                                    <Title level={3} style={{ margin: 0 }}>
                                        John Doe
                                    </Title>
                                    <Tag color="blue">Canteen Manager</Tag>
                                </div>
                                <Space size={16} wrap style={{ marginTop: 12 }}>
                                    <Space>
                                        <MailOutlined style={{ color: "#1890ff" }} />
                                        <Text>john.doe@example.com</Text>
                                    </Space>
                                    <Space>
                                        <PhoneOutlined style={{ color: "#52c41a" }} />
                                        <Text>+94 77 123 4567</Text>
                                    </Space>
                                    <Space>
                                        <EnvironmentOutlined style={{ color: "#fa8c16" }} />
                                        <Text>Colombo, Sri Lanka</Text>
                                    </Space>
                                    <Space>
                                        <CalendarOutlined style={{ color: "#722ed1" }} />
                                        <Text>Joined Dec 2023</Text>
                                    </Space>
                                </Space>
                            </Space>
                        </Col>
                    </Row>
                </Card>

                {/* Details Grid */}
                <Row gutter={[16, 16]}>
                    {/* About Section */}
                    <Col xs={24} lg={12}>
                        <Card
                            bordered={false}
                            title={
                                <Space>
                                    <UserOutlined />
                                    <span>About</span>
                                </Space>
                            }
                            extra={
                                editing ? (
                                    <Space>
                                        <Button
                                            type="link"
                                            icon={<CloseOutlined />}
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                        <Button
                                            type="primary"
                                            icon={<SaveOutlined />}
                                            onClick={handleSave}
                                        >
                                            Save
                                        </Button>
                                    </Space>
                                ) : (
                                    <Button
                                        type="link"
                                        icon={<EditOutlined />}
                                        onClick={() => setEditing(true)}
                                    >
                                        Edit
                                    </Button>
                                )
                            }
                            style={{ borderRadius: 12, height: "100%" }}
                        >
                            <Space direction="vertical" size={16} style={{ width: "100%" }}>
                                <div>
                                    <Text strong>Full Name</Text>
                                    {editing ? (
                                        <Input 
                                            value={formData.fullName} 
                                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                                            style={{ marginTop: 8 }}
                                        />
                                    ) : (
                                        <div><Text>{formData.fullName}</Text></div>
                                    )}
                                </div>
                                <Divider style={{ margin: "8px 0" }} />
                                <div>
                                    <Text strong>Email</Text>
                                    {editing ? (
                                        <Input 
                                            value={formData.email} 
                                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                                            style={{ marginTop: 8 }}
                                        />
                                    ) : (
                                        <div><Text>{formData.email}</Text></div>
                                    )}
                                </div>
                                <Divider style={{ margin: "8px 0" }} />
                                <div>
                                    <Text strong>Phone</Text>
                                    {editing ? (
                                        <Input 
                                            value={formData.phone} 
                                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                            style={{ marginTop: 8 }}
                                        />
                                    ) : (
                                        <div><Text>{formData.phone}</Text></div>
                                    )}
                                </div>
                                <Divider style={{ margin: "8px 0" }} />
                                <div>
                                    <Text strong>Location</Text>
                                    {editing ? (
                                        <Input 
                                            value={formData.location} 
                                            onChange={(e) => setFormData({...formData, location: e.target.value})}
                                            style={{ marginTop: 8 }}
                                        />
                                    ) : (
                                        <div><Text>{formData.location}</Text></div>
                                    )}
                                </div>
                            </Space>
                        </Card>
                    </Col>

                    {/* Bio Section */}
                    <Col xs={24} lg={12}>
                        <Card
                            bordered={false}
                            title="Bio"
                            style={{ borderRadius: 12, height: "100%" }}
                        >
                            {editing ? (
                                <Input.TextArea 
                                    value={formData.bio}
                                    onChange={(e) => setFormData({...formData, bio: e.target.value})}
                                    rows={6}
                                />
                            ) : (
                                <Paragraph>
                                    {formData.bio}
                                </Paragraph>
                            )}
                        </Card>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};