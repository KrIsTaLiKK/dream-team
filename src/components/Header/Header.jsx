import Container from "../../shared/components/Container/Container";
import AuthNav from "../AuthNav/AuthNav";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.header}>
      <Container>
        <AuthNav />
      </Container>
    </div>
  );
};

export default Header;
