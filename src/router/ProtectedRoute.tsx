import { Navigate, Outlet, useLocation } from 'react-router-dom';

const ProtectedRoute = () => {
    const location = useLocation();
    const token = localStorage.getItem('accessToken');

    if (!token) {
        return <Navigate to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
