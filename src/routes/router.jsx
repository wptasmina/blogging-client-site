import {
    createBrowserRouter
  } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import AllBlogsPage from "../Pages/AllBlogsPage";
import AddBlogPage from "../Pages/AddBlogPage";
import WishlistPage from './../Pages/WishlistPage';
import LoginPage from './../Pages/AuthProvider/LoginPage';
import Register from "../Pages/AuthProvider/Register";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/allblogs",
          element: <AllBlogsPage />
        },
        {
          path: "/addblog",
          element: <AddBlogPage />
        },
        {
          path: "/wishlist",
          element: <WishlistPage />
        },
        {
          path: "/login",
          element: <LoginPage/>
        },
        {
          path: "/register",
          element: <Register/>
        }
      ],
    },
  ]);
  