import { useState } from "react";
import { useUpdateAvatarMutation } from "../redux/auth/authApi";
import toast from "react-hot-toast";

const useAvatarUpload = (userId) => {
  const [updateAvatar] = useUpdateAvatarMutation();
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleAvatarUpload = async (event) => {
    const file = event.target.files[0];
    console.log("Selected file:", file);
    if (file) {
      const formData = new FormData();
      formData.append("avatar", file);

      try {
        const response = await updateAvatar({ userId, formData }).unwrap();
        console.log("Response:", response);
        setAvatarUrl(response.avatarUrl);
        toast.success("Аватар успешно обновлен!");
      } catch (error) {
        toast.error("Ошибка загрузки аватара. Попробуйте снова.");
      }
    }
  };

  return { handleAvatarUpload, avatarUrl };
};

export default useAvatarUpload;
