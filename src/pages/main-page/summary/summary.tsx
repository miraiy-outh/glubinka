import { LogoMainPage } from "../../../components/logo/logo-main-page";
import "./summary.scss"

export function Summary() {
    return (
        <div className="summary">
            <div className="summary__item a">
                <img className="summary__item__img" src="public/images/main_grid.jpg" />
                <div className="shadow shadow__a" />
                <div className="summary__item__info main-logo">
                    <LogoMainPage />
                    <div className="main-logo__text">Бренд, созданный в самых отдалённых уголках страны.</div>
                </div>
            </div>

            <div className="summary__item b">
                <img className="summary__item__img" src="public/images/grid1.jpg" />
                <div className="shadow shadow__b" />
                <div className="summary__item__info">
                    <div className="summary__item__info__header">Эксклюзивный дроп</div>
                    <a className="summary__item__info__details">Узнать больше</a>
                </div>
            </div>

            <div className="summary__item c">
                <img className="summary__item__img" src="public/images/grid2.jpg" />
                <div className="shadow shadow__b" />
                <div className="summary__item__info">
                    <div className="summary__item__info__header">Новые аксессуары</div>
                    <a className="summary__item__info__details">Узнать больше</a>
                </div>
            </div>

            <div className="summary__item d">
                <img className="summary__item__img" src="public/images/grid3.jpg" />
                <div className="shadow shadow__b" />
                <div className="summary__item__info">
                    <div className="summary__item__info__header">Россия и Sci-Fi</div>
                    <a className="summary__item__info__details">Узнать больше</a>
                </div>
            </div>

            <div className="summary__item e">
                <img className="summary__item__img" src="public/images/grid4.jpg" />
                <div className="shadow shadow__b" />
                <div className="summary__item__info">
                    <div className="summary__item__info__header">Back to USSR</div>
                    <a className="summary__item__info__details">Узнать больше</a>
                </div>
            </div>
        </div>
    )
}