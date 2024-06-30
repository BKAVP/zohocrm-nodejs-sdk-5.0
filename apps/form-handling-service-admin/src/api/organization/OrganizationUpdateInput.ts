import { FormUpdateManyWithoutOrganizationsInput } from "./FormUpdateManyWithoutOrganizationsInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type OrganizationUpdateInput = {
  address?: string | null;
  forms?: FormUpdateManyWithoutOrganizationsInput;
  name?: string | null;
  phoneNumber?: string | null;
  state?: StateWhereUniqueInput | null;
  zipCode?: string | null;
};
