import React from "react";
import Link from "next/link";
import LogoIcon from "@/assets/icons/LogoIcon";

export function Header() {

  return (
    <header className="flex items-center justify-between px-8 relative bg-white bg-opacity-10 border-b border-b-amber-300">
      <Link href="/">
        {" "}
        <LogoIcon width={100}/>
      </Link>

     
    </header>
  );
}
