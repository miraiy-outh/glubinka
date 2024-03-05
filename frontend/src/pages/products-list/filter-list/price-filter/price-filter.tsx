import { useState } from "react";
import "./price-filter.scss"
import Slider from '@mui/material/Slider';

export function PriceFilter() {
    const [value, setValue] = useState<number[]>([0, 100]);
    
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (Array.isArray(newValue)) {
            setValue(newValue);
        }
    };

    const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => {
            const maxValue = prev[1]
            return [parseInt(event.target.value), maxValue]
        })
    };

    const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((prev) => {
            const minValue = prev[0]
            return [minValue, parseInt(event.target.value)]
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
                min={0}
                max={100}
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