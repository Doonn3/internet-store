import { createBrowserRouter } from "react-router-dom";

import { CatalogPage } from "@/pages/CatalogPage";
import { BasketPage } from "@/pages/BasketPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CatalogPage />,
  },
  {
    path: "basket",
    element: <BasketPage />,
  },
]);
