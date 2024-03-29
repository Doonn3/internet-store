import { Link } from "react-router-dom";

import PlanetIcon from "@/shared/assets/svg/RU.svg";

import style from "./style.module.scss";

export function LanguageSelectorContainer() {
  return (
    <div className={style.languageSelectorContainer}>
      <Link className="link" to="*">
        Условия сервиса
      </Link>

      <div className={style.flexContaner}>
        <img src={PlanetIcon} alt="Planet Icon" />
        <div className={style.gap20}>
          <button className={`${style.btn} ${style.btnActive}`}>Рус</button>
          <button className={style.btn}>Eng</button>
        </div>
      </div>
    </div>
  );
}
