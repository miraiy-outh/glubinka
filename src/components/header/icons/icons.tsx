import { Cabinet } from "../../icons-svg/cabinet";
import { Cart } from "../../icons-svg/cart";
import { Favorites } from "../../icons-svg/favorites";
import "./icons.scss"

export function Icons() {
    let iconSize = 32;
    return (
        <div className="icons">
            <Favorites
                fill="white"
                width={iconSize}
                height={iconSize}
            />
            <Cart
                fill="white"
                width={iconSize}
                height={iconSize}
            />
            <Cabinet />
        </div>
    )
}