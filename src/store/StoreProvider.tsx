import { ReactNode, useMemo } from "react";
import { StoreContext } from "./StoreContext";
import { useStore } from "./hooks/useStore";

interface StoreProviderProps {
  children: ReactNode;
}

export function StoreProvider(props: StoreProviderProps) {
  const store = useStore();

  // const storeMemo = useMemo(
  //   () => ({
  //     store,
  //   }),
  //   [store]
  // );

  return (
    <StoreContext.Provider value={{ store: store }}>
      {props.children}
    </StoreContext.Provider>
  );
}
