import { PaymentStatus } from "../enums/PaymentStatus";
import { Guid } from "../types/Guid";

export interface IPayment {
  id: Guid;
  appointmentId: Guid;
  userId: Guid;
  stripePaymentId: Guid;
  amount: number;
  currency: string;
  status: PaymentStatus;
  paymentMethod: string;
  stripeCustomerId: Guid;
  metaData: string;
  createdAt: Date;
}
