import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import { useDispatch, useSelector } from "react-redux";
import { selectPage, selecttotalPages } from "../../redux/cars/selectors.js"
import { setPage } from "../../redux/cars/slice.js";
import { fetchCars } from "../../redux/cars/operations.js";

export default function CarList({ cars }) {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const totalPages = useSelector(selecttotalPages);

  if (cars.length === 0) {
    return <p>Car's not found</p>;
  }
  const onLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));      
      dispatch(fetchCars({ page: page + 1 }));      
    }
  };

  return (
    <div>
      <ul className={css.carlist}>
        {cars.map((car) => (
          <li key={car.id} className={css.caritem}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
      <LoadMoreBtn onLoadMore={onLoadMore} />
    </div>
  );
}
