import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { auths } = useAuth();
    const { signInUsingEmailPassword } = auths;

    const location = useLocation();
    const navigate = useNavigate();
    const redirect_url = location.state?.from.pathname || '/';

    const handleLoginButton = () => {
        if (email && password) {
            signInUsingEmailPassword(email, password);
            navigate(redirect_url);
        }
    }

    return (
        <div className='login'>
            <Link to='/'>Home</Link>
            <h2>Login</h2>
            <br />
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={event => {
                    setEmail(event.target.value)
                }} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input onChange={event => {
                    setPassword(event.target.value)
                }} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <button onClick={handleLoginButton} type="button" className="btn btn-primary rounded-pill px-4 py-2 mt-3">Login</button>

        </div>
    );
};

export default Login;