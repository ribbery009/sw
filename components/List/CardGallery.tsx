import { useCallback, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import ApiCall, { ApiMethods } from "@/app/lib/data-access";
import { toast } from "react-toastify";
import { Person } from "@/app/lib/types/person";
import { ListLoader } from "../ListLoader";
import CardList from "./CardList";


type PersonResp = {
  results: Person[];
  count: number;
  next?: string;
  previous?: string;
};
export const CardGallery = () => {
  
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [cards, setCards] = useState<PersonResp>(
    {
      results: [],
      count: 0,
    }
  );

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
    fetchPeopleList('https://swapi.dev/api/people/');
  }, []);

  const handleNextPage = () => {
    if (cards.next) {
      fetchPeopleList(cards.next);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (cards.previous) {
      fetchPeopleList(cards.previous);
      setCurrentPage(currentPage - 1)
    }
  };

  if (!cards.results) {
    return <div>loading...</div>;
  }

  return (
    <div className="px-8">
      <div className="">
        <CardList cards={cards.results} />
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(cards.count / cards.results.length)}
        onNextPage={handleNextPage}
        onPrevPage={handlePrevPage}
        next={cards?.next}
        previous={cards?.previous}
      />
      {isLoading && <ListLoader />}
    </div>
  );
};