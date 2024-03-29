import style from "./style.module.scss";

type PropsType = {
  price: number;
  oldPrice?: number;
};

export function PriceBlock(props: PropsType) {
  return (
    <div className={style.priceBlock}>
      <span className={style.priceBlock__price}>{props.price} ₽</span>
      {props.oldPrice ? (
        <span className={style.priceBlock__oldPrice}>{props.oldPrice} ₽</span>
      ) : (
        ""
      )}
    </div>
  );
}
