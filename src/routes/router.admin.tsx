import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/student/CreateStudent";
import CreateFaculty from "../pages/faculty/CreateFaculty";
import CreateAcSemester from "../pages/admin/CreateAcSemester";
import GetAllAcSemester from "../pages/admin/GetAllAcSemester";




export const adminRoutes = [
    {
        name: 'Dashboard',
        path: 'dashboard',
        element: <AdminDashboard />,
    },
    {
        name: 'Academic Management',
        children: [
            {
                name: 'Create Academic Semester',
                path: 'create-academic-semester',
                element: <CreateAcSemester />,
            },
            {
                name: 'Get All AcSemester',
                path: 'get-academic-semester',
                element: <GetAllAcSemester />,
            },
        ],
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


