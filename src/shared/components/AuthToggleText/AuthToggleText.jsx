import { Link } from "react-router-dom";
import s from "./AuthToggleText.module.scss";

const AuthToggleText = ({ isLoginForm }) => {
  return (
    <p className={s.authToggleText}>
      {isLoginForm ? (
        <>
          Нет аккаунта?
          <Link to="/register" className={s.authToggleText__link}>
            Зарегистрируйтесь
          </Link>
        </>
      ) : (
        <>
          Уже зарегистрированы?
          <Link to="/login" className={s.authToggleText__link}>
            Войдите
          </Link>
        </>
      )}
    </p>
  );
};

export default AuthToggleText;
