import { Logo } from "../../logo/logo";
import "./logo-info.scss"

export function LogoInfo() {
    return (
        <div className="logo">
            <Logo />
            <div className="logo__text">Глубинка — бренд, созданный в самых отдалённых уголках страны.</div>
        </div>

    )
}