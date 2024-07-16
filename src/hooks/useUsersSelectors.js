import { useSelector } from "react-redux";

import {
  selectUsers,
  selectCurrentPage,
  selectTotalPages,
  selectFavoriteUsers,
} from "../redux/users/selectors";

export const useUsersSelectors = () => {
  const users = useSelector(selectUsers);
  const favoriteUsers = useSelector(selectFavoriteUsers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  return {
    users,
    favoriteUsers,
    currentPage,
    totalPages,
  };
};
