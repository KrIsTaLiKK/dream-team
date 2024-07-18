import s from "./UsersOverview.module.scss";

const UsersOverview = () => {
  return (
    <div className={s.usersOverview}>
      <h1 className={s.usersOverview__title}>Наша команда</h1>
      <p className={s.usersOverview__description}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </p>
    </div>
  );
};

export default UsersOverview;
