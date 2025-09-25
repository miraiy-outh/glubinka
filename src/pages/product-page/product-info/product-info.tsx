import "./product-info.scss";
import { Sizes } from "./sizes/sizes";
import { Colors } from "./colors/colors";
import { ProductDescription } from "./product-description/product-description";
import { TProduct } from "../../../services/reducers/products-reducer";
import { ProductFavorite } from "../../../components/product-favorite";
import { ProductCart } from "../../../components/product-cart";

export function ProductInfo({ productInfo }: { productInfo: TProduct }) {
  let iconSize = 48;
  return (
    <div className="product-info">
      <div className="product-info__header">
        <h1 className="product-info__header__title">{productInfo.name}</h1>
        <div className="product-info__header__price">{productInfo.price} ₽</div>
      </div>
      <div className="product-info__container">
        <Sizes sizes={productInfo.sizes} />
        <Colors colors={productInfo.colors} />
        <div className="product-info__container__subcontainer">
          <ProductFavorite
            productId={productInfo.productId}
            width={iconSize}
            height={iconSize}
          />
          <ProductCart
            productId={productInfo.productId}
            width={iconSize}
            height={iconSize}
          />
        </div>
        <ProductDescription
          description={productInfo.description}
          details={productInfo.details}
        />
      </div>
    </div>
  );
}
