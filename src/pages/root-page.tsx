import { useEffect } from "react";
import { useDispatch } from "../hooks/redux-hooks";
import { FETCH_PRODUCTS } from "../services/constants/products-constants";
import { ScrollToTop } from "../components/scroll";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "./main-page/MainPage";
import { ProductsList } from "./products-list/products-list";
import { ProductPage } from "./product-page/product-page";
import { FavoritesPage } from "./favorites-page/favorites-page";
import { CartPage } from "./cart-page/cart-page";

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
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/favorites/:id" element={<ProductPage />} />
      </Routes>
    </>
  );
}
