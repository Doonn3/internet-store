import { useContext } from "react";
import { StoreContext } from "../StoreContext";

export function useStoreProvider() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("Context NULL");
  }

  return context;
}
