import { ApiEndpoints } from "../api/ApiEndpoints";
import { useGenericCommand } from "../api/useGenericCommand";

import { Guid } from "../types/Guid";
import { DepositType } from "../enums/DepositType";

export interface IUseCreateCustomerCommand {
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

export const useCreateCustomerCommand = ({
  initialCommand,
}: {
  initialCommand?: { dto: IUseCreateCustomerCommand };
}) => {
  return useGenericCommand<IUseCreateCustomerCommand>({
    endpoint: ApiEndpoints.CustomerList,
    initialCommand,
  });
};
