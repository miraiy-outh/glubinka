import "./product-page.scss";
import { Photos } from "./photos/photos";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { ProductInfo } from "./product-info/product-info";
import { useParams } from "react-router-dom";
import { useSelector } from "../../hooks/redux-hooks";
import { productSelector } from "../../services/selectors/products-selectors";

export function ProductPage() {
  const { id } = useParams();
  const newId = Number(id);
  const productInfo = useSelector(productSelector(newId));
  return (
    <div className="product-page">
      <Header />
      {productInfo ? (
        <div className="product-page__container">
          <Photos images={productInfo.images} />
          <ProductInfo productInfo={productInfo} />
        </div>
      ) : (
        <div>Ошибка</div>
      )}

      <Footer />
    </div>
  );
}
