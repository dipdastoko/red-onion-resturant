import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { auths } = useAuth();
    const location = useLocation();

    const { user } = auths;

    if (auths.isLoading) {

        return <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    }
    return (
        user?.email ? children : <Navigate replace to='/login' state={{ from: location }}></Navigate>
    );

};

export default PrivateRoute;

// return auths?.user?.email ? children : <Navigate to='/login'></Navigate>