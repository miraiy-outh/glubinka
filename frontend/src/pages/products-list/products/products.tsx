import { Product } from "../product/product";
import { mockProductsInfo } from "../../../mocks/mocks-data";
import "./products.scss"

export function Products() {
    return (
        <div className="products">
            {mockProductsInfo.map((productInfo, key) => (
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