import { useAuth } from "../context/authContext";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

export default ProtectedRoutes;
