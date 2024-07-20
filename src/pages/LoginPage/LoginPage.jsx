import * as Yup from "yup";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import AuthForm from "../../shared/components/AuthForm/AuthForm";
import Container from "../../shared/components/Container/Container";
import { useLogIn } from "../../hooks";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email должкен быть валидным")
    .required("Обязательное поле"),
  password: Yup.string()
    .required("Обязательное поле")
    .min(5, "Пароль должен быть не менее 5 символов"),
});

const LoginPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = useLogIn();

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
