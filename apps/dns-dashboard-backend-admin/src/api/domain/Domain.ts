import { Account } from "../account/Account";
import { Record } from "../record/Record";

export type Domain = {
  account?: Account | null;
  createdAt: Date;
  id: string;
  name: string | null;
  records?: Array<Record>;
  updatedAt: Date;
};
