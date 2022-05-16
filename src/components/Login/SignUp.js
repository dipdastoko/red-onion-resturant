import React, { useState } from 'react';
import useFirebase from '../Hooks/useFirebase';
import './SignUp.css';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const getName = event => {
        setName(event.target.value);
    }
    const getEmail = event => {
        setEmail(event.target.value);
    }
    const getPassword = event => {
        setPassword(event.target.value);
    }

    const { signInUsingGoogle, signUpUsingEmailPassword } = useFirebase();

    const handleSubmit = () => {
        if (name && password && email) {
            signUpUsingEmailPassword(name, email, password);
        }
    }

    return (
        <div className='signup'>
            <h2>SignUp</h2>
            <div className="form-floating mb-3">
                <input onChange={getName} type="email" className="form-control" id="floatingInput"
                    placeholder='Name' />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={getEmail} type="email" className="form-control" id="floatingInput"
                    placeholder='Email' />
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating mb-3">
                <input onChange={getPassword} type="password" className="form-control" id="floatingPassword"
                    placeholder='Password' />
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <button onClick={handleSubmit} type="button" className="btn btn-primary rounded-pill px-4 py-2 mt-3">Submit</button>
            <hr />
            <button onClick={signInUsingGoogle}>Google Sign In</button>
        </div>
    );



};

export default SignUp;