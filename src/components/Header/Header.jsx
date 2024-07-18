import { useAuthSelectors } from "../../hooks";
import Container from "../../shared/components/Container/Container";
import NavBar from "../NavBar/NavBar";
import s from "./Header.module.scss";

const Header = () => {
  const { isLoggedIn } = useAuthSelectors();

  return (
    <>
      {isLoggedIn && (
        <div className={s.header}>
          <Container>
            <NavBar />
          </Container>
        </div>
      )}
    </>
  );
};

export default Header;
