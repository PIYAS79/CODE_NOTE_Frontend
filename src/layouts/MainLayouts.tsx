import { Layout, Menu } from "antd";
const { Sider, Header, Content, Footer } = Layout;
import { NavLink, Outlet } from 'react-router-dom'
import { adminRoute_sidebar } from "../routes/router.admin";

const MainLayouts = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="demo-logo-vertical" >
                    <NavLink to={'/'}>
                        <h2 style={{ color: 'white', fontWeight: 'bold', padding: '1.11rem 0rem', textAlign: 'center', backgroundColor: 'gray' }}>CODE_NOTE</h2>
                    </NavLink>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminRoute_sidebar} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0 }}>
                    <h2 style={{ color: 'white', textAlign: 'center' }}>Daffodil International Univeristy</h2>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    )
}

export default MainLayouts