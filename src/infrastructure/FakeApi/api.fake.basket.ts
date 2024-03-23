import { ItemType } from "../data";

export type BasketItemType = ItemType & { count: number };

export let basketArr: BasketItemType[] = [];

export function apiSetItemToBasket(_item: ItemType) {
  const item = _item as BasketItemType;
  item.count = 1;
  basketArr.push(item);

  return item;
}

export function apiGetItemsIsBasket() {
  return basketArr;
}

export function apiDeleteItemForBasketByID(id: number) {
  const result = basketArr.filter((item) => item.id !== id);
  basketArr = result;
  return basketArr;
}

export function apiAddItem(id: number) {
  const item = basketArr.find((_item) => _item.id === id);
  if (!item) return null;
  item.count += 1;
  return item;
}

export function apiSubstractItem(id: number) {
  const item = basketArr.find((_item) => _item.id === id);
  if (!item) return null;
  if (item.count < 2) return null;
  item.count -= 1;
  return item;
}
