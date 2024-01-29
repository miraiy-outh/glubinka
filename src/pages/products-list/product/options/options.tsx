import { Cart } from "../../../../components/icons-svg/cart";
import { Favorites } from "../../../../components/icons-svg/favorites";
import "./options.scss"

export function Options({ isInFavorite, isInCart }: { isInFavorite: boolean, isInCart: boolean }) {
    return (
        <div className="options">
            <Favorites fill={isInFavorite ? "#FF0024" : "#5A607F"} />
            <Cart fill={isInCart ? "#FF0024" : "#5A607F"} />
        </div>
    )
}