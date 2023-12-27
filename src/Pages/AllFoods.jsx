import axios from "axios";
import { useEffect, useState } from "react";
import TopFoodCard from "../Components/TopFoodCard";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const AllFoods = () => {
  const [allFoods, setAllFoods] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const [searchedFoods, setSearchedFoods] = useState([]);
  const itemsPerPage = 9;

  useEffect(() => {
    fetch('https://winddelivery-server.vercel.app/productsCount')
      .then(res => res.json())
      .then(data => setCount(data.count))
  }, [])

  useEffect(() => {
    axios.get(`https://winddelivery-server.vercel.app/products?page=${currentPage}&size=${itemsPerPage}`)
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

  const handleSearchItem = async (e) => {
    e.preventDefault();
    const search = e.target.search.value.toLowerCase();
    try {
      const res = await axios.get(`https://winddelivery-server.vercel.app/search-product?name=${search}`);
      setSearchedFoods(res.data);
    } catch (error) {
      if(error){
        Swal.fire(`${search} is not available`);
      }
    }
  }

  return (
    <div className="container mx-auto font-poppins lg:px-0 px-3">
    <Helmet><title>All Foods</title></Helmet>
      <div className="md:w-1/2 mx-auto my-10 md:px-0 px-2">
        <form onSubmit={handleSearchItem}>
          <label className="mb-2 text-sm bg-color2 font-medium text-gray-900 sr-only">Search</label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" name="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Favorite Food" required />
            <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-color2 hover:bg-color2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Search</button>
          </div>
        </form>

      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">

        {
          (searchedFoods.length > 0 ? searchedFoods : allFoods).map((food) => (
            <TopFoodCard key={food._id} food={food} />
          ))
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