import { Form } from "../form/Form";
import { Organization } from "../organization/Organization";

export type State = {
  createdAt: Date;
  forms?: Array<Form>;
  id: string;
  name: string | null;
  organizations?: Array<Organization>;
  updatedAt: Date;
};
