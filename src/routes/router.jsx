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
// import Comments from "../component/Comments";
import WishList from "../component/WishList";
import Featured from "../Pages/Featured";
import About from './../Pages/About';


export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <HomePage />,
          loader: () => fetch('https://blogging-server-alpha.vercel.app/homeblog')
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/allblogs",
          element: <AllBlogsPage />,
          loader: () => fetch('https://blogging-server-alpha.vercel.app/blog')
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
        loader: () => fetch('https://blogging-server-alpha.vercel.app/wishlist')
        },
        {
          path: "/featuredblogs",
          element: <Featured/>
        },
        {
          path: "/details/:id",
          element: <BlogDetailsPage />,
          loader: ({ params}) => fetch(`https://blogging-server-alpha.vercel.app/details/${params.id}`)
        },
        {
          path: "/updateBlog/:id",
          element: <UpdateBlogePage />,
          loader: ({ params}) => fetch(`https://blogging-server-alpha.vercel.app/blog/${params.id}`)
        },
        // {
        //   path: "/comments",
        //   element: <Comments />,
        //   loader: () => fetch(`https://blogging-server-alpha.vercel.app/comments`)
        // },
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
  