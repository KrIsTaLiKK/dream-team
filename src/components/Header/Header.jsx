import { useLocation } from "react-router-dom";
import { useAuthSelectors } from "../../hooks";
import Container from "../../shared/components/Container/Container";
import NavBar from "../NavBar/NavBar";
import clsx from "clsx";
import s from "./Header.module.scss";

const Header = () => {
  const { isLoggedIn } = useAuthSelectors();
  const location = useLocation();

  const headerClassName =
    location.pathname !== "/users" && s.header_paddingBottom;

  return (
    <>
      {isLoggedIn && (
        <div className={clsx(s.header, headerClassName)}>
          <Container>
            <NavBar />
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
