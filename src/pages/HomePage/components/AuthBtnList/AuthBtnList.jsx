import clsx from "clsx";
import NavBtn from "../../../../shared/components/NavBtn/NavBtn";
import { BsPersonCircle } from "react-icons/bs";
import s from "./AuthBtnList.module.scss";

const AuthBtnList = () => {
  return (
    <ul className={s.authBtnList}>
      <li>
        <NavBtn href="/register" className={s.authBtnList__btn}>
          Зарегистрироваться
        </NavBtn>
      </li>
      <li>
        <NavBtn
          href="/login"
          className={clsx(s.authBtnList__btn, s.authBtnList__btn_login)}
        >
          <BsPersonCircle className={s.authBtnList__loginIcon} />
          Войти
        </NavBtn>
      </li>
    </ul>
  );
};

export default AuthBtnList;
