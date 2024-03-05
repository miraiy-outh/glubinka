import { PRODUCTS_COLOR_CHANGE, PRODUCTS_COLOR_FILTER_CHANGE, PRODUCTS_INIT, PRODUCTS_LOADING_CHANGE, PRODUCTS_MATERIAL_CHANGE, PRODUCTS_MATERIAL_FILTER_CHANGE, PRODUCTS_PAGE_CHANGE, PRODUCTS_PRICE_CHANGE, PRODUCTS_PRICE_FILTER_CHANGE } from "../constants/products-constants"

type TSizeValue = {
    size: 'S' | 'M' | 'L' | 'XL' | 'ONE',
    isExist: boolean
}
type TColorValue = {
    title: string,
    hex: string,
    isExist: boolean
}
type TDetailInfo = {
    title: string,
    value: string
}

type TProductType = {
    id: number,
    title: string
}

type TCollection = {
    id: number,
    title: string
}

type TProduct = {
    id: number,
    name: string,
    price: number,
    sizes: TSizeValue[],
    colors: TColorValue[],
    material: string,
    images: string[],
    description: string,
    details: TDetailInfo[],
    isInFavorite: boolean,
    isInCart: boolean,
    collection: TCollection,
    type: TProductType
}

type TFilterValues = {
    prices: number[],
    materials: string[],
    colors: string[]
}

type TFilter = {
    priceFilter: number[],
    materialFilter: string[],
    colorFilter: string[]
}

type TProductsState = {
    products: TProduct[],
    filterValues: TFilterValues,
    filter: TFilter,
    isLoading: boolean,
    pageNumber: number
}

type TProductsInitAction = {
    type: typeof PRODUCTS_INIT,
    products: TProduct[],
}

type TProductsPriceFilterChangeAction = {
    type: typeof PRODUCTS_PRICE_FILTER_CHANGE,
    price: number[]
}

type TProductsMaterialFilterChangeAction = {
    type: typeof PRODUCTS_MATERIAL_FILTER_CHANGE,
    materials: string[]
}

type TProductsColorFilterChangeAction = {
    type: typeof PRODUCTS_COLOR_FILTER_CHANGE,
    colors: string[]
}

type TProductsPriceChangeAction = {
    type: typeof PRODUCTS_PRICE_CHANGE,
    prices: number[]
}

type TProductsMaterialChangeAction = {
    type: typeof PRODUCTS_MATERIAL_CHANGE,
    materials: string[]
}

type TProductsColorChangeAction = {
    type: typeof PRODUCTS_COLOR_CHANGE,
    colors: string[]
}

type TProductsPageChangeAction = {
    type: typeof PRODUCTS_PAGE_CHANGE,
    page: number
}

type TProductsLoadingChangeAction = {
    type: typeof PRODUCTS_LOADING_CHANGE,
    isLoading: boolean
}

type TProductsActions = TProductsInitAction | TProductsPriceFilterChangeAction | TProductsMaterialFilterChangeAction | TProductsColorFilterChangeAction | TProductsPriceChangeAction | TProductsMaterialChangeAction | TProductsColorChangeAction | TProductsPageChangeAction | TProductsLoadingChangeAction

const defaultState : TProductsState = {
    products: [],
    filterValues: {
        prices: [0, 100],
        materials: ['Хлопок', 'Шёлк', 'Шерсть'],
        colors: ['Белый', 'Чёрный', 'Синий']
    },
    filter: {
        priceFilter: [0, 100],
        materialFilter: [],
        colorFilter: []
    },
    isLoading: true,
    pageNumber: 1
}

export function productsReducer(state = defaultState, action: TProductsActions): TProductsState {
    switch (action.type) {
        case PRODUCTS_INIT: {
            return {
                ...state,
                products: action.products,
                isLoading: false
            }
        }

        case PRODUCTS_PRICE_CHANGE: {
            return {
                ...state, 
                filterValues: {
                    ...state.filterValues,
                    prices: action.prices
                }
            }
        }

        case PRODUCTS_MATERIAL_CHANGE: {
            return {
                ...state, 
                filterValues: {
                    ...state.filterValues,
                    materials: action.materials
                }
            }
        }

        case PRODUCTS_COLOR_CHANGE: {
            return {
                ...state, 
                filterValues: {
                    ...state.filterValues,
                    colors: action.colors
                }
            }
        }

        case PRODUCTS_PRICE_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    priceFilter: action.price
                }
            }
        }

        case PRODUCTS_MATERIAL_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    materialFilter: action.materials
                }
            }
        }

        case PRODUCTS_COLOR_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    colorFilter: action.colors
                }
            }
        }

        case PRODUCTS_PAGE_CHANGE: {
            return {
                ...state, pageNumber: action.page
            }
        }

        case PRODUCTS_LOADING_CHANGE: {
            return {
                ...state, isLoading: action.isLoading
            }
        }

        default:
            return state
    }
}