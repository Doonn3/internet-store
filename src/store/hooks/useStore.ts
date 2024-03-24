import { useStoreBasket } from "./useStoreBasket";
import { headphones } from "@/infrastructure/data";

export function useStore() {
  const basketStore = useStoreBasket();

  const getProducts = (type: 'wired' | 'wireless') => {
    return headphones.filter((item) => item.type === type);
  };

  const buyProduct = (productID: number) => {
    const find = headphones.find((item) => item.id === productID);

    if (!find) return;
    basketStore.setItemToBasket(find);
  };

  const IsInBasket = (id: number) => {
    const result = basketStore.basket.find((item) => item.id === id);
    if (result) return true;
    return false;
  };

  return {
    getProducts,
    buyProduct,
    IsInBasket,
    basketStore,
  };
}
