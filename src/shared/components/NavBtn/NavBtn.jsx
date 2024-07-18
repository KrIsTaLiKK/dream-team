import { Link } from "react-router-dom";
import clsx from "clsx";
import s from "./NavBtn.module.scss";

const NavBtn = ({ children, href, className, handleClick }) => {
  return (
    <>
      {href ? (
        <Link to={href} className={clsx(s.navBtn, className)}>
          {children}
        </Link>
      ) : (
        <button className={clsx(s.navBtn, className)} onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default NavBtn;
