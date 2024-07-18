import s from "./UserHeader.module.scss";

const UserHeader = ({ user: { first_name, last_name, avatar } }) => {
  return (
    <div className={s.userHeader}>
      <div className={s.userHeader__parent}>
        <div className={s.userHeader__children}>
          <div className={s.userHeader__textWrap}>
            <h1 className={s.userHeader__title}>
              {first_name} {last_name}
            </h1>
            <p className={s.userHeader__role}>Партнер</p>
          </div>
          <div className={s.userHeader__imgWrap}>
            <img src={avatar} alt="User" width={187} height={187} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
