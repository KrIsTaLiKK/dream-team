import { Link } from "react-router-dom";
import clsx from "clsx";
import s from "./AuthBtn.module.css";

const AuthBtn = ({ children, href, className, handleClick }) => {
  return (
    <>
      {href ? (
        <Link to={href} className={clsx(s.btn, className)}>
          {children}
        </Link>
      ) : (
        <button className={clsx(s.btn, className)} onClick={handleClick}>
          {children}
        </button>
      )}
    </>
  );
};

export default AuthBtn;
