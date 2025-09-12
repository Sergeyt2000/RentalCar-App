import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";
// import { useEffect, useState } from "react";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, selectTotalPages } from "../../redux/cars/selectors.js";
import { setPage } from "../../redux/cars/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";
import { selectFilters } from "../../redux/filter/selectors.js";
// import { selectIsLoading } from "../../redux/cars/selectors.js";

export default function CarList({ cars }) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const filters = useSelector(selectFilters);
  // const isLoading = useSelector(selectIsLoading);
  
  
  if (cars.length === 0) {
    return <p>Car's not found</p>;
  }
  const onLoadMore = () => {
    if (page < totalPages) {
      const nextPage = page + 1;
      dispatch(setPage(nextPage));
      dispatch(fetchCars({ ...filters, page: nextPage }));
    }
  };

  
  return (
    <div className={css.carListContainer}>
      <ul className={css.carlist}>
        {cars.map((car) => (
          <li key={car.id} className={css.caritem}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
      {page < totalPages && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
}
