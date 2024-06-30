import { FormCreateNestedManyWithoutOrganizationsInput } from "./FormCreateNestedManyWithoutOrganizationsInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type OrganizationCreateInput = {
  address?: string | null;
  forms?: FormCreateNestedManyWithoutOrganizationsInput;
  name?: string | null;
  phoneNumber?: string | null;
  state?: StateWhereUniqueInput | null;
  zipCode?: string | null;
};
