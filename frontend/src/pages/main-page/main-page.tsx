import "./main-page.scss";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Collections } from "./collections/collections";
import { Summary } from "./summary/summary";
import { MainPageButton } from "./main-page-button/main-page-button";
import { useDispatch } from "../../hooks/redux-hooks";
import { useEffect } from "react";
import { FETCH_SUMMARY_COLLECTION } from "../../services/constants/summary-constants";

export function MainPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_SUMMARY_COLLECTION,
    });
  }, []);
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
  );
}
