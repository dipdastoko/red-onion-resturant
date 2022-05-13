import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';

const Foods = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <div className='food'>
            {
                foods.map(food => <Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default Foods;