import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../layout/MainRoot";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import CheckOut from "../pages/checkOut/CheckOut";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoot></MainRoot>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/checkOut/:id',
          element: <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>,
          loader: ({params}) => fetch(`https://car-doctor-server-silk-seven.vercel.app/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <PrivateRoute>
            <Bookings></Bookings>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;