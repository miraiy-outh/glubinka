import { RootState } from "../store";

export function formsColorsSelector(state: RootState) {
    return state.formsData.colors
}

export function formsSizesSelector(state: RootState) {
    return state.formsData.sizes
}