import { useDispatch } from "react-redux";
import { useUsersSelectors } from "../../../../hooks";
import { toggleLikedUsers } from "../../../../redux/users/slice";
import Icon from "../../../../shared/components/Icon/Icon";
import clsx from "clsx";
import s from "./LikeBtn.module.scss";

const LikeBtn = ({ userId }) => {
  const dispatch = useDispatch();
  const { likedUsers } = useUsersSelectors();

  const isLiked = likedUsers?.some((user) => user.id === userId);
  const iconClassName = clsx(
    s.likeBtn__icon,
    isLiked && clsx(s.likeBtn__icon_selected, s.pulseHeart)
  );

  const handleToggleLike = () => {
    dispatch(toggleLikedUsers(userId));
  };

  return (
    <button type="button" className={s.likeBtn} onClick={handleToggleLike}>
      <Icon iconId="heart" width={18} height={16} className={iconClassName} />
    </button>
  );
};

export default LikeBtn;
