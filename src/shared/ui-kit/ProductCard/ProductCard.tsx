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
  const renderButtonSwitchState = () => {
    if (props.isInBasket) {
      return (
        <ButtonIcon
          icon={RemoveIcon}
          onClick={() =>
            props.onClickRemove ? props.onClickRemove(props.id) : ""
          }
        />
      );
    }

    return (
      <ButtonText
        text="Купить"
        onClick={() => (props.onClickBuy ? props.onClickBuy(props.id) : "")}
      />
    );
  };

  return (
    <div className={style.productCard}>
      <img className={style.productCard__img} src={props.img} />

      <div className={style.productCard__info}>
        <div className={style.productCard__generalInfo}>
          <p>{props.title}</p>
          <PriceBlock price={props.price} oldPrice={props.oldPrice} />
        </div>

        <div className={style.productCard__bootom}>
          <Rating rating={props.rate} />

          {renderButtonSwitchState()}
        </div>
      </div>
    </div>
  );
}

function PriceBlock({ price, oldPrice }: { price: number; oldPrice?: number }) {
  return (
    <div className={style.priceInfo}>
      <span className={style.priceInfo__price}>{price} ₽</span>
      {oldPrice ? (
        <span className={style.priceInfo__oldPrice}>{oldPrice} ₽</span>
      ) : (
        ""
      )}
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
