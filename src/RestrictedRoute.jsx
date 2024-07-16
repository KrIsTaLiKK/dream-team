import { Navigate } from "react-router-dom";
import { useAuthSelectors } from "./hooks/index";

const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn } = useAuthSelectors();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
