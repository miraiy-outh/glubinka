import { Logo } from "../logo/logo";
import "./header.scss"
import { Icons } from "./icons/icons";
import { Search } from "./search/search";

export function Header() {
    return (
        <div className="header">

            <div className="header__container">
                <div className="header__container__subcontainer">
                    <Logo />
                    <Search />
                </div>

                <Icons />
            </div>


        </div>
    )
}