import { FC } from "react";

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  placeHolder?: string;
};

export const SearchList : FC<Props> = ({ searchTerm, setSearchTerm,placeHolder }) => {
  const handleChange = (event : React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    setSearchTerm(event.target.value);
  };

  return (
      <input 
      type="text"
       className="w-[100%] md:w-[25rem] h-10 rounded-xl px-[1rem] transition-all bg-white border-none focus:outline-none"
        value={searchTerm} 
        onChange={handleChange} 
        placeholder={placeHolder}/>
  );
};