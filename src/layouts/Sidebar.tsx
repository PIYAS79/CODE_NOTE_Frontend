import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import generateSidebarRoutes from "../utils/generateSidebarRoutes";
import { adminRoutes } from "../routes/router.admin";
const { Sider } = Layout;

const Sidebar = () => {
    const role = 'admin'
    let routeStatus;
    const UserRoles = {
        ADMIN: "admin",
        STUDENT: 'student',
        FACULTY: 'faculty',
        SUPER : 'super'
    }
    switch (role) {
        case UserRoles.ADMIN:
            routeStatus = generateSidebarRoutes(adminRoutes, UserRoles.ADMIN)
            break;
        case UserRoles.STUDENT:
            routeStatus = generateSidebarRoutes(adminRoutes, UserRoles.STUDENT)
            break;
        case UserRoles.FACULTY:
            routeStatus = generateSidebarRoutes(adminRoutes, UserRoles.FACULTY)
            break;

        default:
            break;
    }




    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
        >
            <div className="demo-logo-vertical" >
                <NavLink to={'/'}>
                    <h2 style={{ color: 'white', fontWeight: 'bold', padding: '1.11rem 0rem', textAlign: 'center', backgroundColor: 'gray' }}>CODE_NOTE</h2>
                </NavLink>
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}
                items={routeStatus} />
        </Sider>
    )
}

export default Sidebar