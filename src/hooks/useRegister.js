import { useRegisterMutation } from "../redux/auth/authApi";
import toast from "react-hot-toast";

export const useRegister = () => {
  const [register] = useRegisterMutation();

  const handleSubmit = (values, actions) => {
    register(values)
      .unwrap()
      .then(() => toast.success("Вы успешно зарегистрировались!"))
      .catch((error) => {
        if (error.status === 400) {
          toast.error("Ошибка регистрации");
        } else {
          toast.error("Что-то пошло не так. Попробуйте еще раз!");
        }
      })
      .finally(() => actions.resetForm());
  };

  return handleSubmit;
};
