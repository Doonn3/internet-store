import { Link } from "react-router-dom";

import style from "./style.module.scss";

export function NavigationLinks() {
  return (
    <div className={style.links}>
      <Link className="link" to="*">
        Избранное
      </Link>
      <Link className="link" to="/basket">
        Корзина
      </Link>
      <Link className="link" to="*">
        Контакты
      </Link>
    </div>
  );
}
