import { useDispatch } from "react-redux";
import { incrementPage } from "../../../../redux/users/slice";
import Icon from "../../../../shared/components/Icon/Icon";
import s from "./LoadMoreBtn.module.scss";

const LoadMoreBtn = () => {
  const dispatch = useDispatch();

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  return (
    <button type="button" onClick={handleLoadMore} className={s.loadMoreBtn}>
      Показать еще
      <Icon
        iconId="arrow"
        width={24}
        height={24}
        className={s.loadMoreBtn__icon}
      />
    </button>
  );
};

export default LoadMoreBtn;
