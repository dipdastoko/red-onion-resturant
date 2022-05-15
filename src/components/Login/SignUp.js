import React from 'react';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='signup'>
            <h2>SignUp</h2>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput"
                    placeholder='Name' />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput"
                    placeholder='Email' />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input type="password" className="form-control" id="floatingPassword"
                    placeholder='Password' />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button type="button" className="btn btn-primary rounded-pill px-4 py-2 mt-3">Submit</button>
        </div>
    );
};

export default SignUp;