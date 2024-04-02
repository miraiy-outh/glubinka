import { useDispatch, useSelector } from "../../../../hooks/redux-hooks";
import {
  ADD_TO_FAVORITE,
  PRODUCTS_CHANGE,
} from "../../../../services/constants/products-constants";
import { isInFavoriteSelector } from "../../../../services/selectors/products-selectors";

export function ProductFavorite({
  productId,
  width,
  height,
}: {
  productId: number;
  width: number;
  height: number;
}) {
  const dispatch = useDispatch();
  const isInFavorite = useSelector(isInFavoriteSelector(productId));

  const handleFavoriteChange = () => {
    dispatch({
      type: ADD_TO_FAVORITE,
      productId,
    });

    dispatch({
      type: PRODUCTS_CHANGE,
    });
  };
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleFavoriteChange}
    >
      <g clipPath="url(#clip0_603_117)">
        <path
          d="M16.0014 6.03867C19.1334 3.22667 23.9734 3.32 26.9908 6.34267C30.0068 9.36667 30.1108 14.1827 27.3054 17.324L15.9988 28.6467L4.69476 17.324C1.88942 14.1827 1.99476 9.35867 5.00942 6.34267C8.02942 3.324 12.8601 3.22267 16.0014 6.03867ZM25.1028 8.22667C23.1028 6.224 19.8761 6.14267 17.7828 8.02267L16.0028 9.62L14.2214 8.024C12.1214 6.14134 8.90142 6.224 6.89609 8.22934C4.90942 10.216 4.80942 13.396 6.64009 15.4973L16.0001 24.872L25.3601 15.4987C27.1921 13.396 27.0921 10.22 25.1028 8.22667Z"
          fill={isInFavorite ? "#FF0024" : "#5A607F"}
        />
      </g>
      <defs>
        <clipPath id="clip0_603_117">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
