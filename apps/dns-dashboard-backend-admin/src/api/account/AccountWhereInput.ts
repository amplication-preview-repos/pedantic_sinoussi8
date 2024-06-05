import { DomainListRelationFilter } from "../domain/DomainListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type AccountWhereInput = {
  domains?: DomainListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
