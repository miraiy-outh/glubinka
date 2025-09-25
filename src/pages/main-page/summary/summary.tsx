import "./summary.scss";
import { SummaryItem } from "./summary-item/summary-item";
import { useSelector } from "../../../hooks/redux-hooks";
import { summariesSelector } from "../../../services/selectors/summary-selectors";

export function Summary() {
  const summaries = useSelector(summariesSelector);
  return (
    <div className="summary">
      {summaries.map((summary, key) => (
        <SummaryItem
          key={key}
          summaryId={summary.summaryId}
          type={summary.type}
          className={summary.className}
          imgURL={summary.imgURL}
          header={summary.header}
        />
      ))}
    </div>
  );
}
