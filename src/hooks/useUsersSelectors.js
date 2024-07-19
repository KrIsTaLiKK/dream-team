import { useSelector } from "react-redux";

import {
  selectUsers,
  selectCurrentPage,
  selectTotalPages,
  selectLikedUsers,
} from "../redux/users/selectors";

export const useUsersSelectors = () => {
  const users = useSelector(selectUsers);
  const likedUsers = useSelector(selectLikedUsers);
  const currentPage = useSelector(selectCurrentPage);
  const totalPages = useSelector(selectTotalPages);

  return {
    users,
    likedUsers,
    currentPage,
    totalPages,
  };
};
