import { ApiEndpoints } from "../api/ApiEndpoints";
import { useGenericCommand } from "../api/useGenericCommand";

import { Guid } from "../types/Guid";
import { DepositType } from "../enums/DepositType";

export interface IUseCreateAppointmentCommand {
  Id: Guid;
  OwnerId: Guid;
  Name: string;
  Description: string;
  Location: string;
  ContactInformation: string;
  OpeningHours: string;
  DepositValue: number;
  PriceWithDeposit: number;
  PriceWithoutDeposit: number;
  DepositType: DepositType;
  WorkerId: string;
  ServiceId: string;
}

export const useCreateAppointmentCommand = ({
  initialCommand,
}: {
  initialCommand?: { dto: IUseCreateAppointmentCommand };
}) => {
  return useGenericCommand<IUseCreateAppointmentCommand>({
    endpoint: ApiEndpoints.SalonList,
    initialCommand,
  });
};
