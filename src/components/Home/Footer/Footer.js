import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png';

const Footer = () => {
    return (
        <div className='container bg-dark text-white mw-100'>
            <div className='row'>
                <div className='col text-start ms-5'>
                    <img className='w-25 mt-5' src={logo} alt="" />
                </div>
                <div className='col'>
                    <div className='d-flex my-5 me-5'>
                        <div className='ms-5'>
                            <Link className='text-white text-decoration-none' to='/'>About Online Food</Link>
                            <br />
                            <Link className='text-white text-decoration-none' to='/'>Read Our Blog</Link>
                            <br />
                            <Link className='text-white text-decoration-none' to='/'>Sign Up to Deliver</Link>
                            <br />
                            <Link className='text-white text-decoration-none' to='/'>Add Your Restaurant</Link>
                            <br />
                        </div>
                        <div className='ms-5'>
                            <Link className='text-white text-decoration-none' to='/'>Get Help</Link>
                            <br />
                            <Link className='text-white text-decoration-none' to='/'>Read FAQs</Link>
                            <br />
                            <Link className='text-white text-decoration-none' to='/'>View All Cities</Link>
                            <br />
                            <Link className='text-white text-decoration-none' to='/'>Restaurants</Link>
                            <br />
                        </div>
                    </div>
                </div>

            </div >
        </div >
    );
};

export default Footer;