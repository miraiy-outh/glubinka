import { Cart } from "../../../../components/icons-svg/cart";
import { Favorites } from "../../../../components/icons-svg/favorites";
import "./options.scss"

export function Options({ isInFavorite, isInCart }: { isInFavorite: boolean, isInCart: boolean }) {
    let iconSize = 32;
    return (
        <div className="options">
            <Favorites
                fill={isInFavorite ? "#FF0024" : "#5A607F"}
                width={iconSize}
                height={iconSize}
            />
            <Cart
                fill={isInCart ? "#FF0024" : "#5A607F"}
                width={iconSize}
                height={iconSize}
            />
        </div>
    )
}