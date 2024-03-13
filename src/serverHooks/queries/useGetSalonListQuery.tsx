import { ITodoList } from "../dtos/ITodoList";
import { ApiEndpoints } from "../api/ApiEndpoints";
import { useGenericQuery } from "../api/useGenericQuery";
import { ISalon } from "../dtos/ISalon";
import { useGenericListQuery } from "../api/useGenericListQuery";

export interface IUseGetSalonListQuery {
  pageNumber: number;
  pageSize: number;
}

export const useGetSalonListQuery = (params: IUseGetSalonListQuery) => {
  return useGenericListQuery<ISalon, IUseGetSalonListQuery>(
    ApiEndpoints.SalonList,
    params
  );
};
