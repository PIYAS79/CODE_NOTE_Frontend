import { ReactNode } from "react"

// for parameter type
export type Parameter_Route_Type = {
    name: string,
    path?: string,
    element?: ReactNode,
    children?: Parameter_Route_Type[]
}

// for single one item
type Route_Types = {
    path: string,
    element: ReactNode
}


const generateRoutes = (items: Parameter_Route_Type[]) => {
    const routes = items.reduce((acc: Route_Types[], items) => {
        if (items.path && items.element) {
            acc.push({
                path: items.path,
                element: items.element
            })
        }
        if (items.children) {
            items.children.forEach(one => {
                acc.push({
                    path: one.path as string,
                    element: one.element
                })
            })
        }
        return acc;
    }, [])
    return routes
}


export default generateRoutes;