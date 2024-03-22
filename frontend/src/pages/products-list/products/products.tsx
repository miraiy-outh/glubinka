import { Product } from "../product/product";
import "./products.scss"
import { productsSelector } from "../../../services/selectors/products-selectors";
import { useSelector } from "../../../hooks/redux-hooks";

export function Products() {
    const products = useSelector(productsSelector)

    return (
        <div className="products">
            {products.map((productInfo, key) => (
                <Product
                    key={key}
                    title={productInfo.name}
                    price={productInfo.price}
                    imagesSrc={productInfo.images}
                    isInFavorite={productInfo.isInFavorite}
                    isInCart={productInfo.isInCart}
                />
            ))}
        </div>
    )
}