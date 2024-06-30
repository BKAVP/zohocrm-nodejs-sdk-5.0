import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FormListRelationFilter } from "../form/FormListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type OrganizationWhereInput = {
  address?: StringNullableFilter;
  forms?: FormListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  state?: StateWhereUniqueInput;
  zipCode?: StringNullableFilter;
};
