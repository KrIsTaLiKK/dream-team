import Container from "../../../../shared/components/Container/Container";
import UserHeader from "../UserHeader/UserHeader";
import UserDetails from "../UserDetails/UserDetails";
import s from "./UserProfile.module.scss";

const UserProfile = ({ user }) => {
  return (
    <section className={s.userProfile}>
      <UserHeader user={user} />
      <Container>
        <UserDetails email={user.email} />
      </Container>
    </section>
  );
};

export default UserProfile;
