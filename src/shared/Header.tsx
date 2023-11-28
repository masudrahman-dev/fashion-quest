import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="body-font container mx-auto ">
      <div className="flex flex-col lg:flex-row items-center justify-between mt-7">
        <div>
          <Link
            href={"/"}
            className="flex title-font font-medium text-3xl items-center  mb-4 md:mb-0"
          >
            <GiNinjaHeroicStance />

            <span className="ml-3 text-xl">Ninja Hero</span>
          </Link>
        </div>
        <div className=" mb-4">
          <Input className="w-72" type="search" placeholder="search" />
        </div>
        <nav className=" flex  items-center text-base justify-between ">
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            About
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            <FiShoppingCart />
          </Link>
          <Link href={"/"} className="mr-5 hover:text-gray-900">
            <CgProfile />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
