import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { RecordUpdateManyWithoutDomainsInput } from "./RecordUpdateManyWithoutDomainsInput";

export type DomainUpdateInput = {
  account?: AccountWhereUniqueInput | null;
  name?: string | null;
  records?: RecordUpdateManyWithoutDomainsInput;
};
