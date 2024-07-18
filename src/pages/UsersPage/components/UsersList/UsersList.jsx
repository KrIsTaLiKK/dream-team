import User from "../User/User";
import Container from "../../../../shared/components/Container/Container";
import s from "./UsersList.module.scss";

const UsersList = ({ users }) => {
  return (
    <Container>
      <ul className={s.usersList}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </Container>
  );
};

export default UsersList;
