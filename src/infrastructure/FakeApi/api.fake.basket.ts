import { ItemType } from "../data";
import { storageSession } from "../utils/utils";

export type BasketItemType = ItemType & { count: number };

const sStorage = storageSession<BasketItemType[]>("basket");

export let basketArr: BasketItemType[] = sStorage.getItem() ?? [];

export function apiSetItemToBasket(_item: ItemType) {
  const item = _item as BasketItemType;
  item.count = 1;
  basketArr.push(item);

  sStorage.setItem(basketArr);

  return basketArr;
}

export function apiGetItemsIsBasket() {
  console.log("asdadad", basketArr);
  return basketArr;
}

export function apiDeleteItemForBasketByID(id: number) {
  const result = basketArr.filter((item) => item.id !== id);
  basketArr = result;
  sStorage.setItem(basketArr);
  return basketArr;
}

export function apiAddItem(id: number) {
  const item = basketArr.find((_item) => _item.id === id);
  if (!item) return null;
  item.count += 1;
  sStorage.setItem(basketArr);
  return basketArr;
}

export function apiSubstractItem(id: number) {
  const item = basketArr.find((_item) => _item.id === id);
  if (!item) return null;
  if (item.count < 2) return null;
  item.count -= 1;
  sStorage.setItem(basketArr);
  return basketArr;
}
