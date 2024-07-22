import Icon from "../Icon/Icon";
import s from "./ErrorComponent.module.scss";

const ErrorComponent = () => {
  return (
    <div className={s.error}>
      <p className={s.error__text}>
        Что-то пошло не так. Пожалуйста, перезагрузите страницу!
      </p>
      <Icon iconId="sad" width={70} height={70} />
    </div>
  );
};

export default ErrorComponent;
