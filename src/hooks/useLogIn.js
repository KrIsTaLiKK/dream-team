import { useLogInMutation } from "../redux/auth/authApi";
import toast from "react-hot-toast";

export const useLogIn = () => {
  const [logIn] = useLogInMutation();

  const handleSubmit = (values, actions) => {
    logIn(values)
      .unwrap()
      .then(() => toast.success("Вы успешно вошли!"))
      .catch((error) => {
        if (error.status === 400) {
          toast.error("Неправильные логин или пароль!");
        } else {
          toast.error("Что-то пошло не так. Попробуйте еще раз!");
        }
      })
      .finally(() => actions.resetForm());
  };

  return handleSubmit;
};
