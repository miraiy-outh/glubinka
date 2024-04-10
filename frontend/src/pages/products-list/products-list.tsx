import "./products-list.scss";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Products } from "../../components/products/products";
import { FilterList } from "./filter-list/filter-list";
import { ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import {
  PRODUCTS_CHANGE,
  PRODUCTS_PAGE_CHANGE,
} from "../../services/constants/products-constants";
import {
  pageCountSelector,
  productsCurrentCollectionSelector,
  productsPageNumberSelector,
} from "../../services/selectors/products-selectors";

export function ProductsList() {
  const dispatch = useDispatch();
  const pageNumber = useSelector(productsPageNumberSelector);
  const pagesCount = useSelector(pageCountSelector);
  const collectionName = useSelector(productsCurrentCollectionSelector);

  const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
    window.scrollTo(0, 0);
    dispatch({
      type: PRODUCTS_PAGE_CHANGE,
      page: newPage,
    });

    dispatch({
      type: PRODUCTS_CHANGE,
    });
  };
  return (
    <div className="products-list">
      <Header />
      <div className="products-list__main-container">
        <div className="products-list__header">
          <h1>{collectionName ? collectionName : "Все товары"}</h1>
        </div>
        <div className="products-list__container">
          <div className="products-list__container__subcontainer">
            <Products />
            <Pagination
              count={pagesCount}
              page={pageNumber}
              size="large"
              color="primary"
              onChange={handlePageChange}
            />
          </div>
          <FilterList />
        </div>
      </div>

      <Footer />
    </div>
  );
}
