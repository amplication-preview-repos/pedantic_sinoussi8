import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { RecordCreateNestedManyWithoutDomainsInput } from "./RecordCreateNestedManyWithoutDomainsInput";

export type DomainCreateInput = {
  account?: AccountWhereUniqueInput | null;
  name?: string | null;
  records?: RecordCreateNestedManyWithoutDomainsInput;
};
