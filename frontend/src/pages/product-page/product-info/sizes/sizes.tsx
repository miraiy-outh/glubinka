import { TSizeValue } from "../../../../mocks/mocks-data";
import "./sizes.scss"

export function Sizes({ sizes }: { sizes: TSizeValue[] }) {
    return (
        <div className="sizes">
            <div className="sizes__title">Доступные размеры</div>
            <div className="sizes__container">
                {
                    sizes.map((size, key) => (
                        <div key={key} className={size.isExist ? "sizes__container__subcontainer" : "sizes__container__subcontainer not-exist"}>
                            <div className={size.isExist ? "size" : "size not-exist"}>{size.size}</div>
                        </div>
                    ))}
            </div>
            <button className="sizes__help">Помощь с размером</button>
        </div>
    )
}