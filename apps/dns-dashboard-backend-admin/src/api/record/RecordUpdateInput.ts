import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";

export type RecordUpdateInput = {
  domain?: DomainWhereUniqueInput | null;
  typeField?: "Option1" | null;
  value?: string | null;
};
