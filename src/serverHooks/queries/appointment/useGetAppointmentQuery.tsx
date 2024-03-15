import { IAppointment } from "@/serverHooks/dtos/IAppointment";
import { ApiEndpoints } from "../../api/ApiEndpoints";
import { useGenericQuery } from "../../api/useGenericQuery";
import { Guid } from "@/serverHooks/types/Guid";

export interface IGetAppointmentQuery {
  id: Guid;
}

export const useGetAppointmentQuery = (params: IGetAppointmentQuery) => {
  return useGenericQuery<IAppointment, IGetAppointmentQuery>(
    ApiEndpoints.Appointment,
    params
  );
};
