import { Planet } from "@/lib/types/planet";
import React, { FC } from "react";
import ReactDOM from "react-dom";
import { SectionTitle } from "./SectionTitle";
import { Button } from "./Button";
import CloseIcon from "@/assets/icons/CloseIcon";
import LogoIcon from "@/assets/icons/LogoIcon";


type Props = {
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    planet?: Planet;
};

const Modal:FC<Props> = ({onClose,title,children,planet}) => {
    const handleCloseClick = (e:any) => {
        e.preventDefault();
        onClose();
    };

    const modalContent = (
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-70 transition-all ease-in-out duration-300">
      <div className="w-[500px] h-[600px] transform transition-all ease-in-out duration-300 -translate-y-full modal-open">
          <div className="h-full w-full rounded-2xl p-4 modal-wrapper">
              <div className="flex justify-end text-2xl">
                  <Button onClick={handleCloseClick} className=" text-yellow-600 bg-slate-100 rounded-full p-1 bg-opacity-100 hover:bg-opacity-90">
                      <CloseIcon/>
                  </Button>
              </div>
              {title && <SectionTitle title={title ?? ""} size="large" classNames="text-black mb-4 p-3 font-extrabold"/>}
              <div className="p-3">{children}</div>
              <div className="p-3 flex justify-center">{<LogoIcon width={100} height={80}/>}</div>

          </div>
      </div>
  </div>
    );

    return ReactDOM.createPortal(
        modalContent,
        document.body as HTMLElement
    );
};

export default Modal