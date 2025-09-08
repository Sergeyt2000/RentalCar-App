import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage/CatalogPage";
import CarPage from "../../pages/CarPage/CarPage";

function App() {
  return (
    <div className={css.App}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarPage />} />
      </Routes>
    </div>
  )
}

export default App
