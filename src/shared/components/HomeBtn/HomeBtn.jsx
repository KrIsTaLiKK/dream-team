import NavBtn from "../NavBtn/NavBtn";
import s from "./HomeBtn.module.scss";

const HomeBtn = ({ isAuthenticated }) => {
  const href = isAuthenticated ? "/users" : "/";

  return (
    <NavBtn href={href} className={s.homeBtn}>
      Домой
    </NavBtn>
  );
};

export default HomeBtn;
