import { Contols } from "@/shared/ui-kit/Controls/Controls";
import { ButtonIcon } from "@/shared/ui-kit/ButtonIcon";

import DeleteIcon from "@/shared/assets/svg/Vector-2.svg";

import style from "./style.module.scss";

type PropsType = {
  img: string;
  title: string;
  price: number;

  substract: () => void;
  count: number;
  add: () => void;
  onRemove: () => void;
};

export function Card(props: PropsType) {
  return (
    <div className={style.card}>
      <div className={style.top}>
        <p className={style.card__title}>{props.title}</p>
        <ButtonIcon icon={DeleteIcon} />
      </div>

      <div className={style.center}>
        <img className={style.center__img} src={props.img} alt="" />
        <Contols
          substract={props.substract}
          add={props.add}
          value={props.count}
        />
      </div>

      <span className={style.card__price}>{props.price} ₽</span>
    </div>
  );
}
