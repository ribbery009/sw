import { FC } from "react";

type CardProps = {
  title: string;
  id: number;
};

export const Card: FC<CardProps> = ({title, id}) => {
  return (
    <div className="w-[15rem] relative transition-all  mx-auto cursor-pointer card-wrapper ">
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
        alt={`${title}`}
        className="w-full transition-all rounded-md"
      />
      <h3 className="text-center transition-all font-semibold bg-white text-black relative overflow-hidden py-2">{title}</h3>
    </div>
  );
};