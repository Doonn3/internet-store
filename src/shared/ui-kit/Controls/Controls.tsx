import style from './style.module.scss'

type PropsType = {
  substract: () => void;
  value: number;
  add: () => void;
};

export function Contols(props: PropsType) {
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
