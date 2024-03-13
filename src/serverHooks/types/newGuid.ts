import { v4 } from "uuid";
import { Guid } from "./Guid";

/**
 * Generate Guid (v4)
 */
export function newGuid(): Guid {
  return v4();
}
