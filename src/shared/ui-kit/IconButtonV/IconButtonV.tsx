import style from "./style.module.scss";

type PropsType = {
  icon: string;
  value?: number;
  onClick?: () => void;
};

export function IconButtonV(props: PropsType) {
  const showValue = () => {
    if (!props.value || props.value === 0) return;
    return <span className={style.iconBtn__value}>{props.value}</span>;
  };
  return (
    <button className={style.iconBtn} onClick={props.onClick}>
      <img src={props.icon} alt="" />
      {showValue()}
    </button>
  );
}
