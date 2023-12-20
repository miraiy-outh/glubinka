import { Collection } from "../../../components/collection/collection"
import "./collections.scss"
import { mockCollectionInfo } from "../../../mocks/mocks-data"

export function Collections() {
    return (
        <div className="collections">
            <div className="collections__header">Коллекции</div>
            <div className="collections__items">
                {mockCollectionInfo.map((collection) => (
                    <Collection
                        imgURL={collection.imgURL}
                        header={collection.header}
                        title={collection.title}
                    />
                ))}
            </div>
        </div>
    )
}