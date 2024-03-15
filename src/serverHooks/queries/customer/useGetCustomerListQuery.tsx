import { ApiEndpoints } from "../../api/ApiEndpoints";
import { ICustomer } from "../../dtos/ICustomer";
import { useGenericListQuery } from "../../api/useGenericListQuery";

export interface IUseGetCustomerListQuery {
  pageNumber: number;
  pageSize: number;
}

export const useGetCustomerListQuery = (params: IUseGetCustomerListQuery) => {
  return useGenericListQuery<ICustomer, IUseGetCustomerListQuery>(
    ApiEndpoints.CustomerList,
    params
  );
};
