import { Domain } from "../domain/Domain";

export type Record = {
  createdAt: Date;
  domain?: Domain | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
  value: string | null;
};
