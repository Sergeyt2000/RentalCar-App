import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homepage}>
      <div className={css.heroContent}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.subtitle}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button type="button" className={css.btn}>
          View Catalog
        </button>
      </div>
    </div>
  );
}
