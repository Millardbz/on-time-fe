import { Guid } from "../types/Guid";

export interface IService {
  id: Guid;
  customerId: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  createdAt: Date;
}
