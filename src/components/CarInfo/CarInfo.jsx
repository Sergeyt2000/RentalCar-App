import css from "./CarInfo.module.css";
import { useSelector } from "react-redux";
import {
  selectIsLoading,
  selectError,
} from "../../redux/carDetails/selectors.js";
import { getLocation } from "../../utils/getLocation.js"

export default function CarInfo({ car }) {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (isLoading) return <div>Loading...</div>;

  if (!car || Object.keys(car).length === 0 || !car.address)
    return <p>No car info</p>;

  if (error) {
    return <p>Error: {error.message}</p>;
  }
  const location = getLocation(car);
  if (!location) {
    return <p>Invalid location data</p>;
  }
  
  return (
    <div className={css.carInfoWrapper}>
      <div className={css.carInfo}>
        <h2 className={css.carTitle}>
          {car.brand} {car.model}, {car.year}
          <span className={css.carId}>Id: {car.id.slice(0, 4)}</span>
        </h2>
        <div className={css.location}>
          <svg className={css.icon}>
            <use href="/sprite.svg#icon-location" />
          </svg>
          <p>
            {location?.city}, {location?.country} <span className={css.mileage}>Mileage: {car.mileage.toLocaleString('uk-UA')} km</span>
          </p>
        </div>
        <p className={css.price}>${car.rentalPrice}</p>
        <p className={css.carDescr}>{car.description}</p>
      </div>
      <div className={css.conditions}>
        <h3 className={css.title}>Rental Conditions:</h3>
        <ul className={css.list}>
          {car.rentalConditions.map((condition) => (
            <li className={css.listItem} key={condition}>
              <svg className={css.icon}>
                <use href="/sprite.svg#icon-check-circle" />
              </svg>
              <p>{condition}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className={css.specifications}>
        <h3 className={css.title}>Car Specifications:</h3>
        <div className={css.specBox}>
          <div className={css.specLine}>
            <svg className={css.icon}>
              <use href="/sprite.svg#icon-calendar" />
            </svg>
            <p>Year: {car.year}</p>
          </div>
          <div className={css.specLine}>
            <svg className={css.icon}>
              <use href="/sprite.svg#icon-car" />
            </svg>
            <p>Type: {car.type}</p>
          </div>
          <div className={css.specLine}>
            <svg className={css.icon}>
              <use href="/sprite.svg#icon-fuel-pump" />
            </svg>
            <p>Fuel Consumption: {car.fuelConsumption}</p>
          </div>
          <div className={css.specLine}>
            <svg className={css.icon}>
              <use href="/sprite.svg#icon-gear" />
            </svg>
            <p>Engine Size: {car.engineSize}</p>
          </div>
        </div>
      </div>
      <div className={css.functionalities}>
        <h3 className={css.title}>Accessories and functionalities:</h3>
        <ul className={css.list}>
          {car.functionalities.map((functionality) => (
            <li className={css.listItem} key={functionality}>
              <svg className={css.icon}>
                <use href="/sprite.svg#icon-check-circle" />
              </svg>
              <p>{functionality}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
