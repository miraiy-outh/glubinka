import { NoneProducts } from "../../../components/none-products/none-products";
import { useSelector } from "../../../hooks/redux-hooks";
import { cartProductsSelector } from "../../../services/selectors/products-selectors";
import { CartCheck } from "../cart-check/cart-check";
import { CartProduct } from "./cart-product/cart-product";
import "./cart-products.scss";

export function CartProducts() {
  const cartProducts = useSelector(cartProductsSelector);
  return (
    <div className="cart-products">
      {cartProducts.length > 0 ? (
        <div className="cart-products__container">
          <h1 className="cart-products__header">Корзина</h1>
          <div className="cart-products__list">
            {cartProducts.map((productInfo) => (
              <CartProduct
                key={productInfo.productId}
                productId={productInfo.productId}
                title={productInfo.name}
                price={productInfo.price}
                imagesSrc={productInfo.images}
              />
            ))}
          </div>
        </div>
      ) : (
        <NoneProducts text="В корзине ничего нет" />
      )}
      <CartCheck />
    </div>
  );
}
