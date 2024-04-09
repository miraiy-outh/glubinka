import { paginationProducts, pagesCount } from "../../utils/pagination";
import {
  ADD_TO_CART,
  ADD_TO_FAVORITE,
  FETCH_PRODUCTS,
  PRODUCTS_CHANGE,
  PRODUCTS_COLLECTION_CHANGE,
  PRODUCTS_COLLECTION_FILTER_CHANGE,
  PRODUCTS_COLOR_CHANGE,
  PRODUCTS_COLOR_FILTER_CHANGE,
  PRODUCTS_INIT,
  PRODUCTS_LOADING_CHANGE,
  PRODUCTS_PAGE_CHANGE,
  PRODUCTS_PRICE_CHANGE,
  PRODUCTS_PRICE_FILTER_CHANGE,
  PRODUCTS_SIZE_CHANGE,
  PRODUCTS_SIZE_FILTER_CHANGE,
} from "../constants/products-constants";

type TSizeValue = "S" | "M" | "L" | "XL" | "ONE";

export type TSize = {
  size: TSizeValue;
  isExist: boolean;
};
export type TColorValue = {
  title: string;
  hex: string;
  isExist: boolean;
};
export type TDetailInfo = {
  title: string;
  value: string;
};

type TProductType = {
  id: number;
  title: string;
};

type TCollection = {
  id: number;
  title: string;
};

export type TProduct = {
  productId: number;
  name: string;
  price: number;
  sizes: TSize[];
  colors: TColorValue[];
  images: string[];
  description: string;
  details: TDetailInfo[];
  isInFavorite: boolean;
  isInCart: boolean;
  collection: TCollection;
  type: TProductType;
};

type TFilterValues = {
  prices: number[];
  sizes: TSizeValue[];
  colors: string[];
};

type TFilter = {
  priceFilter: number[];
  sizeFilter: string[];
  colorFilter: string[];
  collectionFilter: number | null;
};

type TProductsState = {
  products: TProduct[];
  filteredProducts: TProduct[];
  filterValues: TFilterValues;
  filter: TFilter;
  currentCollection: string | null;
  isLoading: boolean;
  pageNumber: number;
  pageCount: number;
};

type TProductsInitAction = {
  type: typeof PRODUCTS_INIT;
  products: TProduct[];
};

type TProductsChangeAction = {
  type: typeof PRODUCTS_CHANGE;
};

type TProductsPriceFilterChangeAction = {
  type: typeof PRODUCTS_PRICE_FILTER_CHANGE;
  price: number[];
};

type TProductsSizeFilterChangeAction = {
  type: typeof PRODUCTS_SIZE_FILTER_CHANGE;
  sizes: string[];
};

type TProductsColorFilterChangeAction = {
  type: typeof PRODUCTS_COLOR_FILTER_CHANGE;
  colors: string[];
};

type TProductsCollectionFilterChangeAction = {
  type: typeof PRODUCTS_COLLECTION_FILTER_CHANGE;
  collection: number | null;
};

type TProductsPriceChangeAction = {
  type: typeof PRODUCTS_PRICE_CHANGE;
  prices: number[];
};

type TProductsSizeChangeAction = {
  type: typeof PRODUCTS_SIZE_CHANGE;
  sizes: TSizeValue[];
};

type TProductsColorChangeAction = {
  type: typeof PRODUCTS_COLOR_CHANGE;
  colors: string[];
};

type TProductsCollectionChange = {
  type: typeof PRODUCTS_COLLECTION_CHANGE;
  collection: string | null;
};

type TProductsPageChangeAction = {
  type: typeof PRODUCTS_PAGE_CHANGE;
  page: number;
};

type TProductsLoadingChangeAction = {
  type: typeof PRODUCTS_LOADING_CHANGE;
  isLoading: boolean;
};

type TAddToFavoriteAction = {
  type: typeof ADD_TO_FAVORITE;
  productId: number;
};

type TAddToCartAction = {
  type: typeof ADD_TO_CART;
  productId: number;
};

type TFetchProductsAction = {
  type: typeof FETCH_PRODUCTS;
};

export type TProductsActions =
  | TProductsInitAction
  | TProductsChangeAction
  | TProductsPriceFilterChangeAction
  | TProductsSizeFilterChangeAction
  | TProductsColorFilterChangeAction
  | TProductsCollectionFilterChangeAction
  | TProductsPriceChangeAction
  | TProductsSizeChangeAction
  | TProductsColorChangeAction
  | TProductsCollectionChange
  | TProductsPageChangeAction
  | TProductsLoadingChangeAction
  | TFetchProductsAction
  | TAddToFavoriteAction
  | TAddToCartAction
  | TFetchProductsAction;

const defaultState: TProductsState = {
  products: [],
  filteredProducts: [],
  filterValues: {
    prices: [0, 100],
    sizes: [],
    colors: [],
  },
  filter: {
    priceFilter: [0, 100],
    sizeFilter: [],
    colorFilter: [],
    collectionFilter: null,
  },
  currentCollection: null,
  isLoading: true,
  pageNumber: 1,
  pageCount: 1,
};

export function productsReducer(
  state = defaultState,
  action: TProductsActions
): TProductsState {
  switch (action.type) {
    case PRODUCTS_INIT: {
      const products = action.products;
      const pageCount = pagesCount(action.products.length);
      const colors = products
        .map((product) => product.colors.map((color) => color.title))
        .reduce((acc, curr) => acc.concat(curr), []);
      const uniqueColors = colors
        .filter((color, index) => colors.indexOf(color) === index)
        .sort((a, b) => a.localeCompare(b));
      const sizes = products
        .map((product) => product.sizes.map((size) => size.size))
        .reduce((acc, curr) => acc.concat(curr), []);
      const uniqueSizes = sizes.filter(
        (size, index) => sizes.indexOf(size) === index
      );
      const prices = products.map((product) => product.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      let filteredProducts = paginationProducts(
        state.pageNumber,
        action.products
      );

      return {
        ...state,
        products,
        pageCount,
        filteredProducts,
        isLoading: false,
        filterValues: {
          ...state.filterValues,
          colors: uniqueColors,
          sizes: uniqueSizes,
          prices: [minPrice, maxPrice],
        },
        filter: {
          ...state.filter,
          priceFilter: [minPrice, maxPrice],
        },
      };
    }

    case PRODUCTS_CHANGE: {
      let filteredProducts = state.products.filter(
        (product) =>
          product.price >= state.filter.priceFilter[0] &&
          product.price <= state.filter.priceFilter[1]
      );

      if (state.filter.colorFilter.length !== 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.colors.some((color) =>
            state.filter.colorFilter.includes(color.title)
          )
        );
      }

      if (state.filter.collectionFilter !== null) {
        filteredProducts = filteredProducts.filter(
          (product) => product.collection.id === state.filter.collectionFilter
        );
      }

      if (state.filter.sizeFilter.length !== 0) {
        filteredProducts = filteredProducts.filter((product) =>
          product.sizes.some(
            (size) =>
              state.filter.sizeFilter.includes(size.size) && size.isExist
          )
        );
      }

      const pageCount = pagesCount(filteredProducts.length);

      let newFilteredProducts = paginationProducts(
        state.pageNumber,
        filteredProducts
      );
      return {
        ...state,
        pageCount,
        filteredProducts: newFilteredProducts,
      };
    }

    case PRODUCTS_PRICE_CHANGE: {
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          prices: action.prices,
        },
      };
    }

    case PRODUCTS_SIZE_CHANGE: {
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          sizes: action.sizes,
        },
      };
    }

    case PRODUCTS_COLOR_CHANGE: {
      return {
        ...state,
        filterValues: {
          ...state.filterValues,
          colors: action.colors,
        },
      };
    }

    case PRODUCTS_PRICE_FILTER_CHANGE: {
      return {
        ...state,
        pageNumber: 1,
        filter: {
          ...state.filter,
          priceFilter: action.price,
        },
      };
    }

    case PRODUCTS_SIZE_FILTER_CHANGE: {
      return {
        ...state,
        pageNumber: 1,
        filter: {
          ...state.filter,
          sizeFilter: action.sizes,
        },
      };
    }

    case PRODUCTS_COLOR_FILTER_CHANGE: {
      return {
        ...state,
        pageNumber: 1,
        filter: {
          ...state.filter,
          colorFilter: action.colors,
        },
      };
    }

    case PRODUCTS_COLLECTION_FILTER_CHANGE: {
      return {
        ...state,
        pageNumber: 1,
        filter: {
          ...state.filter,
          collectionFilter: action.collection,
        },
      };
    }

    case PRODUCTS_COLLECTION_CHANGE: {
      return {
        ...state,
        currentCollection: action.collection,
      };
    }

    case PRODUCTS_PAGE_CHANGE: {
      return {
        ...state,
        pageNumber: action.page,
      };
    }

    case PRODUCTS_LOADING_CHANGE: {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }

    case ADD_TO_FAVORITE: {
      const newProducts = state.products.map((product) => {
        if (product.productId === action.productId) {
          return {
            ...product,
            isInFavorite: !product.isInFavorite,
          };
        }
        return product;
      });

      return {
        ...state,
        products: newProducts,
      };
    }

    case ADD_TO_CART: {
      const newProducts = state.products.map((product) => {
        if (product.productId === action.productId) {
          return {
            ...product,
            isInCart: !product.isInCart,
          };
        }
        return product;
      });

      return {
        ...state,
        products: newProducts,
      };
    }

    default:
      return state;
  }
}
