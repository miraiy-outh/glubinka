import { Cabinet } from "./icons-svg/cabinet";
import { Cart } from "./icons-svg/cart";
import { Favorites } from "./icons-svg/favorites";
import "./icons.scss"

export function Icons() {
    return (
        <div className="icons">
            <Favorites />
            <Cart />
            <Cabinet />
        </div>
    )
}