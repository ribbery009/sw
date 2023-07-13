import { FC } from "react";
import Loader from "./Loader";

type ButtonProps = {
  showLoader?: boolean;
  children: React.ReactNode;
  isLoading?: boolean;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


export const Button : FC<ButtonProps> = ({ children,isLoading,showLoader= true,className, ...props }) => {
  return <button {...props} className={className}>
    {children}
    {isLoading && showLoader && (
      <span className={`absolute flex items-center justify-center inset-0`}>
        <Loader />
      </span>
    )}
    </button>;
}
