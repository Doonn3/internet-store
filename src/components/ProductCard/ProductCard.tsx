import { ButtonIcon } from "@/shared/ui-kit/ButtonIcon";
import { ButtonText } from "@/shared/ui-kit/ButtonText";
import { PriceBlock } from "@/shared/ui-kit/PriceBlock/PriceBlock";
import { Rate } from "@/shared/ui-kit/Rate";

import RemoveIcon from "@/shared/assets/svg/Vector-2.svg";

import style from "./style.module.scss";

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
    <div className={style.card}>
      <img className={style.card__img} src={props.img} />

      <div className={style.card__info}>
        <div className={style.card__generalInfo}>
          <p>{props.title}</p>
          <PriceBlock price={props.price} oldPrice={props.oldPrice} />
        </div>

        <div className={style.card__bootom}>
          <Rate rating={props.rate} />

          {renderButtonSwitchState()}
        </div>
      </div>
    </div>
  );
}
