import { Link } from "react-router-dom";

import style from "./style.module.scss";

export function Logo({ text }: { text: string }) {
  return (
    <Link to="/" className={style.logo}>
      {text}
    </Link>
  );
}
