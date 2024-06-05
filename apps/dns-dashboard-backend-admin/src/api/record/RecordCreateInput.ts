import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";

export type RecordCreateInput = {
  domain?: DomainWhereUniqueInput | null;
  typeField?: "Option1" | null;
  value?: string | null;
};
