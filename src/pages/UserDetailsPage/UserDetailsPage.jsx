import { useParams } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import { useFetchUserByIdQuery } from "../../redux/users/usersApi";
import Loader from "../../shared/components/Loader/Loader";

const UserDetailsPage = () => {
  const { userId } = useParams();

  const { data, isError, isLoading } = useFetchUserByIdQuery(userId);

  return (
    <>
      {isLoading && !isError && <Loader />}
      {isError && (
        <b>Упс, что-то пошло не так. Пожалуйста, перезагрузите страницу!</b>
      )}
      {data?.data && <UserProfile user={data.data} />}
    </>
  );
};

export default UserDetailsPage;
