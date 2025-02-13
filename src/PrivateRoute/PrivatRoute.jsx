import { Navigate, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const PrivatRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // Show a loading indicator while checking authentication
  if (loading) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  // Redirect to login page if user is not authenticated
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivatRoute;
