import { FormListRelationFilter } from "../form/FormListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrganizationListRelationFilter } from "../organization/OrganizationListRelationFilter";

export type StateWhereInput = {
  forms?: FormListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  organizations?: OrganizationListRelationFilter;
};
