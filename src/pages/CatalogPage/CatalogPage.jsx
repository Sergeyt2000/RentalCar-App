import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchBrands } from "../../redux/brands/operations.js";
import { fetchCars } from "../../redux/cars/operations.js";
// import { selectBrands } from "../../redux/brands/selectors.js";
import {
  selectCars,
  selectIsLoading,
  selectError,
} from "../../redux/cars/selectors.js";
import { selectFilters } from "../../redux/filter/selectors.js";
import { resetCars, setPage } from "../../redux/cars/slice.js";
import Loader from "../../components/Loader/Loader.jsx"

export default function CatalogPage() {
  const dispatch = useDispatch();
  // const brands = useSelector(selectBrands);
  const items = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  // useEffect(() => {
  //   dispatch(fetchBrands());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(resetCars());
    dispatch(setPage(1));
    const fetchParams = { ...filters, page: 1 };
    dispatch(fetchCars(fetchParams));
  }, [dispatch, filters]);
  
  return (
    <div className={css.catalogPage}>
      <Filter />
      {isLoading && <div className={css.loading}><Loader /></div>}
      {error && <p className={css.error}>Error: {error}</p>}
      {!isLoading && !error && <CarList cars={items.cars} />}
    </div>
  );
}
