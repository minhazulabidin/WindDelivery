import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../Hook/hook";
import { Helmet } from "react-helmet";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";

const MyOrder = () => {
  const { user } = useAuth()
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get(`https://winddelivery-server-610hdeq2f-minhazs-projects.vercel.app/orders?email=${user?.email}`, { withCredentials: true })
      .then(res => setOrders(res.data))
  }, [user?.email])


  const totalCartPrice = orders.reduce((acc, order) => {
    const productTotalPrice = order.strPrice * order.quantity;
    return acc + productTotalPrice;
  }, 0).toFixed(2);

  const handleCartDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://winddelivery-server-610hdeq2f-minhazs-projects.vercel.app/orders/${id}`)
          .then(res => res.data)

        const remaining = orders.filter(order => order._id !== id)
        setOrders(remaining)
        Swal.fire({
          title: "Remove!",
          text: "This item remove cart",
          icon: "success"
        });
      }

    })

  }

  return (
    <div className="container mx-auto font-poppins">
      <Helmet><title>My Order</title></Helmet>
      <h1 className="text-center text-5xl font-poppins font-bold text-color">My Order</h1>
      <div className="mt-10">


        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Product Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>

              {
                orders.map(order =>
                  <tr key={order._id} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      <img className="w-10 h-10 rounded-full" src={order.strMealThumb} alt="Jese image" />
                    </th>
                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {order.strMeal}
                    </td>
                    <td className="px-6 py-4">
                      {order.quantity}
                    </td>
                    <td className="px-6 py-4">
                      {order.strCategory}
                    </td>
                    <td className="px-6 py-4">
                      ${order.strPrice}
                    </td>
                    <td className="px-6 py-4">
                      <button onClick={() => handleCartDelete(order._id)} className="btn btn-sm btn-error text-[#fff] text-xl"><RxCrossCircled /></button>
                    </td>
                  </tr>)
              }
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="flex items-center px-6 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white">
                  Total Price
                </th>
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                </td>
                <td className="px-6 py-4">

                </td>
                <td className="px-6 py-4">

                </td>
                <td className="px-6 py-4 font-bold text-gray-900">
                  ${totalCartPrice}
                </td>
                <td className="px-6 py-4">

                </td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default MyOrder;