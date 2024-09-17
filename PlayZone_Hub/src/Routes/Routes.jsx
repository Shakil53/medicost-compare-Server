import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/All Toys/AllToys";
import Reviews from "../Pages/CustomesRe/Reviews";
import ConnectUs from "../Pages/GiveMessage/ConnectUs";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Login/LogIn";

import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/ErrorPage/Error";
import MyToys from "../Pages/MyToys/MyToys";
import PhGallery from "../Pages/PhGallery/PhGallery";
import SignUp from "../Pages/Register/SignUp";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import UpdateToys from "../Pages/UpdateToys/UpdateToys";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>

      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/about',
        element: <About></About>
      },

      {
        path: '/addtoy',
        element: <PrivateRoutes> <AddToy></AddToy></PrivateRoutes>
      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>
      },
      {
        path: "/toydetails/:id",
        element: <PrivateRoutes><ToyDetails></ToyDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://toys-center-server.vercel.app/toyinfo/${params.id}`)
      },
      {
        path: "/mytoys",
        element: <PrivateRoutes><MyToys></MyToys></PrivateRoutes>
      },

      {
        path: "/review",
        element: <Reviews></Reviews>
      },
      {
        path: "/connectus",
        element: <ConnectUs></ConnectUs>
      },
      {
        path: "phGallery",
        element: <PhGallery></PhGallery>
      },
      {
        // path: "/updateToys/:id",
        // element: <UpdateToys></UpdateToys>,
        // loader: ({ params }) => fetch(`https://toys-center-server.vercel.app/${params.id}`)

        path: "/updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://toys-center-server.vercel.app/toyinfo/${params.id}`)

      }

    ]
  },
  {
    path: "*",
    element: <Error></Error>
  }

]);

export default router;