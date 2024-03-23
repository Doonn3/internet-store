import {
  apiAddItem,
  apiDeleteItemForBasketByID,
  apiGetItemsIsBasket,
  apiSetItemToBasket,
  apiSubstractItem,
  type BasketItemType,
} from "@/infrastructure/FakeApi/api.fake.basket";
import { ItemType } from "@/infrastructure/data";
import { useState } from "react";

export function useStoreBasket() {
  const [basket, setBasket] = useState<BasketItemType[]>([]);

  const setItemToBasket = (_item: ItemType) => {
    const item = apiSetItemToBasket(_item);
    setBasket([...basket, item]);
  };

  const getItemsIsBasket = () => {
    const items = apiGetItemsIsBasket();
    setBasket(items);

    return items;
  };

  const addItem = (id: number) => {
    const item = apiAddItem(id);
    if (!item) return;
    setBasket([...basket, item]);
  };

  const substractItem = (id: number) => {
    const item = apiSubstractItem(id);
    if (!item) return;
    setBasket([...basket, item]);
  };

  const getAmountItems = () => {
    if (basket.length < 1) return 0;
    return basket.map((item) => item.count).reduce((a, b) => a + b);
  };

  const getTotalPrice = () => {
    if (basket.length < 1) return 0;
    const prices = basket.map<number>((item) => item.price * item.count);
    const totalPrice = prices.reduce((a, b) => a + b);
    return totalPrice;
  };

  const getCountItem = (id: number) => {
    const item = basket.find((item) => item.id === id);
    if (!item) return 0;
    return item.count;
  };

  const deleteItem = (id: number) => {
    const result = apiDeleteItemForBasketByID(id);
    setBasket(result);
  };

  return {
    getItemsIsBasket,
    addItem,
    substractItem,
    getAmountItems,
    getCountItem,
    getTotalPrice,
    deleteItem,
    setItemToBasket,
    basket
  };
}
