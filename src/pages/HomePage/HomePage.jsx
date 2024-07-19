import Container from "../../shared/components/Container/Container";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import AuthBtnList from "./components/AuthBtnList/AuthBtnList";
import s from "./HomePage.module.scss";

const Home = () => {
  return (
    <div className={s.overlay}>
      <Container>
        <div className={s.home}>
          <HelmetComponent>DreamTeam</HelmetComponent>
          <h1 className={s.home__title}>Добро пожаловать в Dream-Team!</h1>
          <p className={s.home__description}>
            Это платформа для создания успешных команд и реализации амбициозных
            проектов. Мы предлагаем инновационные инструменты и ресурсы, которые
            помогут вам организовать работу, наладить коммуникацию и достичь
            ваших целей.
          </p>
          <AuthBtnList />
        </div>
      </Container>
    </div>
  );
};

export default Home;
