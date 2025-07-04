import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
    const location = useLocation(); // BUNU ƏLAVƏ ET
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
