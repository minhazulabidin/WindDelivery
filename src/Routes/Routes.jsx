import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import AllFoods from "../Pages/AllFoods";
import Blogs from "../Pages/Blogs";
import Login from "../Pages/Login";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
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
        }
      ]
    },
  ]);

export default Routes;