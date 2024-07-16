import { Navigate } from "react-router-dom";
import { useAuthSelectors } from "./hooks/index";

const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuthSelectors();
  const shouldRedirect =
    !isLoggedIn && !isRefreshing ? <Navigate to={redirectTo} /> : Component;

  return shouldRedirect;
};

export default PrivateRoute;
