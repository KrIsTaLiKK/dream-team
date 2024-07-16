import { useDispatch } from "react-redux";
import AuthForm from "../../shared/components/AuthForm/AuthForm";
import Container from "../../shared/components/Container/Container";
import { register } from "../../redux/auth/operations";

import toast from "react-hot-toast";
import * as Yup from "yup";

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
      .then(() => toast.success("You`ve  successfully signed in"))
      .catch((error) => {
        error.status === 400 &&
          toast.error(
            "A user with such data is already signed in. Please enter other data."
          );
      })
      .finally(() => actions.resetForm());
  };

  return (
    <Container>
      <AuthForm
        handleSubmit={handleSubmit}
        initialValues={initialValues}
        validation={registerSchema}
      />
    </Container>
  );
};

export default RegisterPage;
