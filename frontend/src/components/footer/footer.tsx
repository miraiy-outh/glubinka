import { About } from "./about/about";
import { LogoInfo } from "./logo-info/logo-info";
import "./footer.scss"
import { Copyright } from "./copyright/copyright";

export function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container__subcontainer">
                    <LogoInfo />
                    <About />
                </div>

                <Copyright />
            </div>

        </div>


    )
}