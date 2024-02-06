import { TDetailInfo } from "../../../../../mocks/mocks-data"
import "./product-details.scss"

export function ProductDetails({ details }: { details: TDetailInfo[] }) {
    return (
        <div className="product-details">
            <div className="product-details__container">
                {
                    details.map((detail) => (
                        <div className="product-details__detail">{detail.title}:</div>
                    ))
                }
            </div>

            <div className="product-details__container">
                {
                    details.map((detail) => (
                        <div className="product-details__detail">{detail.value}</div>
                    ))
                }
            </div>
        </div>
    )
}