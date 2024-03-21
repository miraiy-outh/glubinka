import { useSelector } from "../../../../hooks/redux-hooks"
import { productsColorFilterSelector, productsColorSelector, productsSizeFilterSelector, productsSizeSelector } from "../../../../services/selectors/products-selectors"
import "./details-filter.scss"
import { Details } from "./details/details"

export function DetailsFilter() {
    const sizes = useSelector(productsSizeSelector)
    const colors = useSelector(productsColorSelector)
    const sizeValues = useSelector(productsSizeFilterSelector)
    const colorValues = useSelector(productsColorFilterSelector)
    return (
        <div className="details-filter">
                <Details
                    key={'sizes'}
                    name={'Размер'}
                    values={sizes}
                    index={'size'}
                />

                <Details
                    key={'colors'}
                    name={'Цвет'}
                    values={colors}
                    index={'color'}
                />
        </div>
        
    )
}