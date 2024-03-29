import StarIcon from "@/shared/assets/svg/star.svg";

import style from "./style.module.scss";

export function Rate({ rating }: { rating: number }) {
  return (
    <div className={style.rate}>
      <img src={StarIcon} alt="Stars" />
      <span>{rating}</span>
    </div>
  );
}
