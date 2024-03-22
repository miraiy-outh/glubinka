import { PRODUCTS_CHANGE, PRODUCTS_COLOR_CHANGE, PRODUCTS_COLOR_FILTER_CHANGE, PRODUCTS_INIT, PRODUCTS_LOADING_CHANGE, PRODUCTS_PAGE_CHANGE, PRODUCTS_PRICE_CHANGE, PRODUCTS_PRICE_FILTER_CHANGE, PRODUCTS_SIZE_CHANGE, PRODUCTS_SIZE_FILTER_CHANGE } from "../constants/products-constants"

type TSizeValue = 'S' | 'M' | 'L' | 'XL' | 'ONE'
type TSize = {
    size: TSizeValue,
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
    sizes: TSize[],
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
    sizes: TSizeValue[],
    colors: string[]
}

type TFilter = {
    priceFilter: number[],
    sizeFilter: string[],
    colorFilter: string[]
}

type TProductsState = {
    products: TProduct[],
    filteredProducts: TProduct[],
    filterValues: TFilterValues,
    filter: TFilter,
    isLoading: boolean,
    pageNumber: number
}

type TProductsInitAction = {
    type: typeof PRODUCTS_INIT,
    products: TProduct[],
}

type TProductsChangeAction = {
    type: typeof PRODUCTS_CHANGE,
}

type TProductsPriceFilterChangeAction = {
    type: typeof PRODUCTS_PRICE_FILTER_CHANGE,
    price: number[]
}

type TProductsSizeFilterChangeAction = {
    type: typeof PRODUCTS_SIZE_FILTER_CHANGE,
    sizes: string[]
}

type TProductsColorFilterChangeAction = {
    type: typeof PRODUCTS_COLOR_FILTER_CHANGE,
    colors: string[]
}

type TProductsPriceChangeAction = {
    type: typeof PRODUCTS_PRICE_CHANGE,
    prices: number[]
}

type TProductsSizeChangeAction = {
    type: typeof PRODUCTS_SIZE_CHANGE,
    sizes: TSizeValue[]
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

type TProductsActions = TProductsInitAction | TProductsChangeAction | TProductsPriceFilterChangeAction | TProductsSizeFilterChangeAction | TProductsColorFilterChangeAction | TProductsPriceChangeAction | TProductsSizeChangeAction | TProductsColorChangeAction | TProductsPageChangeAction | TProductsLoadingChangeAction

const defaultState : TProductsState = {
    products: [],
    filteredProducts: [],
    filterValues: {
        prices: [0, 100],
        sizes: ['S' , 'M' , 'L' , 'XL' , 'ONE'],
        colors: []
    },
    filter: {
        priceFilter: [0, 100],
        sizeFilter: [],
        colorFilter: []
    },
    isLoading: true,
    pageNumber: 1
}

export function productsReducer(state = defaultState, action: TProductsActions): TProductsState {
    switch (action.type) {
        case PRODUCTS_INIT: {
            const products = action.products
            const colors = products.map(product => product.colors.map(color => color.title)).reduce((acc, curr) => acc.concat(curr), [])
            const uniqueColors = colors.filter((color, index) => colors.indexOf(color) === index).sort((a, b) => a.localeCompare(b))
            const prices = products.map(product => product.price)
            const minPrice = Math.min(...prices);
            const maxPrice = Math.max(...prices);
            return {
                ...state,
                products,
                filteredProducts: products,
                isLoading: false,
                filterValues: {
                    ...state.filterValues,
                    colors: uniqueColors,
                    prices: [minPrice, maxPrice]
                },
                filter: {
                    ...state.filter,
                    priceFilter: [minPrice, maxPrice]
                }
            }
        }

        case PRODUCTS_CHANGE: {
            let filteredProducts = state.products.filter((product) => product.price >= state.filter.priceFilter[0] && product.price <= state.filter.priceFilter[1])

            if (state.filter.colorFilter.length !== 0) {
                filteredProducts = filteredProducts.filter((product) => product.colors.some(color => state.filter.colorFilter.includes(color.title)))
            }

            if (state.filter.sizeFilter.length !== 0) {
                filteredProducts = filteredProducts.filter((product) => product.sizes.some(size => state.filter.sizeFilter.includes(size.size) && size.isExist))
            }
            return {
                ...state,
                filteredProducts
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

        case PRODUCTS_SIZE_CHANGE: {
            return {
                ...state, 
                filterValues: {
                    ...state.filterValues,
                    sizes: action.sizes
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

        case PRODUCTS_SIZE_FILTER_CHANGE: {
            return {
                ...state,
                filter: {
                    ...state.filter,
                    sizeFilter: action.sizes
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