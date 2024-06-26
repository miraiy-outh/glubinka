import "./cart-product.scss";
import { CartInfo } from "./cart-info/cart-info";
import { CartOptions } from "./cart-options/cart-options";

export function CartProduct({
  productId,
  title,
  price,
  imagesSrc,
}: {
  productId: number;
  title: string;
  price: number;
  imagesSrc: string[];
}) {
  return (
    <div className="cart-product">
      <img className="cart-product__img" src={imagesSrc[0]}></img>
      <div className="cart-product__container">
        <CartInfo title={title} price={price} />
        <CartOptions productId={productId} />
      </div>
    </div>
  );
}
