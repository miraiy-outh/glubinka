import { useSelector } from "../../../../hooks/redux-hooks"
import { productsColorFilterSelector, productsColorSelector, productsMaterialFilterSelector, productsMaterialSelector } from "../../../../services/selectors/products-selectors"
import "./details-filter.scss"
import { Details } from "./details/details"

export function DetailsFilter() {
    const materials = useSelector(productsMaterialSelector)
    const colors = useSelector(productsColorSelector)
    const materialValues = useSelector(productsMaterialFilterSelector)
    const colorValues = useSelector(productsColorFilterSelector)
    return (
        <div className="details-filter">
                <Details
                    key={'materials'}
                    name={'Материал'}
                    values={materials}
                    index={'material'}
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