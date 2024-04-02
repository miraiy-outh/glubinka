import { Collection } from "../../../components/collection/collection";
import "./collections.scss";
import { collectionsSelector } from "../../../services/selectors/collections-selector";
import { useSelector } from "../../../hooks/redux-hooks";

export function Collections() {
  const collections = useSelector(collectionsSelector);
  return (
    <div className="collections">
      <div className="collections__header">Коллекции</div>
      <div className="collections__items">
        {collections.map((collection, key) => (
          <Collection
            key={key}
            imgURL={collection.imgURL}
            header={collection.header}
            title={collection.title}
          />
        ))}
      </div>
    </div>
  );
}
