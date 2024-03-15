import { IService } from "@/serverHooks/dtos/IService";
import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericQuery } from "../../api/useGenericQuery";
import { Guid } from "@/serverHooks/types/Guid";

export interface IGetServiceQuery {
  id: Guid;
}

export const useGetServiceQuery = (params: IGetServiceQuery) => {
  return useGenericQuery<IService, IGetServiceQuery>(
    ApiEndpoints.Service,
    params
  );
};
