import "./products-list.scss"
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Products } from "./products/products";

export function ProductsList() {
    return (
        <div className="products-list">
            <Header />
            <div className="products-list__container">
                <Products />
            </div>
            <Footer />
        </div>
    )

}