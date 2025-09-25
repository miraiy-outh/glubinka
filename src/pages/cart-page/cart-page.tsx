import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import "./cart-page.scss";
import { CartProducts } from "./cart-products/cart-products";

export function CartPage() {
  return (
    <div className="cart-page">
      <Header />
      <CartProducts />
      <Footer />
    </div>
  );
}
