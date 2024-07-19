import { useNavigate } from "react-router-dom";
import { useLogOutMutation } from "../redux/auth/authApi";
import toast from "react-hot-toast";

export const useLogOut = () => {
  const navigate = useNavigate();
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    try {
      await logOut().unwrap();
      navigate("/");
    } catch (error) {
      toast.error("Ошибка! Выход не удался.");
    }
  };

  return handleLogOut;
};
