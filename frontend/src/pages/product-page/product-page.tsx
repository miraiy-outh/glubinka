import "./product-page.scss"
import { Photos } from "./photos/photos";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ProductInfo } from "./product-info/product-info";
import { mockProductsInfo } from '../../mocks/mocks-data';


export function ProductPage() {
    const productInfo = mockProductsInfo[0];
    return (
        <div className="product-page">
            <Header />
            <div className="product-page__container">
                <Photos
                    images={productInfo.images}
                />
                <ProductInfo
                    productInfo={productInfo}
                />
            </div>
            <Footer />
        </div>
    )
}