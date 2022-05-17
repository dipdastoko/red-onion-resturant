import { render } from 'react-dom';
import { Navigate, Route, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { auths } = useAuth();
    const location = useLocation();
    console.log(location);
    return (
        auths?.user?.email ? children : <Navigate replace to='/login' state={{ from: location }}></Navigate>
    );

};

export default PrivateRoute;

// return auths?.user?.email ? children : <Navigate to='/login'></Navigate>