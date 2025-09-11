import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
}
