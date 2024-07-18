import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
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
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(register(values))
      .unwrap()
      .then(() => toast.success("Вы успешно зарегистрировались!"))
      .catch((error) => {
        error.status === 400 && toast.error("Ошибка регистрации");
      })
      .finally(() => actions.resetForm());
  };

  return (
    <Container>
      <HelmetComponent>зарегистрироваться</HelmetComponent>
      <AuthForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        validation={registerSchema}
      />
    </Container>
  );
};

export default RegisterPage;
