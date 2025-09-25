import { TDetailInfo } from "../../../../services/reducers/products-reducer";
import "./product-description.scss";
import { ProductDetails } from "./product-details/product-details";

export function ProductDescription({
  description,
  details,
}: {
  description: string;
  details: TDetailInfo[];
}) {
  return (
    <div className="product-description">
      <div className="product-description__container">
        <div className="product-description__title">Описание</div>
        <div className="product-description__info">{description}</div>
      </div>

      <div className="product-description__container">
        <div className="product-description__title">Детали</div>
        <ProductDetails details={details} />
      </div>
    </div>
  );
}
