import { LogoMainPage } from '../logo/logo-main-page'
import './summary-item.scss'

type TSummaryType = 'main' | 'summary'

type TSummaryProps = {
    type: TSummaryType,
    className: string,
    imgURL: string,
    header: string
}

export function SummaryItem({ type, className, imgURL, header }: TSummaryProps) {
    if (type === 'main') {
        return (
            <div className={`summary__item ${className}`}>
                <img className="summary__item__img" src={imgURL} />
                <div className="shadow shadow__a" />
                <div className="summary__item__info main-logo">
                    <LogoMainPage />
                    <div className="main-logo__text">{header}</div>
                </div>
            </div>
        )
    }

    return (
        <div className={`summary__item ${className}`}>
            <img className="summary__item__img" src={imgURL} />
            <div className="shadow shadow__b" />
            <div className="summary__item__info">
                <div className="summary__item__info__header">{header}</div>
                <a className="summary__item__info__details">Узнать больше</a>
            </div>
        </div>
    )

}