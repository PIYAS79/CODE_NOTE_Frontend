import { Layout } from "antd";
const { Header, Content, Footer } = Layout;
import { Outlet } from 'react-router-dom'

import Sidebar from "./Sidebar";

const MainLayouts = () => {
    return (
        <Layout style={{ height: "100vh" }}>
            <Sidebar />
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