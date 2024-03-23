import style from "./style.module.scss";

type PropsType = {
  totalAmount: number;
};

export function GeneralInfo(props: PropsType) {
  return (
    <div className={style.generalInfo}>
      <div className={style.generalInfo__total}>
        <span>Итого</span>
        <span>₽ {props.totalAmount}</span>
      </div>
      <button className={style.generalInfo__orderBtn}>
        Перейти к оформлению
      </button>
    </div>
  );
}
