import style from "./style.module.scss";

import StarIcon from "../../assets/svg/star.svg";
import RemoveIcon from "@/shared/assets/svg/Vector-2.svg";
import { ButtonText } from "@/shared/ui-kit/ButtonText";
import { ButtonIcon } from "@/shared/ui-kit/ButtonIcon";

type PropsType = {
  id: number;
  img: string;
  title: string;
  price: number;
  oldPrice?: number;
  rate: number;
  onClickBuy?: (id: number) => void;
  onClickRemove?: (id: number) => void;
  isInBasket?: boolean;
};

export function ProductCard(props: PropsType) {
  return (
    <div className={style.productCard}>
      <img className={style.productCard__img} src={props.img} alt="" />
      <div className={style.productCard__info}>
        <div className={style.tt}>
          <p>{props.title}</p>
          <div className={style.zz}>
            <span className={style.price}>{props.price} ₽</span>
            {props.oldPrice ? (
              <span className={style.oldPrice}>{props.oldPrice} ₽</span>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className={style.productCard__bootom}>
          <Rating rating={props.rate} />

          {props.isInBasket ? (
            <ButtonIcon
              icon={RemoveIcon}
              onClick={() => props.onClickRemove!(props.id)}
            />
          ) : (
            <ButtonText
              text="Купить"
              onClick={() => props.onClickBuy!(props.id)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function Rating({ rating }: { rating: number }) {
  return (
    <div className={style.rating}>
      <img src={StarIcon} alt="Stars" />
      <span className={style.rating__value}>{rating}</span>
    </div>
  );
}
