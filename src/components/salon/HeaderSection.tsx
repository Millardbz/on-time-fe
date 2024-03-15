"use client";
import { FC, useState, useEffect } from "react";

export const HeaderSection: FC = () => {
  const [showContact, setShowContact] = useState(false);
  const [showHours, setShowHours] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setShowContact(true);
      setShowHours(true);
    }
  }, [isMobile]);

  return (
    <div className="  sm:px-0">
      <div className="flex flex-col sm:flex-row justify-between items-start">
        <div className="flex items-center text-center gap-4 mb-4 sm:mb-0 sm:flex-row">
          <img src="OnTime-Logo.png" alt="Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold align-middle content-center">
            Your Company
          </span>
        </div>
        <div className="flex flex-col gap-4 mb-4 sm:mb-0">
          <button
            onClick={() => isMobile && setShowContact(!showContact)}
            className={`flex justify-between items-center ${
              isMobile ? "text-blue-500 text-lg" : "text-2xl"
            } font-bold`}
          >
            Kontaktoplysninger
            {isMobile && (
              <span
                className={`transform transition-transform duration-200 pl-2 ${
                  showContact ? "rotate-90" : ""
                }`}
              >
                ➔
              </span>
            )}
          </button>
          {showContact && (
            <div className="flex flex-col gap-1">
              <span> Tlf: 12345678 </span>
              <span> Email: test@test.com </span>
              <span> Adresse: Testvej 1, 1234 Testby </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <button
            onClick={() => isMobile && setShowHours(!showHours)}
            className={`flex justify-between items-center ${
              isMobile ? "text-blue-500 text-lg" : "text-2xl"
            } font-bold`}
          >
            Åbningstider
            {isMobile && (
              <span
                className={`transform transition-transform duration-200 pl-2 ${
                  showHours ? "rotate-90 " : ""
                }`}
              >
                ➔
              </span>
            )}
          </button>
          {showHours && (
            <div className="flex flex-col gap-1">
              <span> Mandag: 08:00 - 16:00 </span>
              <span> Tirsdag: 08:00 - 16:00 </span>
              <span> Onsdag: 08:00 - 16:00 </span>
              <span> Torsdag: 08:00 - 16:00 </span>
              <span> Fredag: 08:00 - 16:00 </span>
              <span> Lørdag: Lukket </span>
              <span> Søndag: Lukket </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
