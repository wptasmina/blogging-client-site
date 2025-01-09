import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './routes/router';
import { ToastContainer } from "react-toastify";

import {
  RouterProvider
} from "react-router-dom";

import AuthProvider from './Pages/AuthProvider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer position="top-center" autoClose={2000} />
  </StrictMode>,
)
