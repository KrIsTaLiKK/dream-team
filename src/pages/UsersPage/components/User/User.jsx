import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useUsersSelectors } from "../../../../hooks";
import { toggleFavoriteUsers } from "../../../../redux/users/slice";
import Icon from "../../../../shared/components/Icon/Icon";
import s from "./User.module.css";

const User = ({ user: { avatar, first_name, last_name, id } }) => {
  const dispatch = useDispatch();
  const { favoriteUsers } = useUsersSelectors();

  const isFavorite = favoriteUsers?.some((user) => user.id === id);

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteUsers(id));
  };

  return (
    <li className={s.card}>
      <Link className={s.cardLink} to={`/users/${id}`}>
        <div className={s.imgWrap}>
          <img src={avatar} alt="User" />
        </div>
        <p className={s.name}>
          {first_name} {last_name}
        </p>
      </Link>
      <button
        type="button"
        className={s.likeBtn}
        onClick={handleToggleFavorite}
      >
        <Icon
          iconId="heart"
          width={14}
          height={12}
          className={`${s.likeIcon} ${isFavorite ? s.favourite : ""}`}
        />
      </button>
    </li>
  );
};

export default User;
