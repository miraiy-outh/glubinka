import { SearchSVG } from "./icon/search-svg";
import "./search.scss"

export function Search() {
    return (
        <div className="search">
            <SearchSVG />
            <input className="search__text" type="text" placeholder="Поиск"></input>
        </div>
    )
}