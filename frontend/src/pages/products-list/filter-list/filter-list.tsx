import { useDispatch, useSelector } from "../../../hooks/redux-hooks"
import { PRODUCTS_COLOR_FILTER_CHANGE, PRODUCTS_PRICE_FILTER_CHANGE, PRODUCTS_SIZE_FILTER_CHANGE } from "../../../services/constants/products-constants"
import { productsPriceSelector } from "../../../services/selectors/products-selectors"
import { DetailsFilter } from "./details-filter/details-filter"
import "./filter-list.scss"
import { PriceFilter } from "./price-filter/price-filter"

export function FilterList() {
    const dispatch = useDispatch()
    const priceRange = useSelector(productsPriceSelector)
    const handleFilterReset = () => {
        dispatch({
            type: PRODUCTS_PRICE_FILTER_CHANGE,
            price: priceRange
        })

        dispatch({
            type: PRODUCTS_COLOR_FILTER_CHANGE,
            colors: []
        })

        dispatch({
            type: PRODUCTS_SIZE_FILTER_CHANGE,
            sizes: []
        })
    }

    return (
        <div className="filter-list">
            <div className="filter-list__header">
                <h1 className="filter-list__header__title">Фильтры</h1>
                <button className="filter-list__header__reset" onClick={handleFilterReset}>Сбросить</button>
            </div>

            <PriceFilter />
            <DetailsFilter />
        </div>
    )
}