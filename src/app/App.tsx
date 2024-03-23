import { router } from "./router/roter";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { StoreProvider } from "@/store/StoreProvider";

import "./styles/App.scss";
import { Route, Routes } from "react-router-dom";

import { CatalogPage } from "@/pages/CatalogPage";
import { BasketPage } from "@/pages/BasketPage";

function App() {
  return (
    <StoreProvider>
      <Header />
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/basket" element={<BasketPage />} />
      </Routes>

      <Footer />
    </StoreProvider>
  );
}

export default App;
