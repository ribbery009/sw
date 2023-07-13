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
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedPage = useDebounce(currentPage, 800);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  const [previousSearchTerm, setPreviousSearchTerm] = useState("");

  const [cards, setCards] = useState<PersonResp>({
    results: [],
    count: 0,
  });

  const fetchPeopleList = useCallback(
    async (pageNum?: number) => {
      const url = `https://swapi.dev/api/people/?page=${
        previousSearchTerm !== searchTerm ? 1 : debouncedPage
      }&search=${debouncedSearchTerm}`;

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
            setPreviousSearchTerm(searchTerm);
          },
        });
      } catch (error) {
        console.error("Hiba történt az adatok lekérése során.", error);
      }
    },
    [debouncedSearchTerm, debouncedPage]
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
      <div className="py-4">
        <SectionTitle
          title="Szereplők"
          classNames="text-yellow-400 font-bold text-left"
          size="large"
        />
        <div className="flex justify-between my-4 flex-col sm:flex-row gap-3">
          <SearchList
            searchTerm={searchTerm}
            setSearchTerm={changeSearchTerm}
            placeHolder={"Keresés"}
          />

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
