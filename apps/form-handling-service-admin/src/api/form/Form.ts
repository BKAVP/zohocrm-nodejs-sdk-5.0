import { Organization } from "../organization/Organization";
import { State } from "../state/State";

export type Form = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  organization?: Organization | null;
  state?: State | null;
  updatedAt: Date;
};
