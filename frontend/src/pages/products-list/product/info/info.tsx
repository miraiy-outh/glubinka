import "./info.scss"

export function Info({ title, price }: { title: string, price: number }) {
    return (
        <div className="info">
            <div className="info__name">{title}</div>
            <div className="info__price">{price} ₽</div>
        </div>
    )
}