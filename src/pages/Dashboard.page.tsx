import { useContext, useState, type JSX } from "react";
import { AuthContext } from "../context/authContext/auth.context";
import { Outlet } from "react-router";
import MenuComponent from "../components/Menu.component";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Layout, theme } from 'antd';
import ProfileImage from "../components/ProfileImage.component";

const { Header, Sider, Content } = Layout;

const DashboardPage = (): JSX.Element => {

    const user = useContext(AuthContext)?.user;

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const sideBarStyle = { background: 'white'};


    return (

        <Layout style={{ minHeight: '100vh' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={sideBarStyle}>
                <ProfileImage />
                <MenuComponent />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default DashboardPage;