import { useDispatch } from "react-redux";
import s from "./LoadMoreBtn.module.css";

import { incrementPage } from "../../../../redux/users/slice";
import Icon from "../../../../shared/components/Icon/Icon";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <button type="button" onClick={handleLoadMore} className={s.btn}>
      Показать еще
      <Icon iconId="arrow" width={24} height={24} className={s.icon} />
    </button>
  );
};

export default LoadMoreBtn;
