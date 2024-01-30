import "./products-list.scss"
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Products } from "./products/products";
import { FilterList } from "./filter-list/filter-list";

export function ProductsList() {
    return (
        <div className="products-list">
            <Header />
            <div className="products-list__container">
                <Products />
                <FilterList />
            </div>
            <Footer />
        </div>
    )

}