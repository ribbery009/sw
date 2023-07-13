import { FC } from "react";
import { Button } from "../Button";
import NextIcon from "@/assets/icons/NextIcon";
import PrevIcon from "@/assets/icons/PrevIcon";

type Props = {
  currentPage: number;
  totalPages: number;
  setPage: (page: number) => void;
  isLoading: boolean;
};

const classNames = "w-8 h-8 rounded border-none flex items-center justify-center bg-gray-600 text-white ml-4"

export const Pagination: FC<Props> = ({ currentPage, totalPages, setPage, isLoading }) => {

  return (
    <div className="flex items-center">
      <Button disabled={isLoading || currentPage === 1} onClick={() => setPage(currentPage - 1)} className={classNames + " " + (currentPage === 1 ? "opacity-50" : "")}>
        <PrevIcon/>
      </Button>
      {currentPage > 1 && <Button disabled={isLoading} onClick={() => setPage(currentPage - 1)} className={classNames}>
        {currentPage - 1}
      </Button>}
      <Button disabled className={classNames + " bg-yellow-500 rounded-full font-bold"}>
        {currentPage}
      </Button>
      {currentPage < totalPages && <Button disabled={isLoading} onClick={() => setPage(currentPage + 1)} className={classNames}>
        {currentPage + 1}
      </Button>}
      <Button disabled={isLoading || currentPage === totalPages} onClick={() => setPage(currentPage + 1)} className={classNames + " " + (currentPage === totalPages ? "opacity-50" : "")}>
        <NextIcon/>
      </Button>
    </div>
  );
};