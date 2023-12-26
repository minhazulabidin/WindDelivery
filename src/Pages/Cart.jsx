import { useEffect, useState } from "react";
import { deleteFromLs, deleteShoppingCart, getItem } from "../utility/localStorage";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { RxCrossCircled } from "react-icons/rx";
import axios from "axios";
import useAuth from "../Hook/hook";
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const [products, setProducts] = useState([])
    const cartItems = getItem();
    const { user } = useAuth();
    const items = Object.keys(cartItems);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/products/cart?ids=${items}`)
            .then(res => res.json())
            .then(data => {
                const productsWithQuantity = data.map(product => ({
                    ...product,
                    quantity: cartItems[product._id] || 1,
                    email: user.email,
                    name: user.displayName
                }));
                setProducts(productsWithQuantity);
            });
    }, [items, cartItems, user]);

    const totalCartPrice = products.reduce((acc, product) => {
        const productTotalPrice = product.strPrice * product.quantity;
        return acc + productTotalPrice;
    }, 0).toFixed(2);


    const handleRemove = id => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteFromLs(id)
                const remaining = products.filter(pro => pro._id !== id);
                setProducts(remaining);
                Swal.fire({
                    title: "Remove!",
                    text: "This item remove cart",
                    icon: "success"
                });
            }

        })
    }
    const handleCheckout = async () => {
        const postData = await axios.post('http://localhost:5000/addCart', products)
        const data = await postData.data;
        if(data.acknowledged){
            deleteShoppingCart()
            navigate('/')
        }
    
}

return (
    <div className="container mx-auto grid md:grid-cols-6 gap-6 my-10">
        <Helmet><title>Cart</title></Helmet>
        <div className="md:col-span-4 col-span-6">
            <div className="">
                {
                    products.map(product =>
                        <div key={product._id} className="flex flex-col mt-4 w-4/5 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-full rounded-t-lg h-auto md:w-20 md:rounded-none md:rounded-s-lg" src={product.strMealThumb} alt="" />
                            <div className="flex justify-between items-center p-4 leading-normal w-full">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.strMeal}</h5>
                                <p className="text-lg text-color2 font-medium">${product.strPrice}</p>
                                <p>Quantity:{product.quantity}</p>
                                <button onClick={() => handleRemove(product._id)} className="btn text-xl btn-sm bg-bg-red-200"><RxCrossCircled /></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        <div className="md:col-span-2 col-span-6 w-full flex flex-col items-center">
            <div className="relative overflow-x-auto mt-8 w-full">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 rounded-s-lg">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3 rounded-e-lg">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id} className="bg-white dark:bg-gray-800">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {product.strMeal}
                                </th>
                                <td className="px-6 py-4">
                                    {product.strPrice * product.quantity}
                                </td>
                            </tr>)
                        }
                    </tbody>
                    <tfoot>
                        <tr className="font-semibold text-gray-900 dark:text-white">
                            <th scope="row" className="px-6 py-3 text-base">Total</th>
                            <td className="px-6 py-3">
                                {totalCartPrice}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <button onClick={handleCheckout} className="btn bg-[#00B207] text-[#fff] hover:text-[#fff] hover:bg-[#00B207] btn-wide">Proceed to checkout</button>

        </div>
    </div>
);
};

export default Cart;