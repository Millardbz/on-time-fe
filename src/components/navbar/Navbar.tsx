import Link from "next/link";
import { FC } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  return (
    <nav className=" bg-blue-400">
      <div className="flex flex-col sm:flex-row justify-between items-center px-20">
        <div className="flex items-center mb-4 sm:mb-0">
          <img src="OnTime-Logo.png" alt="Logo" className="h-20 w-auto" />
          <div className="ml-2 text-white font-bold">Your Company</div>
        </div>
        <div>
          <div className="topnav">
            <input className="pl-2" type="text" placeholder="Search.." />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row">
          <Link
            href="/"
            className="cursor-pointer bg-white text-blue-400 rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
          >
            Home
          </Link>
          <Link
            href="/search"
            className="cursor-pointer bg-white text-blue-400 rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
          >
            Search
          </Link>
          <Link
            href="/salon"
            className="cursor-pointer bg-white text-blue-400 rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
          >
            Salon
          </Link>
          <Link
            href="/about"
            className="cursor-pointer bg-white text-blue-400 rounded px-4 py-2 mb-2 sm:mb-0 sm:mr-2"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};
