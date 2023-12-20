import './collection.scss'

type TCollectionProps = {
    imgURL: string,
    header: string,
    title: string
}
export function Collection({ imgURL, header, title }: TCollectionProps) {
    return (
        <div className="collection">
            <img className="collection__img" src={imgURL} />
            <div className="shadow shadow__c" />
            <div className="collection__info">
                <div className="collection__info__header">{header}</div>
                <div className="collection__info__details">{title}</div>
            </div>
        </div>
    )
}