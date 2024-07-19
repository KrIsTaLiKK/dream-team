import Container from "../../shared/components/Container/Container";
import HomeBtn from "../../shared/components/HomeBtn/HomeBtn";
import Icon from "../../shared/components/Icon/Icon";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <Container>
      <div className={s.notFoundPage}>
        <h1 className={s.notFoundPage__title}>Sorry! Not found this page!</h1>
        <HomeBtn isAuthenticated={false} />
        <Icon iconId="woman" />
      </div>
    </Container>
  );
};

export default NotFoundPage;
