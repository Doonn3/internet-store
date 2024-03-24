import { useContext } from "react";
import { Logo } from "@/shared/ui-kit/Logo";

import { BasketButton } from "./components/BasketButton";
import { LikeButton } from "./components/LikeButton";

import style from "./style.module.scss";
import { StoreContext } from "@/store/StoreContext";

export function Header() {
  const store = useContext(StoreContext)!.store.basketStore;

  return (
    <header className={style.header}>
      <Logo text="QPICK" />

      <div className={style.header__block}>
        <LikeButton value={0} />
        <BasketButton value={store.getAmountItems()} />
      </div>
    </header>
  );
}
