import {
  PreloadedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TProductsActions, productsReducer } from "./reducers/products-reducer";
import { TFormsActions, formsReducer } from "./reducers/forms-reducer";
import { fork } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import { productsWatcher } from "./sagas/products-saga";
import { TSummaryActions, summaryReducer } from "./reducers/summary-reducer";
import { mainPageWatcher } from "./sagas/main-page-saga";
import {
  TCollectionActions,
  collectionReducer,
} from "./reducers/collections-reducer";

const rootReducer = combineReducers({
  productsData: productsReducer,
  formsData: formsReducer,
  summariesData: summaryReducer,
  collectionsData: collectionReducer,
});

function* rootSaga() {
  yield fork(productsWatcher);
  yield fork(mainPageWatcher);
}

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
export type ApplicationActions =
  | TProductsActions
  | TFormsActions
  | TSummaryActions
  | TCollectionActions;
