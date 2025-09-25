import { useNavigate } from "react-router-dom";
import { Cabinet } from "../../icons-svg/cabinet";
import { Cart } from "../../icons-svg/cart";
import { Favorites } from "../../icons-svg/favorites";
import "./icons.scss";

export function Icons() {
  let iconSize = 32;
  const navigate = useNavigate();
  return (
    <div className="icons">
      <button
        className="nav__button user-favorite__button"
        onClick={() => navigate("/favorites")}
      >
        <Favorites fill="white" width={iconSize} height={iconSize} />
      </button>
      <button
        className="nav__button user-cart__button"
        onClick={() => navigate("/cart")}
      >
        <Cart fill="white" width={iconSize} height={iconSize} />
      </button>
      <button
        className="nav__button user-cabinet__button"
        onClick={() => navigate("/cabinet")}
      >
        <Cabinet />
      </button>
    </div>
  );
}
