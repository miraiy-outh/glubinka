import { RootState } from "../store";

export function collectionsSelector(state: RootState) {
  return state.collectionsData.collections;
}
