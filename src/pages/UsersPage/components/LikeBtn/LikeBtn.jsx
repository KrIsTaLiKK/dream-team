import { useDispatch } from "react-redux";
import { useUsersSelectors } from "../../../../hooks";
import { toggleFavoriteUsers } from "../../../../redux/users/slice";
import Icon from "../../../../shared/components/Icon/Icon";
import clsx from "clsx";
import s from "./LikeBtn.module.scss";

const LikeBtn = ({ userId }) => {
  const dispatch = useDispatch();
  const { favoriteUsers } = useUsersSelectors();

  const isFavorite = favoriteUsers?.some((user) => user.id === userId);
  const iconClassName = clsx(
    s.likeBtn__icon,
    isFavorite && clsx(s.likeBtn__icon_selected, s.pulseHeart)
  );

  const handleToggleFavorite = () => {
    dispatch(toggleFavoriteUsers(userId));
  };

  return (
    <button type="button" className={s.likeBtn} onClick={handleToggleFavorite}>
      <Icon iconId="heart" width={18} height={16} className={iconClassName} />
    </button>
  );
};

export default LikeBtn;
