import "./products-list.scss"
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Products } from "./products/products";
import { FilterList } from "./filter-list/filter-list";
import { ChangeEvent, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from "../../hooks/redux-hooks";
import { PRODUCTS_INIT, PRODUCTS_PAGE_CHANGE } from "../../services/constants/products-constants";
import { productsPageNumberSelector } from "../../services/selectors/products-selectors";

export function ProductsList() {
    const dispatch = useDispatch()
    const pageNumber = useSelector(productsPageNumberSelector)

    const handlePageChange = (event: ChangeEvent<unknown>, newPage: number) => {
        dispatch({
            type: PRODUCTS_PAGE_CHANGE,
            page: newPage
        })
    };

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(response => response.json())
            .then(data => dispatch({
                type: PRODUCTS_INIT,
                products: data
            }))
    }, [])
    return (
        <div className="products-list">
            <Header />
            <div className="products-list__container">
                <div className="products-list__container__subcontainer">
                    <Products />
                    <Pagination 
                        count={10}
                        page={pageNumber}
                        size="large"
                        color="primary"
                        onChange={handlePageChange} 
                    />

                </div>
                <FilterList />
            </div>

            <Footer />
        </div>
    )

}