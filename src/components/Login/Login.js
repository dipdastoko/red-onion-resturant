import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='login'>
            <h2>Login</h2>
            <br />
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="button" className="btn btn-primary rounded-pill px-4 py-2 mt-3">Login</button>

        </div>
    );
};

export default Login;