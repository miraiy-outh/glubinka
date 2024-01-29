import "./carusel.scss"
import { Slider } from "./slider/slider"

export function Carusel({ imagesSrc }: { imagesSrc: string[] }) {
    return (
        <div className="carusel">
            <div className="images">
                <img className="image" src={imagesSrc[0]} />
                <Slider />
            </div>

        </div>
    )
}