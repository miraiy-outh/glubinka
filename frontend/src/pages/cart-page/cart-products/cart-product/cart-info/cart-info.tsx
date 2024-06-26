import "./cart-info.scss";

export function CartInfo({ title, price }: { title: string; price: number }) {
  return (
    <div className="cart-info">
      <div className="cart-info__name">{title}</div>
      <div className="cart-info__price">{price} ₽</div>
    </div>
  );
}
