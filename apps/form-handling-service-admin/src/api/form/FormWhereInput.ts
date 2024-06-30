import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type FormWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  organization?: OrganizationWhereUniqueInput;
  state?: StateWhereUniqueInput;
};
