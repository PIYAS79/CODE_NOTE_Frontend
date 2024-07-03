import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/student/CreateStudent";
import CreateFaculty from "../pages/faculty/CreateFaculty";




export const adminRoutes = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'User Management',
        children: [
            {
                name: 'Create Faculty',
                path: 'create-faculty',
                element: <CreateFaculty />,
            },
            {
                name: 'Create Student',
                path: 'create-student',
                element: <CreateStudent />,
            }
        ],
    },
];


