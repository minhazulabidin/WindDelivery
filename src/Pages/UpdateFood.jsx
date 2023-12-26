
import axios from "axios";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import useAuth from "../Hook/hook";
import { useLoaderData } from "react-router-dom";


const UpdateFood = () => {
    const { user } = useAuth();
    const { strMeal, strPrice, strMealThumb, strInstructions, strCategory, strArea, idMeal, _id } = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const strMeal = form.name.value;
        const strPrice = parseFloat(form.price.value);
        const strMealThumb = form.url.value;
        const strInstructions = form.description.value;
        const strCategory = form.brand.value;
        const strArea = form.area.value;
        const idMeal = parseInt(form.stock.value);
        const email = form.email.value
        const food = { strMeal, strPrice, strMealThumb, strInstructions, strCategory, strArea, idMeal, email };

        if (isNaN(strPrice) || isNaN(idMeal)) {
            Swal.fire({
                icon: "error",
                title: "Input a valid value"
            });
            return;
        }

        axios.put(`http://localhost:5000/product/${_id}`, food)
            .then(res => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        icon: "success",
                        title: "Congratulation",
                        text: "Product Update successfully"
                    });
                }
            })
        axios.put(`http://localhost:5000/product2/${_id}`, food)
            .then(res => {
            })
    }

    return (
        <div className="container mx-auto">
            <Helmet><title>Add Food</title></Helmet>

            <form className="my-10 mx-auto" onSubmit={handleUpdate}>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="url" name="email" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required defaultValue={user.email} readOnly />
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="name" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required defaultValue={strMeal} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Title</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="url" name="url" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required defaultValue={strMealThumb} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Image Url</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="relative z-0 w-full mb-5 group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Category</label>
                        <select name='brand' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={strCategory}>

                            <option>Pork</option>
                            <option>Beef</option>
                            <option>Soup</option>
                            <option>Desert</option>
                            <option>Side</option>
                            <option>Vegetarian</option>
                            <option>Lamb</option>

                        </select>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Your Country</label>
                        <select name='area' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={strArea}>

                            <option>American</option>
                            <option>Indian</option>
                            <option>Chinese</option>
                            <option>French</option>
                            <option>Egyptian</option>
                            <option>British</option>
                            <option>Canadian</option>
                            <option>Italian</option>
                            <option>Polish</option>
                        </select>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="price" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required defaultValue={strPrice} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="stock" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required defaultValue={idMeal} />
                        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Stock Count</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea type="text" name='description' id="message" rows="4" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " defaultValue={strInstructions}></textarea>
                    <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Food Description</label>
                </div>
                <button type="submit" className="text-[#fff] hover:bg-color2 bg-color2 btn ">Update</button>
            </form>

        </div>
    );
};

export default UpdateFood;