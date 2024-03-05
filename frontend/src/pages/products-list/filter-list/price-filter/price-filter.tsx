import { useState } from "react";
import "./price-filter.scss"
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from "../../../../hooks/redux-hooks";
import { productsPriceFilterSelector, productsPriceSelector } from "../../../../services/selectors/products-selectors";
import { PRODUCTS_PRICE_FILTER_CHANGE } from "../../../../services/constants/products-constants";

export function PriceFilter() {
    const rangeValue = useSelector(productsPriceSelector)
    const value = useSelector(productsPriceFilterSelector)
    const dispatch = useDispatch()
    
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            dispatch({
                type: PRODUCTS_PRICE_FILTER_CHANGE,
                price: newValue
            })
        }
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const maxValue = value[1]
            dispatch({
                type: PRODUCTS_PRICE_FILTER_CHANGE,
                price: [parseInt(event.target.value), maxValue]
            })
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const minValue = value[0]
            dispatch({
                type: PRODUCTS_PRICE_FILTER_CHANGE,
                price: [minValue, parseInt(event.target.value)]
            })
    };

    return (
        <div className="price-filter">
            <h2 className="price-filter__title">Цена</h2>

            <div className="price-filter__container">
                <div className="price">
                    <div className="price__container">
                        <input
                            className="price__value price__min"
                            type="number"
                            value={value[0]}
                            onChange={handleMinPriceChange}
                        />
                        <div className="price__text">₽</div>
                    </div>

                    <div className="price__container">
                        <input
                            className="price__value price__max"
                            type="number"
                            value={value[1]}
                            onChange={handleMaxPriceChange}
                        />
                        <div className="price__text">₽</div>
                    </div>
                </div>

                <Slider
                value={value}
                onChange={handleChange}
                min={rangeValue[0]}
                max={rangeValue[1]}
                step={1}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                sx={{
                    width: '90%',
                    marginLeft: '3%'
                }}
            />
            </div>
        </div>
    )
}