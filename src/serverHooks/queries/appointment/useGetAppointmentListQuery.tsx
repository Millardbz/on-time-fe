import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericListQuery } from "../../api/useGenericListQuery";
import { IAppointment } from "@/serverHooks/dtos/IAppointment";

export interface IuseGetAppointmentListQuery {
  pageNumber: number;
  pageSize: number;
}

export const useGetAppointmentListQuery = (
  params: IuseGetAppointmentListQuery
) => {
  return useGenericListQuery<IAppointment, IuseGetAppointmentListQuery>(
    ApiEndpoints.AppointmentList,
    params
  );
};
