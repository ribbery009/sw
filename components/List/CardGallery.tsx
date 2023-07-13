import { useCallback, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import ApiCall, { ApiMethods } from "@/app/lib/data-access";
import { toast } from "react-toastify";
import { Person } from "@/app/lib/types/person";
import { ListLoader } from "../ListLoader";
import CardList from "./CardList";
import { useDebounce } from "@/hooks/useDebounse";

type PersonResp = {
  results: Person[];
  count: number;
  next?: string;
  previous?: string;
};
export const CardGallery = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedPage = useDebounce(currentPage, 500);

  const [cards, setCards] = useState<PersonResp>({
    results: [],
    count: 0,
  });

  const fetchPeopleList = useCallback(async (url: string) => {
    try {
      await ApiCall({
        method: ApiMethods.GET,
        url: url,
        onInit: () => {
          setIsLoading(true);
        },
        onSuccess: (data: any) => {
          setCards(data);
        },
        onError: (err) => {
          toast.error(err);
        },
        onFinal: () => {
          setIsLoading(false);
        },
      });
    } catch (error) {
      console.error("Hiba történt az adatok lekérése során.", error);
    }
  }, []);

  useEffect(() => {
    const url = `https://swapi.dev/api/people/?page=${debouncedPage}`;
    fetchPeopleList(url);
  }, [debouncedPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(Math.max(1, currentPage - 1));
  };

  if (!cards.results) {
    return <div>loading...</div>;
  }

  return (
    <div className="px-8">
      <div className="">
        <div className="flex justify-between mb-4">
          <h1 className="text-3xl text-yellow-400 font-bold">Szereplők</h1>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(cards.count / cards.results.length)}
            setPage={setCurrentPage}
            isLoading={isLoading}
          />
        </div>

        <CardList cards={cards.results} />
      </div>

      {isLoading && <ListLoader />}
    </div>
  );
};
