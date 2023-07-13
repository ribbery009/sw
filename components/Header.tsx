import React from "react";
import Link from "next/link";
import FilmIcon from "@/assets/icons/FilmsIcon";
import PersonalIcon from "@/assets/icons/PersonalIcon";
import LogoIcon from "@/assets/icons/LogoIcon";

export function Header() {

  return (
    <header className="flex items-center justify-between px-8">
      <Link href="/">
        {" "}
        <LogoIcon />
      </Link>

      <nav className="flex items-center justify-between">
        <Link href="/" className="flex justify-between items-center">
          {" "}
          <PersonalIcon />
          Szereplők
        </Link>

        <Link href='/films' className="flex justify-between items-center ml-4">
          <FilmIcon />
          Filmek
        </Link>
        <Link href='/planets' className="flex justify-between items-center ml-4">
          <FilmIcon />
          Planets
        </Link>
      </nav>
    </header>
  );
}
