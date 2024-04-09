import { RootState } from "../store";

export function productsSelector(state: RootState) {
  return state.productsData.filteredProducts;
}

export function productsFilterSelector(state: RootState) {
  return state.productsData.filter;
}

export function productsPriceFilterSelector(state: RootState) {
  return state.productsData.filter.priceFilter;
}

export function productsSizeFilterSelector(state: RootState) {
  return state.productsData.filter.sizeFilter;
}

export function productsColorFilterSelector(state: RootState) {
  return state.productsData.filter.colorFilter;
}

export function productsPriceSelector(state: RootState) {
  return state.productsData.filterValues.prices;
}

export function productsSizeSelector(state: RootState) {
  return state.productsData.filterValues.sizes;
}

export function productsColorSelector(state: RootState) {
  return state.productsData.filterValues.colors;
}

export function productsIsLoadingSelector(state: RootState) {
  return state.productsData.isLoading;
}

export function productsPageNumberSelector(state: RootState) {
  return state.productsData.pageNumber;
}

export function pageCountSelector(state: RootState) {
  return state.productsData.pageCount;
}

export function productsCurrentCollectionSelector(state: RootState) {
  return state.productsData.currentCollection;
}

export function productSelector(id: number) {
  return (state: RootState) => {
    return state.productsData.products.find(
      (product) => product.productId === id
    );
  };
}

export function isInFavoriteSelector(id: number) {
  return (state: RootState) => {
    const product = state.productsData.products.find(
      (product) => product.productId === id
    );
    return product ? product.isInFavorite : false;
  };
}

export function isInCartSelector(id: number) {
  return (state: RootState) => {
    const product = state.productsData.products.find(
      (product) => product.productId === id
    );
    return product ? product.isInCart : false;
  };
}
