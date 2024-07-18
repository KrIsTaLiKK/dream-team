import NavBtn from "../../shared/components/NavBtn/NavBtn";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import { BsPersonCircle } from "react-icons/bs";
import clsx from "clsx";
import s from "./HomePage.module.css";

const Home = () => {
  return (
    <div>
      <HelmetComponent>DreamTeam</HelmetComponent>
      <h1 className={s.title}>Добро пожаловать в Dream-Team!</h1>
      <ul className={s.authBtnWrap}>
        <li>
          <NavBtn href="/register" className={s.authBtn}>
            Зарегистрироваться
          </NavBtn>
        </li>
        <li>
          <NavBtn href="/login" className={clsx(s.loginBtn, s.authBtn)}>
            <BsPersonCircle className={s.loginIcon} />
            Войти
          </NavBtn>
        </li>
      </ul>
    </div>
  );
};

export default Home;
