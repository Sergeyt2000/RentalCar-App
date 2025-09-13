import css from "./CarItem.module.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/favorites/slice.js"
import { selectFavorites } from "../../redux/favorites/selectors.js"
import { getLocation } from "../../utils/getLocation.js"

 
export default function CarItem({ car }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorites);  

  const favItems = Array.isArray(favoriteCars?.items) ? favoriteCars.items : [];
  const isFavorite = favItems.some((favCar) => favCar?.id === car?.id); 
  
  const handleClick = () => {
    navigate(`/catalog/${car.id}`);
  };
  const handleClickFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(car.id));      
    } else {
      dispatch(addFavorite(car));
    }
  };
  const location = getLocation(car);

  return (
    <div className={css.card}>
      <div className={css.infoWrapper}>
        <img
          loading="lazy"
          src={car.img}
          alt={`Photo of ${car.brand} ${car.model}`}
          className={css.image}
        />
        <button
          type="button"
          className={css.heartBtn}
          onClick={handleClickFavorite}
        >
          <svg
            className={css.heartIcon}
            width={16}
            height={16}
            aria-label="heart"
          >
            {!isFavorite ? (
              <use href="/sprite.svg#icon-heart" />
            ) : (
              <use href="/sprite.svg#icon-heart-blue" />
            )}
          </svg>
        </button>

        <div className={css.descriptionWrapper}>
          <div className={css.titleWrapper}>
            <h2 className={css.title}>
              {car.brand} <span>{car.model}</span>, {car.year}
            </h2>
            <p className={css.price}>${car.rentalPrice}</p>
          </div>
          <div className={css.description}>
            <p className={css.descriptionItem}>
              {location?.city} <span className={css.vertLine}></span>
              {location?.country}
              <span className={css.vertLine}></span>
              {car.rentalCompany} <span className={css.vertLine}></span>
            </p>
            <p className={css.descriptionItem}>
              {car.type} <span className={css.vertLine}></span>{" "}
              {car.mileage.toLocaleString("uk-UA")} km
            </p>
          </div>
        </div>
      </div>
      <button type="button" className={css.btn} onClick={handleClick}>
        Read more
      </button>
    </div>
  );
}

