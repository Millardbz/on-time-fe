"use client";
import { useStepperContext } from "@/providers/StepperProvider";
import React from "react";

interface User {
  name: string;
  id: number;
}

interface UserContentSectionProps {
  users: User[];
}

export const UserContentSection: React.FC<UserContentSectionProps> = ({
  users,
}) => {
  const { produceAppointmentCommand } = useStepperContext();

  return (
    <div style={{ overflowY: "auto", maxHeight: "40vh" }}>
      <span className="font-bold text-xl">Antal frisører: {users.length}</span>
      <table style={{ width: "100%" }}>
        <thead style={{ position: "sticky", top: 0 }} className="bg-gray-200">
          <tr>
            <th className="pl-10 h-[50px] w-[50px]">Image</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              onClick={() => {
                produceAppointmentCommand((draft) => {
                  draft.WorkerId = user.id.toString();
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
              <td style={{ textAlign: "center" }}>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
