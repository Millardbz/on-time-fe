import { ApiEndpoints } from "../api/ApiEndpoints";
import { useGenericCommand } from "../api/useGenericCommand";

import { Guid } from "../types/Guid";
import { DepositType } from "../enums/DepositType";

export interface IUseCreateSalonCommand {
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
}

export const useCreateSalonCommand = ({
  initialCommand,
}: {
  initialCommand?: { dto: IUseCreateSalonCommand };
}) => {
  return useGenericCommand<IUseCreateSalonCommand>({
    endpoint: ApiEndpoints.SalonList,
    initialCommand,
  });
};
