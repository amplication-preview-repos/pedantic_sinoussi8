import { Domain } from "../domain/Domain";
import { User } from "../user/User";

export type Account = {
  createdAt: Date;
  domains?: Array<Domain>;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
