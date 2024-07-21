import Icon from "../../../../../../shared/components/Icon/Icon";
import s from "./AvatarUpload.module.scss";

const AvatarUpload = ({ handleAvatarUpload }) => {
  return (
    <label htmlFor="upload-avatar" className={s.avatarUpload}>
      <input
        type="file"
        id="upload-avatar"
        className={s.avatarUpload__input}
        onChange={handleAvatarUpload}
      />
      <span className={s.avatarUpload__wrap}>
        <Icon
          iconId="upload"
          width={30}
          height={30}
          className={s.avatarUpload__icon}
        />
      </span>
    </label>
  );
};

export default AvatarUpload;
