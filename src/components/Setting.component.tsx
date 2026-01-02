import React, { useState } from "react";
import { Tabs, Card, Form, Input, Button, Switch, Typography, Space, Row, Col, Select, Divider, message } from "antd";
import { LockOutlined, BellOutlined, BgColorsOutlined, GlobalOutlined, UserOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const SectionHeader = ({ title, description }: { title: string; description: string }) => (
    <Space direction="vertical" size={2} style={{ width: "100%" }}>
        <Title level={4} style={{ margin: 0 }}>
            {title}
        </Title>
        <Text type="secondary">{description}</Text>
    </Space>
);

const SectionCard = ({ children }: { children: React.ReactNode }) => (
    <Card bordered style={{ borderRadius: 12, boxShadow: "0 4px 14px rgba(0,0,0,0.04)" }}>
        {children}
    </Card>
);

const SaveBar = ({ loading, onSave }: { loading: boolean; onSave: () => void }) => (
    <Divider style={{ margin: "24px 0" }}>
        <Button type="primary" size="middle" onClick={onSave} loading={loading}>
            Save changes
        </Button>
    </Divider>
);

export const SettingComponent = () => {
    const [saving, setSaving] = useState(false);

    const handleSave = async (scope: string) => {
        setSaving(true);
        setTimeout(() => {
            setSaving(false);
            message.success(`${scope} saved`);
        }, 900);
    };

    const tabItems = [
        {
            key: "profile",
            label: (
                <Space>
                    <UserOutlined /> Profile
                </Space>
            ),
            children: (
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <SectionHeader title="" description="Basic information about you." />
                    <SectionCard>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Full name">
                                        <Input placeholder="Enter your full name" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Email">
                                        <Input type="email" placeholder="you@example.com" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Phone">
                                        <Input placeholder="+94 77 123 4567" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24}>
                                    <Form.Item label="Bio">
                                        <Input.TextArea rows={3} placeholder="Short description" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <SaveBar loading={saving} onSave={() => handleSave("Profile")} />
                        </Form>
                    </SectionCard>
                </Space>
            ),
        },
        {
            key: "security",
            label: (
                <Space>
                    <LockOutlined /> Security
                </Space>
            ),
            children: (
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <SectionHeader title="" description="Keep your account protected." />
                    <SectionCard>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Current password">
                                        <Input.Password placeholder="Current password" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="New password">
                                        <Input.Password placeholder="New password" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={8}>
                                    <Form.Item label="Confirm password">
                                        <Input.Password placeholder="Repeat new password" />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Space direction="vertical" size={12} style={{ width: "100%" }}>
                                <Text strong>Two-factor authentication</Text>
                                <Switch defaultChecked />
                                <Text type="secondary">Add an extra verification step during sign in.</Text>
                            </Space>
                            <SaveBar loading={saving} onSave={() => handleSave("Security")} />
                        </Form>
                    </SectionCard>
                </Space>
            ),
        },
        {
            key: "notifications",
            label: (
                <Space>
                    <BellOutlined /> Notifications
                </Space>
            ),
            children: (
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <SectionHeader title="" description="Choose how you want to be notified." />
                    <SectionCard>
                        <Space direction="vertical" size={14} style={{ width: "100%" }}>
                            <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                                <div>
                                    <Text strong>Email alerts</Text>
                                    <div><Text type="secondary">Order updates and account activity.</Text></div>
                                </div>
                                <Switch defaultChecked />
                            </Space>
                            <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                                <div>
                                    <Text strong>Push notifications</Text>
                                    <div><Text type="secondary">Browser push for realtime changes.</Text></div>
                                </div>
                                <Switch defaultChecked />
                            </Space>
                            <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                                <div>
                                    <Text strong>New menu items</Text>
                                    <div><Text type="secondary">Be alerted when fresh items drop.</Text></div>
                                </div>
                                <Switch />
                            </Space>
                        </Space>
                        <SaveBar loading={saving} onSave={() => handleSave("Notifications")} />
                    </SectionCard>
                </Space>
            ),
        },
        {
            key: "appearance",
            label: (
                <Space>
                    <BgColorsOutlined /> Appearance
                </Space>
            ),
            children: (
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <SectionHeader title="" description="Display preferences for your dashboard." />
                    <SectionCard>
                        <Space direction="vertical" size={14} style={{ width: "100%" }}>
                            <Space align="center" style={{ justifyContent: "space-between", width: "100%" }}>
                                <div>
                                    <Text strong>Dark mode</Text>
                                    <div><Text type="secondary">Toggle dark theme when available.</Text></div>
                                </div>
                                <Switch />
                            </Space>
                            <Form layout="vertical">
                                <Form.Item label="Font size">
                                    <Select defaultValue="medium" options={[{ value: "small", label: "Small" }, { value: "medium", label: "Medium" }, { value: "large", label: "Large" }]} />
                                </Form.Item>
                            </Form>
                        </Space>
                        <SaveBar loading={saving} onSave={() => handleSave("Appearance")} />
                    </SectionCard>
                </Space>
            ),
        },
        {
            key: "language",
            label: (
                <Space>
                    <GlobalOutlined /> Language & region
                </Space>
            ),
            children: (
                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                    <SectionHeader title="" description="Localization options." />
                    <SectionCard>
                        <Form layout="vertical">
                            <Row gutter={16}>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Language">
                                        <Select
                                            defaultValue="en"
                                            options={[
                                                { value: "en", label: "English" },
                                                { value: "si", label: "Sinhala" },
                                                { value: "ta", label: "Tamil" },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Time zone">
                                        <Select
                                            defaultValue="utc+5:30"
                                            options={[
                                                { value: "utc+5:30", label: "Asia/Colombo (UTC+5:30)" },
                                                { value: "utc", label: "UTC" },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} md={12}>
                                    <Form.Item label="Date format">
                                        <Select
                                            defaultValue="dd/mm/yyyy"
                                            options={[
                                                { value: "dd/mm/yyyy", label: "DD/MM/YYYY" },
                                                { value: "mm/dd/yyyy", label: "MM/DD/YYYY" },
                                                { value: "yyyy-mm-dd", label: "YYYY-MM-DD" },
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <SaveBar loading={saving} onSave={() => handleSave("Language & region")} />
                        </Form>
                    </SectionCard>
                </Space>
            ),
        },
    ];

    return (
        <Card className="border-none border-0" style={{ borderWidth: 0 }}>
            <div style={{ marginBottom: 24 }}>
                <Title level={3} style={{ margin: 0 }}>
                    Settings
                </Title>
                <Text type="secondary">Configure your application settings.</Text>
            </div>
            <Tabs items={tabItems} tabBarStyle={{ marginBottom: 0 }} />
        </Card>
    );
};