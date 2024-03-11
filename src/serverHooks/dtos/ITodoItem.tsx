import { PriorityLevel } from "../enums/PriorityLevel";

export interface ITodoItem {
  id: number;
  listId: number;
  title: string;
  note?: string;
  priority: PriorityLevel;
}
