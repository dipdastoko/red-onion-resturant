import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const FoodDetails = () => {
    const { foodId } = useParams();
    const { foods } = useAuth();
    const food = foods.filter(food => food.id === parseInt(foodId));
    const { name, price, details, img } = food[0];
    const navigate = useNavigate();
    const changeLocation = () => {
        navigate('/cart');
    }

    return (
        <div className='d-flex align-items-center justify-content-center'>
            <div>
                <h1>{name}</h1>
                <p className='text-muted'>{details}</p>
                <h1>Price: ${price}</h1>
                <button onClick={() => { changeLocation() }} type="button" className="btn btn-danger rounded-pill px-4 py-2"><FontAwesomeIcon icon={faCartPlus} /> Add</button>
            </div>

            <div>
                <img className='w-100' src={img} alt="" />
            </div>

        </div>
    );
};

export default FoodDetails;