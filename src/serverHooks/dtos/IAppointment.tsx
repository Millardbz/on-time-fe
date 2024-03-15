export interface IAppointment {
  CustomerName: string;
  CustomerEmail: string;
  CustomerPhone: string;
  SalonId: number;
  ServiceId: number;
  WorkerId: number;
  Duration: number;
  Status: string;
  Comments: string;
  ReminderSent: boolean;
  CreatedAt: Date;
}
