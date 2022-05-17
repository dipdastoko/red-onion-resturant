import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { auths } = useAuth();
    return auths?.user?.email ? children : <Navigate to='/login'></Navigate>

};

export default PrivateRoute;