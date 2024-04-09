import { useNavigate } from "react-router-dom";
import { TCollection } from "../../../../services/reducers/collections-reducer";
import "./collection.scss";
import { useDispatch, useSelector } from "../../../../hooks/redux-hooks";
import { collectionNameSelector } from "../../../../services/selectors/collections-selector";
import {
  PRODUCTS_CHANGE,
  PRODUCTS_COLLECTION_CHANGE,
  PRODUCTS_COLLECTION_FILTER_CHANGE,
} from "../../../../services/constants/products-constants";

export function Collection({ id, imgURL, header, title }: TCollection) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const collectionName = useSelector(collectionNameSelector(id));
  const handleRootChange = () => {
    if (collectionName !== null) {
      dispatch({
        type: PRODUCTS_COLLECTION_CHANGE,
        collection: collectionName,
      });

      dispatch({
        type: PRODUCTS_COLLECTION_FILTER_CHANGE,
        collection: id,
      });
      dispatch({
        type: PRODUCTS_CHANGE,
      });
    }
    navigate("/products");
  };
  return (
    <div className="collection pointer" onClick={handleRootChange}>
      <img className="collection__img" src={imgURL} />
      <div className="shadow shadow__c" />
      <div className="collection__info">
        <div className="collection__info__header">{header}</div>
        <div className="collection__info__details">{title}</div>
      </div>
    </div>
  );
}
