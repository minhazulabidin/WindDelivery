import { PropTypes } from 'prop-types';


const Service = ({ service }) => {
    const { img, title, description } = service;
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 pt-5">
            <div className='w-full flex justify-center'><img className="rounded-t-lg" src={img} alt="" /></div>
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            </div>
        </div>

    );
};
Service.propTypes = {
    service: PropTypes.object
}

export default Service;