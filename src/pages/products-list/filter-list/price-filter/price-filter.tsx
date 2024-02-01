import "./price-filter.scss"

export function PriceFilter() {
    return (
        <div className="price-filter">
            <h2 className="price-filter__title">Цена</h2>

            <div className="price-filter__container">
                <div className="price">
                    <div className="price__container">
                        <input
                            className="price__value price__min"
                            type="number"
                            placeholder="2000"
                        />
                        <div className="price__text">₽</div>
                    </div>

                    <div className="price__container">
                        <input
                            className="price__value price__max"
                            type="number"
                            placeholder="10000"
                        />
                        <div className="price__text">₽</div>
                    </div>
                </div>

                <div className="price-filter__slider">
                    <div className="price-filter__slider__rail" />
                    <div className="price-filter__slider__process" />
                    <div className="price-filter__slider__dot price-filter__slider__dot__min" />
                    <div className="price-filter__slider__dot price-filter__slider__dot__max" />
                </div>
            </div>
        </div>
    )
}