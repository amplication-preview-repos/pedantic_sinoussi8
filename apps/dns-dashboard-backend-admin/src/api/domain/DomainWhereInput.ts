import { AccountWhereUniqueInput } from "../account/AccountWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RecordListRelationFilter } from "../record/RecordListRelationFilter";

export type DomainWhereInput = {
  account?: AccountWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
  records?: RecordListRelationFilter;
};
