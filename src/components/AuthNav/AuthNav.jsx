import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import AuthBtn from "../../shared/components/AuthBtn/AuthBtn";
import Icon from "../../shared/components/Icon/Icon";
import { useAuthSelectors, useLogOut } from "../../hooks/index";
import { clsx } from "clsx";
import s from "./AuthNav.module.css";
import useIsMobile from "../../hooks/useIsMobile";

const AuthNav = () => {
  const { isLoggedIn } = useAuthSelectors();
  const isMobile = useIsMobile();
  const { userId } = useParams();

  const logoutBtnContent = isMobile ? (
    <Icon iconId="logout" width={40} height={40} />
  ) : (
    "Выход"
  );
  const backBtn = isMobile ? (
    <Icon iconId="arrow" className={s.iconBack} />
  ) : (
    "Назад"
  );
  const btnClassName = isMobile ? s.mobLogoutBtn : "";

  const handleLogOut = useLogOut();

  return (
    <nav>
      {!isLoggedIn ? (
        <ul className={s.authList}>
          <li>
            <AuthBtn href="/register">Зарегистрироваться</AuthBtn>
          </li>
          <li>
            <AuthBtn href="/login" className={s.loginBtn}>
              <BsPersonCircle className={s.loginIcon} />
              Войти
            </AuthBtn>
          </li>
        </ul>
      ) : (
        <div className={s.wrapBtn}>
          {userId && (
            <AuthBtn href="/users" className={btnClassName}>
              {backBtn}
            </AuthBtn>
          )}
          <AuthBtn
            className={clsx(s.logoutBtn, btnClassName)}
            handleClick={handleLogOut}
          >
            {logoutBtnContent}
          </AuthBtn>
        </div>
      )}
    </nav>
  );
};

export default AuthNav;
