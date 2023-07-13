import { useCallback, useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import ApiCall, { ApiMethods } from "@/lib/data-access";
import { toast } from "react-toastify";
import { Person } from "@/lib/types/person";
import { ListLoader } from "../ListLoader";
import CardList from "./CardList";
import { useDebounce } from "@/hooks/useDebounce";
import { SearchList } from "../SearchList";
import { SectionTitle } from "../SectionTitle";

type PersonResp = {
  results: Person[];
  count: number;
  next?: string;
  previous?: string;
};
export const CardGallery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [changeType, setChangeType] = useState<string | null | undefined>(undefined);
  const [debouncedPage, debouncedSearchTerm] = useDebounce([currentPage, searchTerm], 800);
  const [cards, setCards] = useState<PersonResp>({
    results: [],
    count: 0,
  });

  const fetchPeopleList = useCallback(
    async () => {
      const url = `https://swapi.dev/api/people/?page=${debouncedPage}&search=${debouncedSearchTerm}`;

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
    },
    [debouncedPage, debouncedSearchTerm]
  );


  useEffect(() => {
    fetchPeopleList();
  }, [fetchPeopleList]);



  const changeSearchTerm = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1);
  };

  return (
    <div className="px-8 pb-14">
      <div className="pt-4">
        <SectionTitle
          title="Szereplők"
          classNames="text-yellow-400 font-bold text-left"
          size="large"
        />
        <div className="flex justify-between my-4 flex-col sm:flex-row gap-3 pb-4">
          <SearchList
            searchTerm={searchTerm}
            setSearchTerm={changeSearchTerm}
            placeHolder={"Keresés"}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(cards.count / 10)}
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
