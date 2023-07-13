import { FC } from "react";

type Props = {
  currentPage: number;
  totalPages: number;
  onNextPage: () => void;
  onPrevPage: () => void;
  next?: string;
  previous?: string;
};

export const Pagination: FC<Props> = ({ currentPage, totalPages, onNextPage, onPrevPage, next, previous }) => {
  return (
    <div className="pagination">
      <button disabled={previous === null} onClick={onPrevPage}>
        Previous
      </button>
      <span>{currentPage}</span>
      <button disabled={next === null} onClick={onNextPage}>
        Next
      </button>
    </div>
  );
};