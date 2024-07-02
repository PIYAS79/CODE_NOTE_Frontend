import { NavLink } from "react-router-dom";
import AdminDashboard from "../pages/admin/AdminDashboard";
import { ReactNode } from 'react'
import CreateStudent from "../pages/student/CreateStudent";
import CreateFaculty from "../pages/faculty/CreateFaculty";

type Admin_Route_Types = {
    path: string,
    element: ReactNode
}
type Admin_Route_Sidebar_Types = {
    key: string,
    label: ReactNode,
    children?: Admin_Route_Sidebar_Types[]
}


const Admin_Base_Routes = [
    {
        name: "Admin Dashboard",
        path: 'dashboard',
        element: <AdminDashboard />
    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Student",
                path: 'create-student',
                element: <CreateStudent />
            },
            {
                name: "Create Faculty",
                path: 'create-faculty',
                element: <CreateFaculty />
            },
        ]
    }
]



export const adminRouter = Admin_Base_Routes.reduce((acc: Admin_Route_Types[], items) => {
    if (items.path && items.element) {
        acc.push({
            path: items.path,
            element: items.element
        })
    }
    if (items.children) {
        items.children.forEach(one => {
            acc.push({
                path: one.path,
                element: one.element
            })
        })
    }
    return acc;
}, [])


export const adminRoute_sidebar = Admin_Base_Routes.reduce((acc: Admin_Route_Sidebar_Types[], items) => {
    if(items.name && items.path){
        acc.push({
            key:items.name,
            label:<NavLink to={`/admin/${items.path}`}>{items.name}</NavLink>
        })
    }
    if(items.children){
        acc.push({
            key:items.name,
            label:items.name,
            children:items.children.map(one=>({
                key:one.name,
                label:<NavLink to={`/admin/${one.path}`}>{one.name}</NavLink>
            }))
        })
    }
    return acc;
}, [])