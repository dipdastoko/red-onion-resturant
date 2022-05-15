import useFoods from '../../../Hooks/useFoods';
import Food from '../Food/Food';
import './Foods.css';

const Foods = () => {
    const foods = useFoods();
    return (
        <div className='foods'>
            {
                foods.map(food => <Food food={food} key={food.id}></Food>)
            }
        </div>
    );
};

export default Foods;