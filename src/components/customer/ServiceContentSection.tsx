"use client";
import { useStepperContext } from "@/providers/StepperProvider";
import React from "react";

interface ServiceItem {
  id: number;
  name: string;
  price: number;
}

interface ServiceContentSectionProps {
  services: ServiceItem[];
}

export const ServiceContentSection: React.FC<ServiceContentSectionProps> = ({
  services,
}) => {
  const { produceAppointmentCommand } = useStepperContext();

  return (
    <div
      style={{ overflowY: "auto", maxHeight: "40vh" }}
      className="lg:max-h-[45vh]"
    >
      <span className="font-bold text-xl">
        Antal behandlinger: {services.length}
      </span>
      <table style={{ width: "100%" }}>
        <thead style={{ position: "sticky", top: 0 }} className="bg-gray-200">
          <tr>
            <th className="pl-10 h-[50px] w-[50px]">Image</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr
              key={service.id}
              onClick={() => {
                produceAppointmentCommand((draft) => {
                  draft.ServiceId = service.id.toString();
                });
              }}
              className="cursor-pointer h-[10vh] md:h-[7vh] border-b-2 border-gray-300 hover:bg-gray-200 "
            >
              <td>
                <img
                  src="https://icon-library.com/images/hair-icon-png/hair-icon-png-14.jpg"
                  alt="service"
                  className="ml-10 h-[50px] w-[50px]"
                />
              </td>
              <td style={{ textAlign: "center" }}>{service.name}</td>
              <td style={{ textAlign: "center" }}>{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
