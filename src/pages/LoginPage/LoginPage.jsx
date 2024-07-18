import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import AuthForm from "../../shared/components/AuthForm/AuthForm";
import Container from "../../shared/components/Container/Container";

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
      .then(() => toast.success("Вы успешно вошли"))
      .catch((error) => {
        error.status === 400 && toast.error("Неправильные логин или пароль");
      })
      .finally(() => actions.resetForm());
  };

  return (
    <Container>
      <HelmetComponent>Войти</HelmetComponent>
      <AuthForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        isLoginForm={true}
        validation={loginSchema}
      />
    </Container>
  );
};

export default LoginPage;
