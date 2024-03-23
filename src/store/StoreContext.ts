import { createContext } from "react";

import { useStore } from "./hooks/useStore";

type ContextType = {
  store: ReturnType<typeof useStore>;
};

export const StoreContext = createContext<ContextType | null>(null);
