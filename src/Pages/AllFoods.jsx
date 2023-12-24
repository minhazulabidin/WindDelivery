import axios from "axios";
import { useEffect, useState } from "react";
import TopFoodCard from "../Components/TopFoodCard";

const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0)
  const itemsPerPage = 9;

  useEffect(() => {
    fetch('http://localhost:5000/productsCount')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  useEffect(() => {
    axios.get(`http://localhost:5000/products?page=${currentPage}&size=${itemsPerPage}`)
      .then(res => setAllFoods(res.data))
  }, [currentPage, itemsPerPage]);



  // pagination 
  const numOfPage = Math.ceil(count / itemsPerPage)

  const pages = [...Array(numOfPage).keys()]

  const handleNexPrev = (prev) => {
    if (prev === 'prev') {
      if (currentPage > 0) {
        setCurrentPage(currentPage - 1)
      }
    } else {
      if (currentPage < pages.length - 1) {
        setCurrentPage(currentPage + 1)
      }
    }
  }

  return (
    <div className="container mx-auto font-poppins">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {
          allFoods.map(food => <TopFoodCard
            key={food._id}
            food={food}
          />)
        }
      </div>
      <div className='text-center my-8'>
        <button onClick={() => handleNexPrev('prev')} className='btn btn-sm mr-4 hover:bg-color2 hover:text-[#fff]'>Prev</button>
        {
          pages.map(page => <button
            key={page}
            className={`mr-3 btn btn-sm hover:bg-color2 hover:text-[#fff] ${currentPage === page ? 'bg-color2 hover:bg-yellow-600 text-[#fff]' : ''}`}
            onClick={() => setCurrentPage(page)}
          >{page + 1}</button>)
        }
        <button onClick={() => handleNexPrev('next')} className='btn btn-sm mr-4 hover:bg-color2 hover:text-[#fff]'>Next</button>
      </div>
    </div>
  );
};

export default AllFoods;