import css from "./CatalogPage.module.css";
import Filter from "../../components/Filter/Filter";
import CarList from "../../components/CarList/CarList";

export default function CatalogPage() {
  
  return (
  <div className={css.catalogPage}>
    <Filter />    
    <CarList />
  </div>);
}
