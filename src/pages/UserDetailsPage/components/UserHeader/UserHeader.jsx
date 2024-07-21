import useAvatarUpload from "../../../../hooks/useAvatarUpload";
import AvatarUpload from "./components/AvatarUpload/AvatarUpload";
import s from "./UserHeader.module.scss";

const UserHeader = ({
  user: { first_name, last_name, avatar, id },
  isCurrentUser,
}) => {
  const { handleAvatarUpload, avatarUrl } = useAvatarUpload(id);
  const role = isCurrentUser ? "Моя страница" : "Партнер";

  return (
    <div className={s.userHeader}>
      <div className={s.userHeader__parent}>
        <div className={s.userHeader__children}>
          <div className={s.userHeader__textWrap}>
            <h1 className={s.userHeader__title}>
              {first_name} {last_name}
            </h1>
            <p className={s.userHeader__role}>{role}</p>
          </div>
          <div className={s.userHeader__imgWrap}>
            <img
              src={avatar || avatarUrl}
              alt="User"
              width={187}
              height={187}
            />
            {isCurrentUser && (
              <AvatarUpload handleAvatarUpload={handleAvatarUpload} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
