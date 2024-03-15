"use client";
import {
  IUseCreateAppointmentCommand,
  useCreateAppointmentCommand,
} from "@/serverHooks/commands/useCreateAppointmentCommand";
import { IAppointment } from "@/serverHooks/dtos/IAppointment";
import React, { FC, ReactNode, useContext, useState } from "react";

export interface IStepperContext {
  command:
    | {
        dto: IUseCreateAppointmentCommand;
      }
    | undefined;
  produceAppointmentCommand: (
    recipe: (draft: IUseCreateAppointmentCommand) => void
  ) => void;
}

export const StepperContext = React.createContext<IStepperContext | undefined>(
  undefined!
);

export const useStepperContext = () => {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepperContext must be used within a StepperProvider");
  }
  return context;
};

export interface IStepperProviderProps {
  children: ReactNode;
}

export const StepperProvider: FC<IStepperProviderProps> = ({ children }) => {
  const [appointment, setAppointmentState] = useState<IAppointment | undefined>(
    undefined
  );

  const { produceCommand: produceAppointmentCommand, command } =
    useCreateAppointmentCommand({
      initialCommand: {
        dto: {
          Id: "",
          OwnerId: "",
          Name: "",
          Description: "",
          Location: "",
          ContactInformation: "",
          OpeningHours: "",
          DepositValue: 0,
          PriceWithDeposit: 0,
          PriceWithoutDeposit: 0,
          DepositType: 0,
          WorkerId: "",
          ServiceId: "",
        },
      },
    });

  return (
    <StepperContext.Provider value={{ command, produceAppointmentCommand }}>
      {children}
    </StepperContext.Provider>
  );
};
