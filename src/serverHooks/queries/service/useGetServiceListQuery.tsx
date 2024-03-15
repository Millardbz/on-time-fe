import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericListQuery } from "../../api/useGenericListQuery";
import { IService } from "@/serverHooks/dtos/IService";

export interface IGetServiceListQuery {
  pageNumber: number;
  pageSize: number;
}

export const useGetServiceListQuery = (params: IGetServiceListQuery) => {
  return useGenericListQuery<IService, IGetServiceListQuery>(
    ApiEndpoints.ServiceList,
    params
  );
};
