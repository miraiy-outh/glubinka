import { takeEvery } from "redux-saga/effects";
import { EXAMPLE_ACTION, FORMS_INIT } from "../constants/forms-constants";
import { TProduct } from "../reducers/products-reducer";
import { callTs, put, selectTs } from "./sagas-functions";
import { FETCH_PRODUCTS, PRODUCTS_INIT } from "../constants/products-constants";
import {
  productsColorSelector,
  productsSizeSelector,
} from "../selectors/products-selectors";

async function getProducts(): Promise<TProduct[]> {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  return data as Promise<TProduct[]>;
}

function* productsWorker() {
  const products = yield* callTs(getProducts);
  yield put({
    type: PRODUCTS_INIT,
    products,
  });

  const colors = yield* selectTs(productsColorSelector);
  const sizes = yield* selectTs(productsSizeSelector);

  yield put({
    type: FORMS_INIT,
    colorsLength: colors.length,
    sizesLength: sizes.length,
  });
}

export function* productsWatcher() {
  yield takeEvery(FETCH_PRODUCTS, productsWorker);
}
