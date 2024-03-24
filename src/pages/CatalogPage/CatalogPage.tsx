import { useContext } from "react";

import { ProductCard } from "../../shared/ui-kit/ProductCard";

import { StoreContext } from "@/store/StoreContext";
import { Layer } from "./components/Layer";

import style from "./style.module.scss";

export function CatalogPage() {
  const store = useContext(StoreContext)!.store;

  const renderProducts = () => {
    return store.getProducts("wired").map((item, index) => {
      return (
        <ProductCard
          key={index}
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          oldPrice={item.oldPrice}
          rate={item.rate}
          onClickBuy={store.buyProduct}
          onClickRemove={store.basketStore.deleteItem}
          isInBasket={store.IsInBasket(item.id)}
        />
      );
    });
  };

  const renderProductsWireless = () => {
    return store.getProducts("wireless").map((item, index) => {
      return (
        <ProductCard
          key={index}
          id={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          oldPrice={item.oldPrice}
          rate={item.rate}
          onClickBuy={store.buyProduct}
          onClickRemove={store.basketStore.deleteItem}
          isInBasket={store.IsInBasket(item.id)}
        />
      );
    });
  };

  return (
    <section className={style.catalogPage}>
      <Layer name="Наушники">{renderProducts()}</Layer>
      <Layer name="Беспроводные наушники">{renderProductsWireless()}</Layer>
    </section>
  );
}
