import "./main-page.scss"
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Collections } from "./collections/collections";
import { Summary } from "./summary/summary";
import { MainPageButton } from "./main-page-button/main-page-button";

export function MainPage() {
    return (
        <div className="main-page">
            <Header />
            <div className="main-page__container">
                <div className="main-page__container__subcontainer">
                    <Summary />
                    <Collections />

                </div>
                <MainPageButton />
            </div>
            <Footer />
        </div>
    )

}