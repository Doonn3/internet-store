import { useEffect } from "react";

import { useStoreProvider } from "@/store";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { CardMobail } from "./components/Card/MobailCard";
import { CardDesktop } from "./components/Card/DesktopCard";
import { GeneralInfo } from "./components/GeneralInfo";
import { Empty } from "./components/Empty";

import { useDevice } from "./hooks";

import style from "./style.module.scss";

export function BasketPage() {
  const store = useStoreProvider().store.basketStore;

  const device = useDevice(680);

  useEffect(() => {
    store.getProducts();
  }, []);

  const renderItems = () => {
    let renderedItems: JSX.Element[] = [];

    if (device.isMobile) {
      renderedItems = store.basket.map((item) => {
        return (
          <CardMobail
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            count={item.count}
            add={() => store.addItem(item.id)}
            substract={() => store.substractItem(item.id)}
            onRemove={() => store.deleteItem(item.id)}
          />
        );
      });
    } else {
      renderedItems = store.basket.map((item) => {
        return (
          <CardDesktop
            key={item.id}
            img={item.img}
            title={item.title}
            price={item.price}
            count={item.count}
            add={() => store.addItem(item.id)}
            substract={() => store.substractItem(item.id)}
            onRemove={() => store.deleteItem(item.id)}
          />
        );
      });
    }

    return (
      <section className={style.basketPage}>
        <div className={style.basketPage__items}>{renderedItems}</div>
        <GeneralInfo totalAmount={store.totalPrice} />
      </section>
    );
  };

  const render = () => {
    if (store.numberGoods < 1) {
      return <Empty />;
    }

    return renderItems();
  };

  return (
    <>
      <Header />
      {render()}
      <Footer />
    </>
  );
}
