import { useSelector } from "../../../../hooks/redux-hooks";
import {
  formsColorsSelector,
  formsSizesSelector,
} from "../../../../services/selectors/forms-selectors";
import {
  productsColorSelector,
  productsSizeSelector,
} from "../../../../services/selectors/products-selectors";
import "./details-filter.scss";
import { Details } from "./details/details";

export function DetailsFilter() {
  const sizes = useSelector(productsSizeSelector);
  const colors = useSelector(productsColorSelector);
  const colorsCheckboxesValues = useSelector(formsColorsSelector);
  const sizesCheckboxesValues = useSelector(formsSizesSelector);
  return (
    <div className="details-filter">
      <Details
        key={"sizes"}
        name={"Размер"}
        values={sizes}
        checkboxesValues={sizesCheckboxesValues}
        index={"size"}
      />

      <Details
        key={"colors"}
        name={"Цвет"}
        values={colors}
        checkboxesValues={colorsCheckboxesValues}
        index={"color"}
      />
    </div>
  );
}
