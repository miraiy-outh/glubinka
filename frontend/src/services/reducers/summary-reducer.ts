import {
  FETCH_SUMMARY_COLLECTION,
  SUMMARY_INIT,
} from "../constants/summary-constants";

type TSummaryType = "main" | "summary";

export type TSummary = {
  type: TSummaryType;
  className: string;
  imgURL: string;
  header: string;
};

type TSummaryState = { summaries: TSummary[] };

const defaultState: TSummaryState = { summaries: [] };

type TInitAction = {
  type: typeof SUMMARY_INIT;
  summaries: TSummary[];
};

type TFetchSummariesAction = {
  type: typeof FETCH_SUMMARY_COLLECTION;
};

export type TSummaryActions = TInitAction | TFetchSummariesAction;

export function summaryReducer(
  state = defaultState,
  action: TSummaryActions
): TSummaryState {
  switch (action.type) {
    case SUMMARY_INIT: {
      return {
        ...state,
        summaries: action.summaries,
      };
    }

    default: {
      return state;
    }
  }
}
