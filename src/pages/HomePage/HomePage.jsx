import css from "./HomePage.module.css";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/catalog");
  }
  
  return (
    <div className={css.homepage}>
      <div className={css.heroContent}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button type="button" className={css.btn} onClick={handleClick}>
          View Catalog
        </button>
      </div>
    </div>
  );
}
