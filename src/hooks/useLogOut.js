import { useDispatch } from "react-redux";
import { logOut } from "../redux/auth/operations";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const useLogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await dispatch(logOut()).unwrap();
      navigate("/");
    } catch (error) {
      toast.error("Ошибка! Выход не удался.");
    }
  };

  return handleLogOut;
};
