import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
    const { strMeal, strCategory, strArea, strInstructions, strMealThumb, strTags, strYoutube, strPrice } = useLoaderData()
    return (
        <div className="container mx-auto">
            <Helmet><title>{strMeal}</title></Helmet>
            <div className="hero">
                <div className="hero-content flex-col">
                    <img src={strMealThumb} className="max-w-md rounded-lg shadow-2xl" />
                    <div className="">
                        <div className="flex justify-between mt-10">
                            <div>
                                <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold">{strMeal}</h1>
                                <div className='space-x-3 my-5'>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{strCategory}</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{strArea}</span>
                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{strTags}</span>
                                </div>
                                <span className="text-3xl font-bold text-color2 dark:text-white">{strPrice}</span>
                            </div>
                            <iframe className="md:block hidden" width="300" height="150" src={strYoutube} title="YouTube video player"></iframe>
                        </div>
                        <p className="py-6">{strInstructions}</p>
                        <button className="btn bg-color2 text-[#fff] hover:bg-color2 hover:text-[#fff]">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;