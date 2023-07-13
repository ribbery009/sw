import { FC } from "react";
import { Card } from "./Card";
import { getUrlId } from "@/app/lib/utils/getUrlId";
import { Person } from "@/app/lib/types/person";


type CardListProps = {
  cards: Array<Person>;
};

const CardList: FC<CardListProps> = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {cards.map((card) => (
        <Card key={card.name} title={card.name} id={getUrlId(card.url)}/>
      ))}
    </div>
  );
};

export default CardList;