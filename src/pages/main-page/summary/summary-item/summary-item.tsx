import { useNavigate } from "react-router-dom";
import { LogoMainPage } from "../../../../components/logo/logo-main-page";
import { TSummary } from "../../../../services/reducers/summary-reducer";
import "./summary-item.scss";
import { useDispatch } from "../../../../hooks/redux-hooks";
import {
  PRODUCTS_CHANGE,
  PRODUCTS_COLLECTION_CHANGE,
  PRODUCTS_COLLECTION_FILTER_CHANGE,
} from "../../../../services/constants/products-constants";

export function SummaryItem({ type, className, imgURL, header }: TSummary) {
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

  if (type === "main") {
    return (
      <div
        className={`summary__item pointer ${className}`}
        onClick={handleRootChange}
      >
        <img className="summary__item__img" src={imgURL} />
        <div className="shadow shadow__a" />
        <div className="summary__item__info main-logo">
          <LogoMainPage />
          <div className="main-logo__text">{header}</div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`summary__item pointer ${className}`}
      onClick={handleRootChange}
    >
      <img className="summary__item__img" src={imgURL} />
      <div className="shadow shadow__b" />
      <div className="summary__item__info">
        <div className="summary__item__info__header">{header}</div>
        <a className="summary__item__info__details">Узнать больше</a>
      </div>
    </div>
  );
}
