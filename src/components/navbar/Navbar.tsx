"use client";
import Link from "next/link";
import { FC, useState, useEffect, useRef } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-400 header">
      <div className=" py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-row gap-10 lg:gap-48">
            <img src="OnTime-Logo.png" alt="Logo" className="h-20 w-20 " />
          </div>

          <form className="max-w-md mx-auto lg:w-[130vh]">
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only ">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block h-5 w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-50"
                placeholder="Salon..."
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-[5px] h-6 w-20 bg-blue-700 hover:bg-blue-800 focus:ring-8 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  "
              >
                Search
              </button>
            </div>
          </form>

          <div className="">
            <button className="lg:hidden flex flex-1 justify-end  ">
              <svg
                onClick={() => setIsOpen(!isOpen)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-10 w-10 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div
              ref={node}
              className={`fixed right-0 top-0 h-full w-64  transform transition-transform z-20 overflow-auto ${
                isOpen ? "translate-x-0 bg-white" : "translate-x-full"
              } lg:static lg:translate-x-0 lg:flex lg:flex-row lg:space-x-2 lg:w-auto lg:overflow-visible`}
            >
              <Link
                href="/"
                className="cursor-pointer bg-blue-400 text-white rounded px-2 py-1 lg:px-4 lg:py-2 block mt-2 lg:mt-0"
              >
                Home
              </Link>
              <Link
                href="/search"
                className="cursor-pointer bg-blue-400 text-white rounded px-2 py-1 lg:px-4 lg:py-2 block mt-2 lg:mt-0"
              >
                Search
              </Link>
              <Link
                href="/salon"
                className="cursor-pointer bg-blue-400 text-white rounded px-2 py-1 lg:px-4 lg:py-2 block mt-2 lg:mt-0"
              >
                Salon
              </Link>
              <Link
                href="/about"
                className="cursor-pointer bg-blue-400 text-white rounded px-2 py-1 lg:px-4 lg:py-2 block mt-2 lg:mt-0"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
