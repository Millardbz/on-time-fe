import { IPayment } from "@/serverHooks/dtos/IPayment";
import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericQuery } from "../../api/useGenericQuery";
import { Guid } from "@/serverHooks/types/Guid";

export interface IGetPaymentQuery {
  id: Guid;
}

export const useGetPaymentQuery = (params: IGetPaymentQuery) => {
  return useGenericQuery<IPayment, IGetPaymentQuery>(
    ApiEndpoints.Payment,
    params
  );
};
