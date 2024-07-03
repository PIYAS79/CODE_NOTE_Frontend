import { ReactNode } from "react"
import { Parameter_Route_Type } from "./generateRoutes"
import { NavLink } from "react-router-dom"

type Route_Sidebar_Types = {
    key: string,
    label: ReactNode,
    children?: Route_Sidebar_Types[]
}


const generateSidebarRoutes=(items:Parameter_Route_Type[])=>{
    const sidebarRoutes = items.reduce((acc:Route_Sidebar_Types[],item)=>{
        if(item.name && item.path){
            acc.push({
                key:item.name,
                label:<NavLink to={`/admin/${item.path}`}> { item.name } </NavLink>
            })
        }
        if(item.children){
            acc.push({
                key:item.name,
                label:item.name,
                children:item.children.map(one=>({
                    key:one.name,
                    label:<NavLink to={`/admin/${one.path}`}> { one.name }</NavLink>
                }))
            })
        }
        return acc;
    },[])
    return sidebarRoutes;
}

export default generateSidebarRoutes;