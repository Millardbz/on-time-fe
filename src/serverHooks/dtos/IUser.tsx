import { UserRole } from "../enums/UserRole";
import { Guid } from "../types/Guid";

export interface IUser {
  id: Guid;
  customerId: Guid;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  createdAt: Date;
}
