import { ProductCart } from "../../../../../components/product-cart";
import { ProductFavorite } from "../../../../../components/product-favorite";
import "./cart-options.scss";

export function CartOptions({ productId }: { productId: number }) {
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
