import { useParams } from "react-router-dom";
import { clsx } from "clsx";
import { useIsMobile, useLogOut } from "../../hooks/index";
import NavBtn from "../../shared/components/NavBtn/NavBtn";
import Icon from "../../shared/components/Icon/Icon";
import s from "./NavBar.module.scss";

const NavBar = () => {
  const isMobile = useIsMobile();
  const { userId } = useParams();

  const logoutBtnContent = isMobile ? (
    <Icon iconId="logout" width={40} height={40} />
  ) : (
    "Выход"
  );

  const backBtnContent = isMobile ? (
    <Icon iconId="arrow" className={s.nav__iconBack} />
  ) : (
    "Назад"
  );

  const btnClassName = isMobile ? s.nav__mobLogoutBtn : "";

  const handleLogOut = useLogOut();

  return (
    <nav className={s.nav}>
      {userId && (
        <NavBtn href="/users" className={btnClassName}>
          {backBtnContent}
        </NavBtn>
      )}
      <NavBtn
        className={clsx(s.nav__logoutBtn, btnClassName)}
        handleClick={handleLogOut}
      >
        {logoutBtnContent}
      </NavBtn>
    </nav>
  );
};

export default NavBar;
