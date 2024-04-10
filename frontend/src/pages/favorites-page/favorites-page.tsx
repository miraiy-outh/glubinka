import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { FavoritesProducts } from "./favorites-products/favorites-products";
import "./favorites-page.scss";

export function FavoritesPage() {
  return (
    <div className="favorites-page">
      <Header />
      <FavoritesProducts />
      <Footer />
    </div>
  );
}
