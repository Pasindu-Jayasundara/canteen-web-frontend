import React from "react";
import { Card, Row, Col, Statistic, Typography, Space, Table, Tag, Progress, Avatar } from "antd";
import {
    ShoppingCartOutlined,
    DollarOutlined,
    UserOutlined,
    RiseOutlined,
    ClockCircleOutlined,
    CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export const DashboardComponent = () => {
    // Sample data for recent orders
    const recentOrders = [
        {
            key: '1',
            orderId: '#ORD-1234',
            customer: 'Sarah Johnson',
            items: 3,
            amount: 'Rs. 850',
            status: 'completed',
            time: '10 mins ago',
        },
        {
            key: '2',
            orderId: '#ORD-1235',
            customer: 'Mike Wilson',
            items: 2,
            amount: 'Rs. 650',
            status: 'pending',
            time: '25 mins ago',
        },
        {
            key: '3',
            orderId: '#ORD-1236',
            customer: 'Emma Davis',
            items: 5,
            amount: 'Rs. 1,250',
            status: 'preparing',
            time: '35 mins ago',
        },
        {
            key: '4',
            orderId: '#ORD-1237',
            customer: 'John Smith',
            items: 1,
            amount: 'Rs. 350',
            status: 'completed',
            time: '1 hour ago',
        },
        {
            key: '5',
            orderId: '#ORD-1238',
            customer: 'Lisa Brown',
            items: 4,
            amount: 'Rs. 1,100',
            status: 'pending',
            time: '1 hour ago',
        },
    ];

    const columns = [
        {
            title: 'Order ID',
            dataIndex: 'orderId',
            key: 'orderId',
        },
        {
            title: 'Customer',
            dataIndex: 'customer',
            key: 'customer',
            render: (text: string) => (
                <Space>
                    <Avatar size="small" icon={<UserOutlined />} />
                    <Text>{text}</Text>
                </Space>
            ),
        },
        {
            title: 'Items',
            dataIndex: 'items',
            key: 'items',
        },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => {
                let color = 'default';
                if (status === 'completed') color = 'success';
                if (status === 'pending') color = 'warning';
                if (status === 'preparing') color = 'processing';
                return <Tag color={color}>{status.toUpperCase()}</Tag>;
            },
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
    ];

    return (
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
            <Space direction="vertical" size={24} style={{ width: "100%" }}>
                {/* Welcome Header */}
                <div>
                    <Title level={3} style={{ margin: 0 }}>
                        Dashboard
                    </Title>
                    <Text type="secondary">Welcome back! Here's what's happening today.</Text>
                </div>

                {/* Statistics Cards */}
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={12} lg={6}>
                        <Card bordered={false} style={{ borderRadius: 12 }}>
                            <Statistic
                                title="Today's Orders"
                                value={48}
                                prefix={<ShoppingCartOutlined style={{ color: "#1890ff" }} />}
                                suffix={
                                    <span style={{ fontSize: 14, color: "#52c41a" }}>
                                        <RiseOutlined /> +12%
                                    </span>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <Card bordered={false} style={{ borderRadius: 12 }}>
                            <Statistic
                                title="Revenue"
                                value={38450}
                                prefix={<DollarOutlined style={{ color: "#52c41a" }} />}
                                suffix={
                                    <span style={{ fontSize: 14, color: "#52c41a" }}>
                                        <RiseOutlined /> +8%
                                    </span>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <Card bordered={false} style={{ borderRadius: 12 }}>
                            <Statistic
                                title="Customers"
                                value={156}
                                prefix={<UserOutlined style={{ color: "#722ed1" }} />}
                                suffix={
                                    <span style={{ fontSize: 14, color: "#52c41a" }}>
                                        <RiseOutlined /> +5%
                                    </span>
                                }
                            />
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} lg={6}>
                        <Card bordered={false} style={{ borderRadius: 12 }}>
                            <Statistic
                                title="Avg. Prep Time"
                                value={12}
                                suffix="mins"
                                prefix={<ClockCircleOutlined style={{ color: "#fa8c16" }} />}
                            />
                        </Card>
                    </Col>
                </Row>

                {/* Main Content Row */}
                <Row gutter={[16, 16]}>
                    {/* Recent Orders Table */}
                    <Col xs={24} lg={16}>
                        <Card
                            bordered={false}
                            title={
                                <Space>
                                    <ShoppingCartOutlined />
                                    <span>Recent Orders</span>
                                </Space>
                            }
                            style={{ borderRadius: 12 }}
                        >
                            <Table
                                columns={columns}
                                dataSource={recentOrders}
                                pagination={false}
                                size="middle"
                            />
                        </Card>
                    </Col>

                    {/* Quick Stats Sidebar */}
                    <Col xs={24} lg={8}>
                        <Space direction="vertical" size={16} style={{ width: "100%" }}>
                            {/* Order Status */}
                            <Card
                                bordered={false}
                                title="Order Status"
                                style={{ borderRadius: 12 }}
                            >
                                <Space direction="vertical" size={16} style={{ width: "100%" }}>
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                            <Text>Completed</Text>
                                            <Text strong>32 (67%)</Text>
                                        </div>
                                        <Progress percent={67} status="success" showInfo={false} />
                                    </div>
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                            <Text>Preparing</Text>
                                            <Text strong>12 (25%)</Text>
                                        </div>
                                        <Progress percent={25} status="active" showInfo={false} />
                                    </div>
                                    <div>
                                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                                            <Text>Pending</Text>
                                            <Text strong>4 (8%)</Text>
                                        </div>
                                        <Progress percent={8} showInfo={false} />
                                    </div>
                                </Space>
                            </Card>

                            {/* Top Items */}
                            <Card
                                bordered={false}
                                title="Popular Items Today"
                                style={{ borderRadius: 12 }}
                            >
                                <Space direction="vertical" size={12} style={{ width: "100%" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Space>
                                            <Avatar size={40} style={{ backgroundColor: "#1890ff" }}>1</Avatar>
                                            <div>
                                                <Text strong>Chicken Rice</Text>
                                                <div><Text type="secondary" style={{ fontSize: 12 }}>24 orders</Text></div>
                                            </div>
                                        </Space>
                                        <Tag color="blue">Hot</Tag>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Space>
                                            <Avatar size={40} style={{ backgroundColor: "#52c41a" }}>2</Avatar>
                                            <div>
                                                <Text strong>Pasta Combo</Text>
                                                <div><Text type="secondary" style={{ fontSize: 12 }}>18 orders</Text></div>
                                            </div>
                                        </Space>
                                        <Tag color="green">Popular</Tag>
                                    </div>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Space>
                                            <Avatar size={40} style={{ backgroundColor: "#fa8c16" }}>3</Avatar>
                                            <div>
                                                <Text strong>Fresh Juice</Text>
                                                <div><Text type="secondary" style={{ fontSize: 12 }}>15 orders</Text></div>
                                            </div>
                                        </Space>
                                    </div>
                                </Space>
                            </Card>
                        </Space>
                    </Col>
                </Row>
            </Space>
        </div>
    );
};