import {
  FORMS_COLORS_CHANGE,
  FORMS_SIZES_CHANGE,
  FORMS_INIT,
  FORMS_RESET,
} from "../constants/forms-constants";

type TFormsState = {
  sizes: boolean[];
  colors: boolean[];
};

type TFormsInitAction = {
  type: typeof FORMS_INIT;
  sizesLength: number;
  colorsLength: number;
};

type TFormsColorsChangeAction = {
  type: typeof FORMS_COLORS_CHANGE;
  formId: number;
};

type TFormsSizesChangeAction = {
  type: typeof FORMS_SIZES_CHANGE;
  formId: number;
};

type TFormsResetAction = {
  type: typeof FORMS_RESET;
};

export type TFormsActions =
  | TFormsInitAction
  | TFormsColorsChangeAction
  | TFormsSizesChangeAction
  | TFormsResetAction;

const defaultState: TFormsState = {
  sizes: [],
  colors: [],
};

export function formsReducer(
  state = defaultState,
  action: TFormsActions
): TFormsState {
  switch (action.type) {
    case FORMS_INIT: {
      const newColors = new Array(action.colorsLength).fill(false);
      const newSizes = new Array(action.sizesLength).fill(false);
      return {
        ...state,
        sizes: newColors,
        colors: newSizes,
      };
    }

    case FORMS_COLORS_CHANGE: {
      const newColors = [...state.colors];
      newColors[action.formId] = !newColors[action.formId];
      return {
        ...state,
        colors: newColors,
      };
    }

    case FORMS_SIZES_CHANGE: {
      const newSizes = [...state.sizes];
      newSizes[action.formId] = !newSizes[action.formId];
      return {
        ...state,
        sizes: newSizes,
      };
    }

    case FORMS_RESET: {
      const newColors = new Array(state.colors.length).fill(false);
      const newSizes = new Array(state.sizes.length).fill(false);
      return {
        ...state,
        sizes: newColors,
        colors: newSizes,
      };
    }

    default:
      return state;
  }
}
