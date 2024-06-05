import { DomainCreateNestedManyWithoutAccountsInput } from "./DomainCreateNestedManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountCreateInput = {
  domains?: DomainCreateNestedManyWithoutAccountsInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
