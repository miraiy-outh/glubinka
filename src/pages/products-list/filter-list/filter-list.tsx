import { DetailsFilter } from "./details-filter/details-filter"
import "./filter-list.scss"
import { PriceFilter } from "./price-filter/price-filter"

export function FilterList() {
    return (
        <div className="filter-list">
            <div className="filter-list__header">
                <h1 className="filter-list__header__title">Фильтры</h1>
                <button className="filter-list__header__reset">Сбросить</button>
            </div>

            <PriceFilter />
            <DetailsFilter />
        </div>
    )
}