import { Product } from "../product/product";
import "./products.scss";
import { productsSelector } from "../../../services/selectors/products-selectors";
import { useSelector } from "../../../hooks/redux-hooks";

export function Products() {
  const products = useSelector(productsSelector);

  return (
    <div className="products">
      {products.map((productInfo) => (
        <Product
          key={productInfo.productId}
          productId={productInfo.productId}
          title={productInfo.name}
          price={productInfo.price}
          imagesSrc={productInfo.images}
        />
      ))}
    </div>
  );
}
