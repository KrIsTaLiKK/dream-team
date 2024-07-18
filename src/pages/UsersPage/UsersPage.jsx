import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFetchUsersQuery } from "../../redux/users/usersApi";
import { addUsers } from "../../redux/users/slice";
import { useUsersSelectors } from "../../hooks/useUsersSelectors";
import UsersOverview from "./components/UsersOverview/UsersOverview";
import Loader from "../../shared/components/Loader/Loader";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import UsersList from "./components/UsersList/UsersList";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import s from "./UsersPage.module.scss";

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
    <>
      <HelmetComponent>Команда</HelmetComponent>
      <section className={s.usersPage}>
        <UsersOverview />
        {isLoading && <Loader />}
        {isError && (
          <b>Что-то пошло не так. Пожалуйста, перезагрузите страницу!</b>
        )}
        {users.length > 0 && <UsersList users={users} />}
        {currentPage < data?.totalPages && !isFetching && <LoadMoreBtn />}
      </section>
    </>
  );
};

export default UsersPage;
