import { ProductCard } from "@/components/ProductCard";

import { useStoreProvider } from "@/store";
import { Layer } from "./components/Layer";

import style from "./style.module.scss";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export function CatalogPage() {
  const store = useStoreProvider().store;

  useEffect(() => {
    store.getProducts();
    store.basketStore.getProducts();
  });

  const renderProducts = () => {
    const filter = store.products.filter((item) => item.type === "wired");
    return filter.map((item, index) => {
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
    const filter = store.products.filter((item) => item.type === "wireless");
    return filter.map((item, index) => {
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
    <>
      <Header />
      <section className={style.catalogPage}>
        <Layer name="Наушники">{renderProducts()}</Layer>
        <Layer name="Беспроводные наушники">{renderProductsWireless()}</Layer>
      </section>
      <Footer />
    </>
  );
}
