import { FormCreateNestedManyWithoutStatesInput } from "./FormCreateNestedManyWithoutStatesInput";
import { OrganizationCreateNestedManyWithoutStatesInput } from "./OrganizationCreateNestedManyWithoutStatesInput";

export type StateCreateInput = {
  forms?: FormCreateNestedManyWithoutStatesInput;
  name?: string | null;
  organizations?: OrganizationCreateNestedManyWithoutStatesInput;
};
