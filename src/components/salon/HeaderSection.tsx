import { FC } from "react";

export const HeaderSection: FC = () => {
  return (
    <div className="pb-20">
      <div className="flex justify-between items-start">
        <div className="flex items-center text-center gap-4">
          <img src="OnTime-Logo.png" alt="Logo" className="h-20 w-auto" />
          <span className="text-2xl font-bold align-middle content-center">
            Your Company
          </span>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold"> Kontaktoplysninger </span>
          <div className="flex flex-col gap-1">
            <span> Tlf: 12345678 </span>
            <span> Email: test@test.com </span>
            <span> Adresse: Testvej 1, 1234 Testby </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="text-2xl font-bold"> Åbningstider </span>
          <div className="flex flex-col gap-1">
            <span> Mandag: 08:00 - 16:00 </span>
            <span> Tirsdag: 08:00 - 16:00 </span>
            <span> Onsdag: 08:00 - 16:00 </span>
            <span> Torsdag: 08:00 - 16:00 </span>
            <span> Fredag: 08:00 - 16:00 </span>
            <span> Lørdag: Lukket </span>
            <span> Søndag: Lukket </span>
          </div>
        </div>
      </div>
    </div>
  );
};
