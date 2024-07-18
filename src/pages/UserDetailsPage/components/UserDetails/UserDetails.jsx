import { userDescription } from "./data";
import UserContacts from "../UserContacts/UserContacts";
import s from "./UserDetails.module.scss";

const UserDetails = ({ email }) => {
  return (
    <div className={s.userDetails}>
      <UserContacts email={email} />
      <div className={s.userDetails__description}>
        {userDescription.map((paragraph, index) => (
          <p key={index} className={s.userDetails__description_text}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserDetails;
