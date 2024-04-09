import { useEffect } from "react";
import { useDispatch } from "../hooks/redux-hooks";
import { FETCH_PRODUCTS } from "../services/constants/products-constants";
import { ScrollToTop } from "../components/scroll";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./main-page/main-page";
import { ProductsList } from "./products-list/products-list";
import { ProductPage } from "./product-page/product-page";

export function RootPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: FETCH_PRODUCTS,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}
