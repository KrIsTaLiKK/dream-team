import User from "../User/User";
import Container from "../../../../shared/components/Container/Container";
import s from "./UsersList.module.css";

const UsersList = ({ users }) => {
  return (
    <Container>
      <ul className={s.list}>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </Container>
  );
};

export default UsersList;
