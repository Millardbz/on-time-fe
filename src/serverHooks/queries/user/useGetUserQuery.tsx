import { IUser } from "@/serverHooks/dtos/IUser";
import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericQuery } from "../../api/useGenericQuery";
import { Guid } from "@/serverHooks/types/Guid";

export interface IGetUserQuery {
  id: Guid;
}

export const useGetUserQuery = (params: IGetUserQuery) => {
  return useGenericQuery<IUser, IGetUserQuery>(ApiEndpoints.User, params);
};
