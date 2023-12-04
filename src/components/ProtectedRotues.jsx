import { Navigate } from "react-router-dom";

function ProtectedRotues({ children, user }) {
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRotues;
