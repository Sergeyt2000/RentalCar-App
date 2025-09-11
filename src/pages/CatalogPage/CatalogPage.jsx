import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/brands/operations.js";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectBrands } from "../../redux/brands/selectors.js";
import { selectCars, selectIsLoading, selectError } from "../../redux/cars/selectors.js";

import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const items = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);  
  
  useEffect(() => {
    dispatch(fetchCars());
    dispatch(fetchBrands());
  }, [dispatch]);

  return (
    <div className={css.catalogPage}>
      <Filter brands={brands} />
      {isLoading && <p className={css.loading}>Loading...</p>}
      {error && <p className={css.error}>Error: {error}</p>}
      {!isLoading && !error && <CarList cars={items.cars} />}
    </div>
  );
}
