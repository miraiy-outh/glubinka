import { RootState } from "../store";

export function productsSelector(state: RootState) {
    return state.productsData.products
}

export function productsFilterSelector(state: RootState) {
    return state.productsData.filter
}

export function productsPriceFilterSelector(state: RootState) {
    return state.productsData.filter.priceFilter
}

export function productsMaterialFilterSelector(state: RootState) {
    return state.productsData.filter.materialFilter
}

export function productsColorFilterSelector(state: RootState) {
    return state.productsData.filter.colorFilter
}

export function productsPriceSelector(state: RootState) {
    return state.productsData.filterValues.prices
}

export function productsMaterialSelector(state: RootState) {
    return state.productsData.filterValues.materials
}

export function productsColorSelector(state: RootState) {
    return state.productsData.filterValues.colors
}

export function productsIsLoadingSelector(state: RootState) {
    return state.productsData.isLoading
}

export function productsPageNumberSelector(state: RootState) {
    return state.productsData.pageNumber
}