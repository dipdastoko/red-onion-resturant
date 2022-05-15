import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Food.css';

const Food = props => {
    const { img, price, name, id } = props.food;
    const history = useNavigate();
    const handleButtonClick = () => {
        history(`/details/${id}`);
    }
    return (
        <div className="card m-4 food" onClick={handleButtonClick} style={{ width: "18rem" }}>
            <h3>{name}</h3>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <p><b>Price:</b> ${price}</p>
        </div>


    );
};

export default Food;