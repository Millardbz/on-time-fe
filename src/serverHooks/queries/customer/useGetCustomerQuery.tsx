import { Guid } from "@/serverHooks/types/Guid";
import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericQuery } from "../../api/useGenericQuery";
import { ICustomer } from "../../dtos/ICustomer";

export interface GetCustomerQueryParams {
  id: Guid;
}

export const useGetCustomerQuery = (params: GetCustomerQueryParams) => {
  return useGenericQuery<ICustomer, GetCustomerQueryParams>(
    ApiEndpoints.Customer,
    params
  );
};
