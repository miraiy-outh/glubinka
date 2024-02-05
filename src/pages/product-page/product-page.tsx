import "./product-page.scss"
import { TMockProductProps } from "../../mocks/mocks-data";
import { Photos } from "./photos/photos";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ProductInfo } from "./product-info/product-info";


export function ProductPage({ productInfo }: { productInfo: TMockProductProps }) {
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