import { createBrowserRouter } from "react-router";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Home from "../pages/root/Home";
// import Password from "antd/es/input/Password";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import Blog from "../pages/blog/Blog";
import Cart from "../pages/cart/Cart";
import ForgotPassword from "../pages/forgotpassword/ForgotPassword";
import PasswordToken from "../pages/forgotpassword/PasswordToken";
import ResetPassword from "../pages/forgotpassword/ResetPassword";
import Listings from "../pages/listCar/Listings";
import AdminDashboard from "../pages/admin/admin";
const router = createBrowserRouter([{
    element: <AuthLayout />, children: [{
        element: <Login />, path: '/login'
    }, {
        element: <SignUp />, path: '/signup'
    }, {
        element: <ForgotPassword />, path: '/forgotpassword'
    }, {
        element: <PasswordToken />, path: '/passwordtoken'
    }, {
        element: <ResetPassword />, path: '/resetpassword'
    }, {
        element: <Cart />, path: '/cart'
    },
    ]
}, {
    element: <MainLayout />, children: [{
        element: <Home />, path: '/',
    },

    {
        element: <Listings />, path: '/listings'
    },
    {
        element: <Blog />, path: '/blog'
    },

    ]
}, {
    path: "/admin",
    element: <AdminDashboard />,
},]);

export default router;
