import { useEffect } from "react";
import css from "./CarPage.module.css";
import { Navigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/carDetails/operations.js";
import {
  selectCarById,
  selectIsLoading,
} from "../../redux/carDetails/selectors.js";
import CarInfo from "../../components/CarInfo/CarInfo.jsx"
import BookCarForm from "../../components/BookCarForm/BookCarForm"
import Loader from "../../components/Loader/Loader.jsx";

export default function CarPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector(selectCarById);
  const isLoading = useSelector(selectIsLoading);  
  
    useEffect(() => {
    if (id) {dispatch(fetchCarById(id));}
  }, [dispatch, id]);
  
 return (
   <>
     {isLoading && <div className={css.spinner}><Loader /></div>}
     {!isLoading && car && Object.keys(car).length > 0 && (
       <div className={css.carPage}>
         <div className={css.leftColumn}>
           <img src={car.img} alt={`${car.brand} ${car.model}`}></img>
           <BookCarForm />
         </div>
         <div className={css.rightColumn}>
           <CarInfo car={car} />
         </div>
       </div>
     )}
   </>
 );
}
