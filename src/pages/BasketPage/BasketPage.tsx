import { useContext } from "react";
import { Card } from "./components/Card";
import { GeneralInfo } from "./components/GeneralInfo";

import style from "./style.module.scss";

import { StoreContext } from "@/store/StoreContext";
import { Empty } from "./components/Empty";

export function BasketPage() {
  const store = useContext(StoreContext)!.store.basketStore;

  const renderItems = () => {
    const items = store.getItemsIsBasket().map((item) => {
      return (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          add={() => store.addItem(item.id)}
          substract={() => store.substractItem(item.id)}
          count={store.getCountItem(item.id)}
          onRemove={() => store.deleteItem(item.id)}
        />
      );
    });

    return (
      <section className={style.basketPage}>
        <div className={style.basketPage__items}>{items}</div>
        <GeneralInfo totalAmount={store.getTotalPrice()} />
      </section>
    );
  };

  const render = () => {
    if (store.getAmountItems() < 1) {
      return <Empty />;
    }

    return renderItems();
  };

  return render();
}
