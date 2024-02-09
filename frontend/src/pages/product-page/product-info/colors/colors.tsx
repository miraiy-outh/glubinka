import { TColorValue } from "../../../../mocks/mocks-data";
import "./colors.scss"

export function Colors({ colors }: { colors: TColorValue[] }) {
    return (
        <div className="colors">
            <div className="colors__title">Цвета</div>
            <div className="colors__container">
                {
                    colors.map((color, key) => (
                        <div
                            key={key}
                            className="colors__container__subcontainer"
                            style={{
                                backgroundColor: `${color.hex}`
                            }}
                        >
                            <div className="color">{color.title === "Белый" ? color.title : ""}</div>
                        </div>
                    ))}
            </div>
        </div>
    )
}