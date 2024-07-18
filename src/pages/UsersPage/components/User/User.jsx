import { Link } from "react-router-dom";
import LikeBtn from "../LikeBtn/LikeBtn";
import s from "./User.module.scss";

const User = ({ user: { avatar, first_name, last_name, id } }) => {
  return (
    <li className={s.user}>
      <Link className={s.user__link} to={`/users/${id}`}>
        <div className={s.user__imgWrap}>
          <img src={avatar} alt="User" />
        </div>
        <p className={s.user__name}>
          {first_name} {last_name}
        </p>
      </Link>
      <LikeBtn userId={id} />
    </li>
  );
};

export default User;
