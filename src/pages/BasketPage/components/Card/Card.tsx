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
      <div className={style.startBlock}>
        <img className={style.startBlock__img} src={props.img} alt="" />
        <Contols
          substract={props.substract}
          add={props.add}
          value={props.count}
        />
      </div>

      <div className={style.centerBlock}>
        <p className={style.centerBlock__title}>{props.title}</p>
        <span className={style.centerBlock__price}>{props.price} ₽</span>
      </div>

      <div className={style.endBlock}>
        <img
          onClick={props.onRemove}
          className={style.endBlock__icon}
          src={DeleteIcon}
          alt="Delete Icon"
        />
        <span className={style.endBlock__price}>{props.price} ₽</span>
      </div>
    </div>
  );
}

type PropsControlsType = {
  substract: () => void;
  value: number;
  add: () => void;
};

function Contols(props: PropsControlsType) {
  return (
    <div className={style.controls}>
      <button className={style.controls__btn} onClick={props.substract}>
        -
      </button>
      <span className={style.controls__amount}>{props.value}</span>
      <button className={style.controls__btn} onClick={props.add}>
        +
      </button>
    </div>
  );
}
