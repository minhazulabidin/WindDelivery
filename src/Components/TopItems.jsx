import axios from "axios";
import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";
import { Link } from "react-router-dom";

const TopItems = () => {
    const [topFoods, setTopFoods] = useState([]);
    useEffect(() => {
        axios.get('https://winddelivery-server-kpavvra3a-minhazs-projects.vercel.app/top-items')
            .then(res => setTopFoods(res.data))
    }, [])

    return (
        <div className="container mx-auto mt-10 space-y-5 md:px-0 px-6">
            <p className="text-color2 text-2xl font-bold text-center font-poppins">Picked Just for You</p>
            <h1 className="text-5xl font-bold text-color font-poppins text-center">Best Selling Food</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    topFoods.map(food => <TopFoodCard
                        key={food._id}
                        food={food}
                    />)
                }
            </div>
            <div className="w-full flex justify-center my-5">
                <Link to='/foods'><button className="btn bg-color2 text-[#fff] hover:bg-color2 hover:text-[#fff]">See All</button></Link>
            </div>
        </div>
    );
};

export default TopItems;