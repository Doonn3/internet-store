import { useContext } from "react";

import { ProductCard } from "../../shared/ui-kit/ProductCard";

import style from "./style.module.scss";
import { StoreContext } from "@/store/StoreContext";

export function CatalogPage() {
  const store = useContext(StoreContext)!.store;

  const renderProducts = () => {
    return store.getProducts().map((item, index) => {
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

  return <section className={style.catalogPage}>{renderProducts()}</section>;
}
