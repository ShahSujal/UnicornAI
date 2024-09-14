import Image from "next/image";
import * as React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function NavBar() {
  return (
    <div className="fixed top-0 left-0 w-full h-[50px] z-20 flex justify-around items-center">
      <h1 className=" text-xl font-serif">Unicorn Ai</h1>

      <Link
        href="/dashboard"
        className=" border-2 border-[#6e6d6d]
         px-4 py-1 rounded-2xl text-[#dad8d8]"
      >
    Dashboard
      </Link>
    </div>
  );
}

export default NavBar;
