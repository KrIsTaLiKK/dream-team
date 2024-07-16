import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import s from "./HomePage.module.css";

const Home = () => {
  return (
    <div>
      <HelmetComponent>DreamTeam</HelmetComponent>
      <h1 className={s.title}>Добро пожаловать в Dream-Team!</h1>
    </div>
  );
};

export default Home;
