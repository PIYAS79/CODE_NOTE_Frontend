import MainLayouts from "../layouts/MainLayouts"
import ProtectedRoute from "../layouts/ProtectedRoute"


const RootPage = () => {
    return (
        <ProtectedRoute>
            <MainLayouts />
        </ProtectedRoute>
    )
}

export default RootPage