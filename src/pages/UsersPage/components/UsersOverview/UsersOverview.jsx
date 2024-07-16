import s from "./UsersOverview.module.css";

const UsersOverview = () => {
  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Наша команда</h1>
      <p className={s.description}>
        Это опытные специалисты, хорошо разбирающиеся во всех задачах, которые
        ложатся на их плечи, и умеющие находить выход из любых, даже самых
        сложных ситуаций.
      </p>
    </div>
  );
};

export default UsersOverview;
