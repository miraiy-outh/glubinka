import { useDispatch, useSelector } from "../hooks/redux-hooks";
import {
  ADD_TO_CART,
  PRODUCTS_CHANGE,
} from "../services/constants/products-constants";
import { isInCartSelector } from "../services/selectors/products-selectors";

export function ProductCart({
  productId,
  width,
  height,
}: {
  productId: number;
  width: number;
  height: number;
}) {
  const dispatch = useDispatch();
  const isInCart = useSelector(isInCartSelector(productId));

  const handleCartChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch({
      type: ADD_TO_CART,
      productId,
    });

    dispatch({
      type: PRODUCTS_CHANGE,
    });
  };
  return (
    <button className="cart__button nav__button" onClick={handleCartChange}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.33328 8.55198L1.00928 4.22932L2.89594 2.34265L7.21861 6.66665H27.5413C27.7491 6.66664 27.954 6.7152 28.1398 6.80847C28.3255 6.90174 28.4868 7.03714 28.6109 7.20385C28.735 7.37055 28.8184 7.56396 28.8545 7.76863C28.8905 7.9733 28.8783 8.18357 28.8186 8.38265L25.6186 19.0493C25.5363 19.3241 25.3675 19.565 25.1374 19.7363C24.9073 19.9075 24.6281 20 24.3413 20H7.99994V22.6667H22.6666V25.3333H6.66661C6.31299 25.3333 5.97385 25.1928 5.7238 24.9428C5.47375 24.6927 5.33328 24.3536 5.33328 24V8.55198ZM7.99994 9.33332V17.3333H23.3493L25.7493 9.33332H7.99994ZM7.33328 30.6666C6.80284 30.6666 6.29414 30.4559 5.91906 30.0809C5.54399 29.7058 5.33328 29.1971 5.33328 28.6667C5.33328 28.1362 5.54399 27.6275 5.91906 27.2524C6.29414 26.8774 6.80284 26.6667 7.33328 26.6667C7.86371 26.6667 8.37242 26.8774 8.74749 27.2524C9.12256 27.6275 9.33328 28.1362 9.33328 28.6667C9.33328 29.1971 9.12256 29.7058 8.74749 30.0809C8.37242 30.4559 7.86371 30.6666 7.33328 30.6666ZM23.3333 30.6666C22.8028 30.6666 22.2941 30.4559 21.9191 30.0809C21.544 29.7058 21.3333 29.1971 21.3333 28.6667C21.3333 28.1362 21.544 27.6275 21.9191 27.2524C22.2941 26.8774 22.8028 26.6667 23.3333 26.6667C23.8637 26.6667 24.3724 26.8774 24.7475 27.2524C25.1226 27.6275 25.3333 28.1362 25.3333 28.6667C25.3333 29.1971 25.1226 29.7058 24.7475 30.0809C24.3724 30.4559 23.8637 30.6666 23.3333 30.6666Z"
          fill={isInCart ? "#FF0024" : "#5A607F"}
        />
      </svg>
    </button>
  );
}
