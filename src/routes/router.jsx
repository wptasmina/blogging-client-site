import {
    createBrowserRouter
  } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import AllBlogsPage from "../Pages/AllBlogsPage";
import AddBlogPage from "../Pages/AddBlogPage";
import WishlistPage from './../Pages/WishlistPage';
import FeaturedBlogs from "../Pages/FeaturedBlogs";
import LoginPage from './../Pages/AuthProvider/LoginPage';
import Register from "../Pages/AuthProvider/Register";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import UpdateBlogePage from "../Pages/UpdateBlogePage";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: () => fetch('http://localhost:5000/homeblog')
        },
        {
          path: "/allblogs",
          element: <AllBlogsPage />,
          loader: () => fetch('http://localhost:5000/blog')
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
          path: "/featuredblogs",
          element: <FeaturedBlogs/>
        },
        {
          path: "/details",
          element: <BlogDetailsPage />
        },
        {
          path: "/updateBloge",
          element: <UpdateBlogePage />
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
  