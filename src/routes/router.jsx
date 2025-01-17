import {
    createBrowserRouter
  } from "react-router-dom";

import App from "../App";
import HomePage from "../Pages/HomePage";
import ErrorPage from "../Pages/ErrorPage";
import AllBlogsPage from "../Pages/AllBlogsPage";
import AddBlogPage from "../Pages/AddBlogPage";
import LoginPage from './../Pages/AuthProvider/LoginPage';
import Register from "../Pages/AuthProvider/Register";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import UpdateBlogePage from "../Pages/UpdateBlogePage";
import PrivatRoute from "../PrivateRoute/PrivatRoute";
import Comments from "../component/Comments";
import WishList from "../component/WishList";
import Featured from "../Pages/Featured";


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
        element:(
          <PrivatRoute >
            <AddBlogPage />
          </PrivatRoute>
        ),
       },
        {
          path: "/wishlist",
          element:<PrivatRoute>
              <WishList />
            </PrivatRoute>,
        loader: () => fetch('http://localhost:5000/wishlist')
        },
        {
          path: "/featuredblogs",
          element: <Featured/>
        },
        {
          path: "/details/:id",
          element: <BlogDetailsPage />,
          loader: ({ params}) => fetch(`http://localhost:5000/details/${params.id}`)
        },
        {
          path: "/updateBlog/:id",
          element: <UpdateBlogePage />,
          loader: ({ params}) => fetch(`http://localhost:5000/blog/${params.id}`)
        },
        {
          path: "/comments",
          element: <Comments />,
          loader: () => fetch(`http://localhost:5000/comments`)
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
  