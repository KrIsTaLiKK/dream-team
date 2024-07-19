import * as Yup from "yup";
import { useRegister } from "../../hooks";
import HelmetComponent from "../../shared/components/HelmetComponent/HelmetComponent";
import Container from "../../shared/components/Container/Container";
import AuthForm from "../../shared/components/AuthForm/AuthForm";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Слишком короткое имя!")
    .required("Обязательное поле"),
  email: Yup.string().email("Ошибка").required("Обязательное поле!"),
  password: Yup.string()
    .required("Обязательное поле!")
    .min(5, "Пароль должен быть не менее 5 символов"),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref("password"), null], "Пароли должны совпадать")
    .required("Обязательное поле!"),
});

const RegisterPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };

  const handleSubmit = useRegister();

  return (
    <Container>
      <HelmetComponent>Зарегистрироваться</HelmetComponent>
      <AuthForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        validation={registerSchema}
      />
    </Container>
  );
};

export default RegisterPage;
