import "./products-list.scss"
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Products } from "./products/products";
import { FilterList } from "./filter-list/filter-list";
import { useEffect } from "react";
import Pagination from '@mui/material/Pagination';

export function ProductsList() {
    useEffect(() => {
        fetch('http://localhost:3001/api/products/?pageNumber=1&pageSize=12')
            .then(response => response.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className="products-list">
            <Header />
            <div className="products-list__container">
                <div className="products-list__container__subcontainer">
                    <Products />
                    <Pagination 
                    count={10}
                    size="large"
                    color="primary" 
                    />

                </div>
                <FilterList />
            </div>

            <Footer />
        </div>
    )

}