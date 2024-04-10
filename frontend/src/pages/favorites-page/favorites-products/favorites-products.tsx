import { NoneProducts } from "../../../components/none-products/none-products";
import { useSelector } from "../../../hooks/redux-hooks";
import { favoritesProductsSelector } from "../../../services/selectors/products-selectors";
import { Product } from "../../products-list/product/product";
import "./favorites-products.scss";

export function FavoritesProducts() {
  const favoritesProducts = useSelector(favoritesProductsSelector);
  return (
    <div className="favorites-products">
      {favoritesProducts.length > 0 ? (
        <div className="favorites-products__container">
          <h1 className="favorites-products__header">Избранное</h1>
          <div className="favorites-products__list">
            {favoritesProducts.map((productInfo) => (
              <Product
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
        <NoneProducts text="Избранных товаров нет" />
      )}
    </div>
  );
}
