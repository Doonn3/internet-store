import { Logo } from "@/shared/ui-kit/Logo";

import { useStoreProvider } from "@/store";

import { BasketButton } from "./components/BasketButton";
import { LikeButton } from "./components/LikeButton";

import style from "./style.module.scss";

export function Header() {
  const store = useStoreProvider().store.basketStore;

  return (
    <header className={style.header}>
      <Logo text="QPICK" />

      <div>
        <LikeButton value={2} />
        <BasketButton value={store.numberGoods} />
      </div>
    </header>
  );
}
