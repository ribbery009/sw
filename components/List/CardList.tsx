import { FC, useCallback, useState } from "react";
import { Card } from "./Card";
import { getUrlId } from "@/lib/utils/getUrlId";
import { Person } from "@/lib/types/person";
import Modal from "../Modal";
import ApiCall, { ApiMethods } from "@/lib/data-access";
import { toast } from "react-toastify";
import { Planet } from "@/lib/types/planet";
import { SectionTitle } from "../SectionTitle";
import DataList from "../DataList";
import { Button } from "../Button";

type CardListProps = {
  cards: Array<Person>;
};

const CardList: FC<CardListProps> = ({ cards }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<Person | null>(null);
  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [currentPlanet, setCurrentPlanet] = useState<Planet | null>(null);

  const handleCardClick = async (card: Person) => {
    await getPlanet(card?.homeworld);
    setSelectedCard(card);
    setShowModal(true);
  };

  const getPlanet = useCallback(async (url: string) => {
    try {
      await ApiCall({
        method: ApiMethods.GET,
        url: url,
        onInit: () => {
          setIsLoadingModal(true);
        },
        onSuccess: (data: any) => {
          setCurrentPlanet(data);
        },
        onError: (err) => {
          toast.error(err);
        },
        onFinal: () => {
          setIsLoadingModal(false);
        },
      });
    } catch (error) {
      console.error("Hiba történt az adatok lekérése során.", error);
    }
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 text-black">
      {showModal && (
        <Modal title={selectedCard?.name} onClose={() => setShowModal(false)}>
          <div className="flex gap-2 flex-col">
            <SectionTitle
              classNames="text-black font-extrabold"
              title="Személyes Adatok"
              size={"tiny"}
            />
            <DataList
              data={{
                Magasság: selectedCard?.height,
                Súly: selectedCard?.mass,
                "Születési dátum": selectedCard?.birth_year,
                "Filmek száma": selectedCard?.films?.length,
              }}
            />
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <SectionTitle
              classNames="text-black font-extrabold"
              title="Szülőföld"
              size={"tiny"}
            />
            <DataList
              data={{
                Neve: currentPlanet?.name,
                Klíma: currentPlanet?.climate,
                Terep: currentPlanet?.terrain,
              }}
            />
          </div>
        </Modal>
      )}
      {cards.map((card) => (
        <div key={card.created} className="flex justify-center">
          <Button onClick={() => handleCardClick(card)}>
            <Card key={card.name} title={card.name} id={getUrlId(card.url)} />
          </Button>
        </div>
      ))}
    </div>
  );
};

export default CardList;
