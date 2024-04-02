import "./options.scss";
import { ProductCart } from "./productCart";
import { ProductFavorite } from "./productFavorite";

export function Options({ productId }: { productId: number }) {
  let iconSize = 32;
  return (
    <div className="options">
      <ProductFavorite
        productId={productId}
        width={iconSize}
        height={iconSize}
      />
      <ProductCart productId={productId} width={iconSize} height={iconSize} />
    </div>
  );
}
