import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

export default function LoadMoreBtn({ handleClick }: LoadMoreBtnProps) {
  return (
    <>
      <button className={css.loadMoreBtn} onClick={handleClick}>
        Load more
      </button>
    </>
  );
}
