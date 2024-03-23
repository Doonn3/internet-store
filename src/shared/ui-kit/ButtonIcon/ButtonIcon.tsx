import style from "./style.module.scss";

type PropsType = {
  icon: string;
  onClick?: () => void;
};

export function ButtonIcon(props: PropsType) {
  return (
    <button className={style.btn} onClick={props.onClick}>
      <img src={props.icon} alt="Icon" />
    </button>
  );
}
