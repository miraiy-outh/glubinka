import { useDispatch} from "../../../../../hooks/redux-hooks";
import "./details.scss"

export function Details({ name, values, index }: { name: string, values: string[], index: string }) {
    const dispatch = useDispatch()

    const handleChange = (value: string) => {
        console.log(value)
    }

    return (
        <div className="details">
            <h3 className="details__title">{name}</h3>
            {values.map((value, i) => (
                <div key={i} className="details__container">
                    <input
                        className="details__checkbox"
                        type="checkbox"
                        name={`${index}${i + 1}`}
                        id={`${index}${i + 1}`}
                        onChange={() => handleChange(value)}
                    />
                    <label
                        className="details__label"
                        htmlFor={`${index}${i + 1}`}
                    ></label>
                    <div className="details__value">{value}</div>
                </div>

            ))}
        </div>
    )
}