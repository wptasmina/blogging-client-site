import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { router } from './routes/router';
import toast, { Toaster } from 'react-hot-toast';


import {
  RouterProvider
} from "react-router-dom";

import AuthProvider from './Pages/AuthProvider/AuthProvider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  <Toaster></Toaster>
  </StrictMode>,
)
