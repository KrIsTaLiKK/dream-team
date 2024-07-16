import UsersList from "./components/UsersList/UsersList";
import UsersOverview from "./components/UsersOverview/UsersOverview";
import Loader from "../../shared/components/Loader/Loader";
import s from "./UsersPage.module.css";
import { useFetchUsersQuery } from "../../redux/users/usersApi";
import { useEffect } from "react";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { useDispatch } from "react-redux";
import { addUsers } from "../../redux/users/slice";
import { useUsersSelectors } from "../../hooks/useUsersSelectors";

const UsersPage = () => {
  const { users, currentPage } = useUsersSelectors();
  const dispatch = useDispatch();

  const { data, isLoading, isError, isFetching } =
    useFetchUsersQuery(currentPage);

  useEffect(() => {
    if (data) {
      dispatch(addUsers({ users: data.users, totalPages: data.totalPages }));
    }
  }, [data, dispatch]);

  return (
    <section className={s.wrap}>
      <UsersOverview />
      {isLoading && <Loader />}
      {isError && (
        <b>Упс, что-то пошло не так. Пожалуйста, перезагрузите страницу!</b>
      )}
      {users.length > 0 && <UsersList users={users} />}
      {currentPage < data?.totalPages && !isFetching && <LoadMoreBtn />}
    </section>
  );
};

export default UsersPage;
