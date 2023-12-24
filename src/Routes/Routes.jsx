import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";
import ErrorPage from "../Pages/ErrorPage";
import SingleProduct from "../Pages/SingleProduct";

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
          path:'foods/:id',
          element:<SingleProduct/>,
          loader:({params})=>fetch(`http://localhost:5000/product/${params.id}`)
        }
      ]
    },
  ]);

export default Routes;