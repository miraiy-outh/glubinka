import { LogoMainPage } from "../../../components/logo/logo-main-page";
import "./summary.scss"
import { mockSummaryInfo } from "../../../mocks/mocks-data";
import { SummaryItem } from "../../../components/summary-item/summary-item";

export function Summary() {
    return (
        <div className="summary">
            {mockSummaryInfo.map((summary, key) => (
                <SummaryItem
                    key={key}
                    type={summary.type}
                    className={summary.className}
                    imgURL={summary.imgURL}
                    header={summary.header}
                />
            ))}
        </div>
    )
}