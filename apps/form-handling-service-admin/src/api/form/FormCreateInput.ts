import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type FormCreateInput = {
  description?: string | null;
  name?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  state?: StateWhereUniqueInput | null;
};
