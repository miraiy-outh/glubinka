import { PageButton } from "../page-button/page-button";
import "./none-products.scss";

export function NoneProducts({ text }: { text: string }) {
  return (
    <div className="none-products">
      <h1 className="none-products__text">{text}</h1>
      <PageButton text="К списку товаров" />
    </div>
  );
}
