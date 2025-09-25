import { RootState } from "../store";

export function collectionsSelector(state: RootState) {
  return state.collectionsData.collections;
}

export function collectionNameSelector(id: number) {
  return (state: RootState) => {
    const collection = state.collectionsData.collections.find(
      (collection) => collection.collectionId === id
    );
    return collection ? collection.header : null;
  };
}
