import {
  apiAddItem,
  apiDeleteItemForBasketByID,
  apiGetItemsIsBasket,
  apiSetItemToBasket,
  apiSubstractItem,
  type BasketItemType,
} from "@/infrastructure/FakeApi/api.fake.basket";
import { ItemType } from "@/infrastructure/data";
import { useCallback, useState } from "react";

export function useStoreBasket() {
  const [basket, setBasket] = useState<BasketItemType[]>([]);
  const [numberGoods, setNumberGoods] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const setItemToBasket = useCallback((_item: ItemType) => {
    const items = apiSetItemToBasket(_item);
    setBasket(items);
    setNumberGoods(calcCount(items));
    setTotalPrice(calcTotalPrice(items));
  }, []);

  const getProducts = () => {
    const items = apiGetItemsIsBasket();
    setBasket(items);
    if (items.length < 1) return;
    setNumberGoods(calcCount(items));
    setTotalPrice(calcTotalPrice(items));
  };

  const addItem = (id: number) => {
    const items = apiAddItem(id);
    if (!items) return;

    setBasket(items);
    setNumberGoods(calcCount(items));
    setTotalPrice(calcTotalPrice(items));
  };

  const substractItem = (id: number) => {
    const items = apiSubstractItem(id);
    if (!items) return;

    setBasket(items);
    setNumberGoods(calcCount(items));
    setTotalPrice(calcTotalPrice(items));
  };

  const deleteItem = (id: number) => {
    const result = apiDeleteItemForBasketByID(id);

    setBasket(result);

    if (result.length < 1) {
      setNumberGoods(0);
      setTotalPrice(0);
    } else {
      setNumberGoods(calcCount(result));
      setTotalPrice(calcTotalPrice(result));
    }
  };

  const calcCount = (items: BasketItemType[]) => {
    return items.map((i) => i.count).reduce((a, b) => a + b);
  };

  const calcTotalPrice = (items: BasketItemType[]) => {
    return items.map((i) => i.price * i.count).reduce((a, b) => a + b);
  };

  return {
    addItem,
    substractItem,
    deleteItem,
    setItemToBasket,
    getProducts,
    basket,
    numberGoods,
    totalPrice,
  };
}
