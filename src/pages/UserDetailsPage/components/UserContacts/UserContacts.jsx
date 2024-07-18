import { Link } from "react-router-dom";
import Icon from "../../../../shared/components/Icon/Icon";
import s from "./UserContacts.module.scss";

const UserContacts = ({ email }) => {
  const mailHref = `mailto:${email}`;

  return (
    <ul className={s.userContacts}>
      <li className={s.userContacts__item}>
        <Icon iconId="phone" width={24} height={24} />
        <Link to="tel:+79543334455" className={s.userContacts__item_link}>
          +7 (954) 333-44-55
        </Link>
      </li>
      <li className={s.userContacts__item}>
        <Icon iconId="email" width={24} height={24} />
        <Link to={mailHref} className={s.userContacts__item_link}>
          {email}
        </Link>
      </li>
    </ul>
  );
};

export default UserContacts;
