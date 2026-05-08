import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const isLoggedIn =
    localStorage.getItem("isLoggedIn");

  // ❌ Not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  // ✅ Logged in
  return children;
}

export default ProtectedRoute;