import { useDispatch } from "react-redux";
import { useUsersSelectors } from "./useUsersSelectors";
import { useFetchUsersQuery } from "../redux/users/usersApi";
import { useEffect } from "react";
import { addUsers } from "../redux/users/slice";

export const useFetchUsers = () => {
  const { users, currentPage } = useUsersSelectors();
  const dispatch = useDispatch();

  const { data, isLoading, isError, isFetching } =
    useFetchUsersQuery(currentPage);

  useEffect(() => {
    if (data) {
      dispatch(addUsers({ users: data.users, totalPages: data.totalPages }));
    }
  }, [data, dispatch]);

  return {
    users,
    isLoading,
    isError,
    isFetching,
    currentPage,
    totalPages: data?.totalPages,
  };
};
