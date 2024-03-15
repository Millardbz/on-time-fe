import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericListQuery } from "../../api/useGenericListQuery";
import { IPayment } from "@/serverHooks/dtos/IPayment";

export interface IGetPaymentListQuery {
  pageNumber: number;
  pageSize: number;
}

export const useGetPaymentListQuery = (params: IGetPaymentListQuery) => {
  return useGenericListQuery<IPayment, IGetPaymentListQuery>(
    ApiEndpoints.PaymentList,
    params
  );
};
