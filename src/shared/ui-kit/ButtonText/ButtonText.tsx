import style from "./style.module.scss";

type PropsType = {
  text: string;
  onClick?: () => void;
};

export function ButtonText(props: PropsType) {
  return (
    <button className={style.btn} onClick={props.onClick}>
      {props.text}
    </button>
  );
}
