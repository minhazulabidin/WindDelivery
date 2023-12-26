import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import SingleProduct from "../Pages/SingleProduct";
import Registration from './../Pages/Registration';
import Cart from "../Pages/Cart";
import PrivetRoute from "./PrivetRoute";
import MyOrder from "../Pages/MyOrder";
import AddFood from "../Pages/AddFood";
import MyAddFood from "../Pages/MyAddFood";
import UpdateFood from "../Pages/UpdateFood";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      errorElement:<ErrorPage/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/foods',
            element:<AllFoods/>
        },
        {
            path:'/blogs',
            element:<Blogs/>
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/registration',
            element:<Registration/>
        },
        {
            path:'/cart',
            element:<PrivetRoute><Cart/></PrivetRoute>
        },
        {
            path:'/myOrder',
            element:<PrivetRoute><MyOrder/></PrivetRoute>
        },
        {
            path:'/addFood',
            element:<PrivetRoute><AddFood/></PrivetRoute>
        },
        {
            path:'/MyAddFood',
            element:<PrivetRoute><MyAddFood/></PrivetRoute>
        },
        {
          path:'/foods/:id',
          element:<SingleProduct/>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        },
        {
          path:'/updateFood/:id',
          element:<UpdateFood/>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        }
      ]
    },
  ]);

export default Routes;