import "./product-info.scss"
import { TMockProductProps } from "../../../mocks/mocks-data";
import { Favorites } from "../../../components/icons-svg/favorites";
import { Cart } from "../../../components/icons-svg/cart";
import { Sizes } from "./sizes/sizes";
import { Colors } from "./colors/colors";
import { ProductDescription } from "./product-description/product-description";

export function ProductInfo({ productInfo }: { productInfo: TMockProductProps }) {
    let iconSize = 48;
    return (
        <div className="product-info">
            <div className="product-info__header">
                <h1 className="product-info__header__title">{productInfo.name}</h1>
                <div className="product-info__header__price">{productInfo.price} ₽</div>
            </div>
            <div className="product-info__container">
                <Sizes
                    sizes={productInfo.sizes}
                />
                <Colors
                    colors={productInfo.colors}
                />
                <div className="product-info__container__subcontainer">
                    <Favorites
                        fill={productInfo.isInFavorite ? "#FF0024" : "#5A607F"}
                        width={iconSize}
                        height={iconSize}
                    />
                    <Cart
                        fill={productInfo.isInCart ? "#FF0024" : "#5A607F"}
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
    )
}