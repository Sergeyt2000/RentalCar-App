import CarItem from "../CarItem/CarItem";
import css from "./CarList.module.css";

export default function CarList({ cars }) {
  if (cars.length === 0) {
    return <p>Car's not found</p>;
  }
  return (
    <div>
      <ul className={css.carlist}>
        {cars.map((car) => (
          <li key={car.id} className={css.caritem}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
}
