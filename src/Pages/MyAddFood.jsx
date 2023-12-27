import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import useAuth from "../Hook/hook";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyAddFood = () => {
  const [myFoods, setMyFoods] = useState([]);
  const { user } = useAuth();


  useEffect(() => {
    axios.get(`https://winddelivery-server-kpavvra3a-minhazs-projects.vercel.app/orders?email=${user?.email}`, { withCredentials: true })
      .then(res => setMyFoods(res.data))
  }, [user?.email])

  const handleFoodDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://winddelivery-server-kpavvra3a-minhazs-projects.vercel.app/orders/${id}`)
          .then(res => res.data)
        axios.delete(`https://winddelivery-server-kpavvra3a-minhazs-projects.vercel.app/product/${id}`)
          .then(res => res.data)
        const remaining = myFoods.filter(food => food._id !== id)
        setMyFoods(remaining)
        Swal.fire({
          title: "Remove!",
          text: "This item remove cart",
          icon: "success"
        });
      }

    })
  }

  return (
    <div className="container mx-auto">
      <Helmet><title>My Add Food</title></Helmet>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 ">
        {
          myFoods.map(food =>

            <div key={food._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <img className="rounded-t-lg" src={food.strMealThumb} alt="" />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food.strMeal}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{food.strInstructions.slice(0, 90)} <Link to={`/foods/${food._id}`} className="text-blue-700 hover:underline">See More</Link></p>
                <p className="text-color2 font-bold text-lg "> $ {food.strPrice}</p>
                <div className='space-x-3 my-5'>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{food.strCategory}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{food.strArea}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ">{food.strTags}</span>
                </div>
                <div className="flex justify-around">
                  <Link to={`/updateFood/${food._id}`}>
                    <button href="#" className="btn btn-sm bg-color2 hover:bg-color2 text-[#fff] hover:text-[#fff]">
                      Update
                    </button>
                  </Link>
                  <button onClick={() => handleFoodDelete(food._id)} href="#" className="btn btn-sm btn-error">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MyAddFood;