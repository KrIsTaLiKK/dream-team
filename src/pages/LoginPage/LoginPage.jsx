import { useDispatch } from "react-redux";
import AuthForm from "../../shared/components/AuthForm/AuthForm";
import Container from "../../shared/components/Container/Container";
import * as Yup from "yup";
import toast from "react-hot-toast";
import s from "./LoginPage.module.css";
import { logIn } from "../../redux/auth/operations";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email должкен быть валидным")
    .required("Обязательное поле"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(5, "Пароль должен быть не менее 5 символов"),
});

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values))
      .unwrap()
      .then(() => toast.success("Вы успешно авторизовались"))
      .catch((error) => {
        error.status === 400 && toast.error("Неправильные логин или пароль");
      })
      .finally(() => actions.resetForm());
  };

  return (
    <Container>
      <div className={s.wrap}>
        <AuthForm
          handleSubmit={handleSubmit}
          initialValues={initialValues}
          login={true}
          validation={loginSchema}
        />
      </div>
    </Container>
  );
};

export default LoginPage;
