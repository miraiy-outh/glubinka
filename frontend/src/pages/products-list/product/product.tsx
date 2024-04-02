import { Carusel } from "./carusel/carusel";
import { Info } from "./info/info";
import { Options } from "./options/options";
import "./product.scss";

export function Product({
  productId,
  title,
  price,
  imagesSrc,
}: {
  productId: number;
  title: string;
  price: number;
  imagesSrc: string[];
}) {
  return (
    <div className="product">
      <Carusel imagesSrc={imagesSrc} />
      <div className="product__container">
        <Info title={title} price={price} />
        <Options productId={productId} />
      </div>
    </div>
  );
}
