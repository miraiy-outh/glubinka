import { useEffect } from "react";
import { useDispatch, useSelector } from "../../../../../hooks/redux-hooks";
import {
  PRODUCTS_CHANGE,
  PRODUCTS_COLOR_FILTER_CHANGE,
  PRODUCTS_SIZE_FILTER_CHANGE,
} from "../../../../../services/constants/products-constants";
import {
  productsColorFilterSelector,
  productsSizeFilterSelector,
} from "../../../../../services/selectors/products-selectors";
import "./details.scss";
import {
  FORMS_COLORS_CHANGE,
  FORMS_INIT,
  FORMS_SIZES_CHANGE,
} from "../../../../../services/constants/forms-constants";

export function Details({
  name,
  values,
  checkboxesValues,
  index,
}: {
  name: string;
  values: string[];
  checkboxesValues: boolean[];
  index: string;
}) {
  const dispatch = useDispatch();
  const colors = useSelector(productsColorFilterSelector);
  const sizes = useSelector(productsSizeFilterSelector);

  useEffect(() => {
    dispatch({
      type: FORMS_INIT,
      colorsLength: colors.length,
      sizesLength: sizes.length,
    });
  }, [sizes, colors]);

  const handleChange = (index: string, value: string, i: number) => {
    switch (index) {
      case "color": {
        if (colors.indexOf(value) === -1) {
          colors.push(value);
          dispatch({
            type: PRODUCTS_COLOR_FILTER_CHANGE,
            colors: colors,
          });
        } else {
          colors.splice(colors.indexOf(value), 1);
          dispatch({
            type: PRODUCTS_COLOR_FILTER_CHANGE,
            colors: colors,
          });
        }

        dispatch({
          type: FORMS_COLORS_CHANGE,
          formId: i,
        });

        break;
      }

      case "size": {
        if (sizes.indexOf(value) === -1) {
          sizes.push(value);
          dispatch({
            type: PRODUCTS_SIZE_FILTER_CHANGE,
            sizes: sizes,
          });
        } else {
          sizes.splice(sizes.indexOf(value), 1);
          dispatch({
            type: PRODUCTS_SIZE_FILTER_CHANGE,
            sizes: sizes,
          });
        }

        dispatch({
          type: FORMS_SIZES_CHANGE,
          formId: i,
        });

        break;
      }

      default:
        break;
    }

    dispatch({
      type: PRODUCTS_CHANGE,
    });
  };

  return (
    <div className="details">
      <h3 className="details__title">{name}</h3>
      {values.map((value, i) => (
        <div key={i} className="details__container">
          <input
            className="details__checkbox"
            type="checkbox"
            name={`${index}${i + 1}`}
            id={`${index}${i + 1}`}
            onChange={() => handleChange(index, value, i)}
            checked={checkboxesValues[i]}
          />
          <label
            className="details__label"
            htmlFor={`${index}${i + 1}`}
          ></label>
          <div className="details__value">{value}</div>
        </div>
      ))}
    </div>
  );
}
