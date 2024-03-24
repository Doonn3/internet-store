import style from "./style.module.scss";

type PropsType = {
  name: string;
  children: React.ReactNode;
};

export function Layer(props: PropsType) {
  return (
    <div className={style.layer}>
      <h3 className={style.layer__title}>{props.name}</h3>
      <div className={style.layer__items}>{props.children}</div>
    </div>
  );
}
