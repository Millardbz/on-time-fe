// useGetTodoListQuery.ts
import { ApiEndpoints } from "../api/ApiEndpoints";
import { useGenericQuery } from "../api/useGenericQuery";
import { ISalon } from "../dtos/ISalon";
import { Guid } from "../types/Guid";

export interface GetSalonQueryParams {
  id: Guid;
}

export const useGetSalonQuery = (params: GetSalonQueryParams) => {
  return useGenericQuery<ISalon, GetSalonQueryParams>(
    ApiEndpoints.Salon,
    params
  );
};
