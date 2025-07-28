import { Navigate, Outlet, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
    allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
    const location = useLocation();
    const token = localStorage.getItem('accessToken');
    const role = localStorage.getItem('role');

    // Əgər login olmayıbsa, login səhifəsinə yönləndir
    if (!token) {
        return <Navigate to={`/sign-in?redirect=${encodeURIComponent(location.pathname)}`} replace />;
    }

    // Əgər rolu icazə verilmiş siyahıda deyilsə, login səhifəsinə yönləndir
    if (allowedRoles.includes(role || '')) {
        localStorage.removeItem('accessToken'); // tokeni sil
        localStorage.removeItem('user'); // user datalarini sil
        return <Navigate to="/sign-in" replace />;
    }

    // Əgər hər şey qaydasındadırsa, nested route-lara icazə ver
    return <Outlet />;
};

export default ProtectedRoute;
