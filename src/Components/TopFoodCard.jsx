import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';


const TopFoodCard = ({ food }) => {
    const { strMeal, strMealThumb, strArea, strPrice, _id, strCategory } = food;
    return (
        <div className="w-full py-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='w-full flex justify-center'>
                <img className="w-4/5 mask mask-circle" src={strMealThumb} alt="product image" />
            </div>
            <div className="px-5 pb-5 space-y-3 mt-3">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{strMeal}</h5>
                <div className='space-x-3'>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{strCategory}</span>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{strArea}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-color2 dark:text-white">{strPrice}</span>
                    <Link to={`/foods/${_id}`} className="btn btn-outline hover:text-[#fff] btn-warning ">View Details</Link>
                </div>
            </div>
        </div>

    );
};

TopFoodCard.propTypes = {
    food: PropTypes.object,
}

export default TopFoodCard;