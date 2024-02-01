import "./details-filter.scss"
import { Details } from "./details/details"

export function DetailsFilter() {
    const detailsValues = [
        {
            name: "Материал",
            values: ["Хлопок", "Шёлк", "Шерсть"]
        },

        {
            name: "Рисунок",
            values: ["Принт", "Шелкография", "Вышивка"]
        },

        {
            name: "Цвет",
            values: ["Белый", "Черный", "Синий"]
        },
    ]
    return (
        <div className="details-filter">
            {detailsValues.map((details, i) => (
                <Details
                    name={details.name}
                    values={details.values}
                    index={i}
                />
            ))}
        </div>
    )
}