import { DomainWhereUniqueInput } from "../domain/DomainWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RecordWhereInput = {
  domain?: DomainWhereUniqueInput;
  id?: StringFilter;
  typeField?: "Option1";
  value?: StringNullableFilter;
};
