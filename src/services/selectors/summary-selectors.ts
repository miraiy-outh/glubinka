import { RootState } from "../store";

export function summariesSelector(state: RootState) {
  return state.summariesData.summaries;
}
