import { FC } from "react";

type CardProps = {
  title: string;
  id: number;
};

export const Card: FC<CardProps> = ({title, id}) => {
  return (
    <div className="w-[15rem] relative transition-all mx-auto">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={`Imagem de ${title}`}
      />
      <h3 className="text-center">{title}</h3>
    </div>
  );
};
