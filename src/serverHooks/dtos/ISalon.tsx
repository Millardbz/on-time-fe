import { DepositType } from "../enums/DepositType";

export interface ISalon {
  id: string; // Using string type for GUID
  ownerId: string;
  name: string;
  description?: string; // Optional since maxLength is 500, not required
  location: string;
  contactInformation: string;
  openingHours: string;
  images?: string; // Optional, not present in the backend entity you provided
  depositType: DepositType;
  depositValue: number;
  priceWithDeposit: number;
  priceWithoutDeposit: number;
  createdAt?: Date; // Optional, auto-set to DateTime.UtcNow in backend
  updatedAt?: Date; // Optional, might be set later
}
