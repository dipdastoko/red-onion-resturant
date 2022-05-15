import React from 'react';
import './Header.css';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleSignUp = () => {
        navigate('/signup');
    }
    return (
        <>
            <div className='ms-5 mt-3'>
                <img className='logo' src={logo} alt="" />
            </div>
            <div className='d-flex float-end me-5'>
                <h3><FontAwesomeIcon icon={faCartArrowDown} /></h3>
                <Link className='mx-4' to='/login'>Login</Link>
                <button onClick={handleSignUp} type="button" className="btn btn-success rounded-pill">Sign Up</button>
            </div>
            <br />
            <br />
            <div className='header'>
                <h1 className='p-5'>Best Food Waiting For Your Belly</h1>
                <div className='searchbar'>
                    <div className="input-group ">
                        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;