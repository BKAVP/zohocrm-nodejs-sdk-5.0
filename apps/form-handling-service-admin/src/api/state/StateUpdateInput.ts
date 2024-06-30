import { FormUpdateManyWithoutStatesInput } from "./FormUpdateManyWithoutStatesInput";
import { OrganizationUpdateManyWithoutStatesInput } from "./OrganizationUpdateManyWithoutStatesInput";

export type StateUpdateInput = {
  forms?: FormUpdateManyWithoutStatesInput;
  name?: string | null;
  organizations?: OrganizationUpdateManyWithoutStatesInput;
};
