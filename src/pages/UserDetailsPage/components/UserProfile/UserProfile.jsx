import Container from "../../../../shared/components/Container/Container";
import UserHeader from "../UserHeader/UserHeader";
import UserDetails from "../UserDetails/UserDetails";
import { useAuthSelectors } from "../../../../hooks";
import s from "./UserProfile.module.scss";

const UserProfile = ({ user }) => {
  const { selectUserId } = useAuthSelectors();

  return (
    <section className={s.userProfile}>
      <UserHeader user={user} isCurrentUser={user.id === selectUserId} />
      <Container>
        <UserDetails email={user.email} />
      </Container>
    </section>
  );
};

export default UserProfile;
