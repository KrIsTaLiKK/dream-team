import { useParams } from "react-router-dom";
import UserProfile from "./components/UserProfile/UserProfile";
import { useFetchUserByIdQuery } from "../../redux/users/usersApi";
import Loader from "../../shared/components/Loader/Loader";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import ErrorComponent from "../../shared/components/ErrorComponent/ErrorComponent";

const UserDetailsPage = () => {
  const { userId } = useParams();

  const { data, isError, isLoading } = useFetchUserByIdQuery(userId);
  const userData = data?.data;

  return (
    <>
      <HelmetComponent>Партнер</HelmetComponent>
      {isLoading && !isError && <Loader />}
      {isError && <ErrorComponent />}
      {userData && <UserProfile user={userData} />}
    </>
  );
};

export default UserDetailsPage;
