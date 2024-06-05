import { DomainUpdateManyWithoutAccountsInput } from "./DomainUpdateManyWithoutAccountsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountUpdateInput = {
  domains?: DomainUpdateManyWithoutAccountsInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
