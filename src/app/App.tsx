import { Route, Routes } from "react-router-dom";

import { StoreProvider } from "@/store";
import { CatalogPage } from "@/pages/CatalogPage";
import { BasketPage } from "@/pages/BasketPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

import "./styles/App.scss";

function App() {
  return (
    <StoreProvider>
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </StoreProvider>
  );
}

export default App;
