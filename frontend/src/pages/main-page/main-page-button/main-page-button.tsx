import { useNavigate } from "react-router-dom";
import "./main-page-button.scss";
import { useDispatch } from "../../../hooks/redux-hooks";
import {
  PRODUCTS_CHANGE,
  PRODUCTS_COLLECTION_CHANGE,
  PRODUCTS_COLLECTION_FILTER_CHANGE,
} from "../../../services/constants/products-constants";

export function MainPageButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleRootChange = () => {
    dispatch({
      type: PRODUCTS_COLLECTION_CHANGE,
      collection: null,
    });

    dispatch({
      type: PRODUCTS_COLLECTION_FILTER_CHANGE,
      collection: null,
    });
    dispatch({
      type: PRODUCTS_CHANGE,
    });
    navigate("/products");
  };
  return (
    <button className="main-page-button pointer" onClick={handleRootChange}>
      <p className="main-page-button__text">Смотреть все</p>
    </button>
  );
}
