import { COLLECTION_INIT } from "../constants/collections-constants";

export type TCollection = {
  id: number;
  imgURL: string;
  header: string;
  title: string;
};

type TCollectionState = { collections: TCollection[] };

const defaultState: TCollectionState = { collections: [] };

type TInitAction = {
  type: typeof COLLECTION_INIT;
  collections: TCollection[];
};

export type TCollectionActions = TInitAction;

export function collectionReducer(
  state = defaultState,
  action: TCollectionActions
): TCollectionState {
  switch (action.type) {
    case COLLECTION_INIT: {
      return {
        ...state,
        collections: action.collections,
      };
    }

    default: {
      return state;
    }
  }
}
