import { FC } from "react";

type Props = {
    title: string;
    size?: "small" | "medium" | "large" | "huge" | "tiny";
    classNames?: string;
};

export const SectionTitle:FC<Props> = ({ title,size,classNames }) => {
  const sizeClasses = {
    tiny: "text-xl",
    small: "text-2xl",
    medium: "text-3xl",
    large: "text-4xl",
    huge: "text-5xl",
  };

  const sizeClass = sizeClasses[size ?? "medium"];

    return (
            <h1 className={`font-bold ${sizeClass} ${classNames}`}>
                {title}
            </h1>
    );
}