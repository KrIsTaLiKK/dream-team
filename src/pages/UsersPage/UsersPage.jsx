import { useFetchUsers } from "../../hooks/useFetchUsers";
import UsersOverview from "./components/UsersOverview/UsersOverview";
import Loader from "../../shared/components/Loader/Loader";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import UsersList from "./components/UsersList/UsersList";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorComponent from "../../shared/components/ErrorComponent/ErrorComponent";
import s from "./UsersPage.module.scss";

const UsersPage = () => {
  const { users, isLoading, isError, isFetching, currentPage, totalPages } =
    useFetchUsers();
  return (
    <>
      <HelmetComponent>Команда</HelmetComponent>
      <section className={s.usersPage}>
        <UsersOverview />
        {isLoading && <Loader />}
        {isError && <ErrorComponent />}
        {users.length > 0 && <UsersList users={users} />}
        {currentPage < totalPages && !isFetching && <LoadMoreBtn />}
      </section>
    </>
  );
};

export default UsersPage;
