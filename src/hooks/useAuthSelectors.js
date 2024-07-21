import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors";

export const useAuthSelectors = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const selectUserId = useSelector(selectUser);
  return { isLoggedIn, isRefreshing, selectUserId };
};
