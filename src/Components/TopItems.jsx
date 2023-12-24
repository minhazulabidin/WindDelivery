import axios from "axios";
import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";

const TopItems = () => {
    const [topFoods, setTopFoods] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/topitems')
            .then(res => setTopFoods(res.data))
    }, [])

    return (
        <div className="container mx-auto mt-10 space-y-5">
            <p className="text-[#F4C276] text-2xl font-bold text-center font-poppins">Picked Just for You</p>
            <h1 className="text-5xl font-bold text-color font-poppins text-center">Best Selling Food</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {
                    topFoods.map(food => <TopFoodCard
                        key={food._id}
                        food={food}
                    />)
                }
            </div>
        </div>
    );
};

export default TopItems;