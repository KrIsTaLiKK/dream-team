import { Vortex } from "react-loader-spinner";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.backdrop}>
      <Vortex visible={true} />
    </div>
  );
};

export default Loader;
