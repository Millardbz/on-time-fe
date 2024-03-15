import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericListQuery } from "../../api/useGenericListQuery";
import { IUser } from "@/serverHooks/dtos/IUser";

export interface IGetUserListQuery {
  pageNumber: number;
  pageSize: number;
}

export const useGetUserListQuery = (params: IGetUserListQuery) => {
  return useGenericListQuery<IUser, IGetUserListQuery>(
    ApiEndpoints.UserList,
    params
  );
};
