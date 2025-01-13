import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Pages/AuthProvider/AuthProvider';

export default function PrivatRoute({children}) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>

  
}
  