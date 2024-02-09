import { Carusel } from "./carusel/carusel";
import { Info } from "./info/info";
import { Options } from "./options/options";
import "./product.scss"

export function Product({ title, price, imagesSrc, isInFavorite, isInCart }: { title: string, price: number, imagesSrc: string[], isInFavorite: boolean, isInCart: boolean }) {
    return (
        <div className="product">
            <Carusel imagesSrc={imagesSrc} />
            <div className="product__container">
                <Info
                    title={title}
                    price={price}
                />
                <Options
                    isInFavorite={isInFavorite}
                    isInCart={isInCart}
                />
            </div>

        </div>
    )
}