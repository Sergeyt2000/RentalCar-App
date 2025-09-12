import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
// import css from "./App.module.css";
// import HomePage from "../../pages/HomePage/HomePage";
// import CatalogPage from "../../pages/CatalogPage/CatalogPage";
// import CarPage from "../../pages/CarPage/CarPage";
import Header from "../Header/Header";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);
const CarPage = lazy(() => import("../../pages/CarPage/CarPage.jsx"))

function App() {
  return (
    <div>
      <Header />
      {/* <div className={css.container}> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      {/* </div> */}
    </div>
  );
}

export default App;
