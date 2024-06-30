import { Form } from "../form/Form";
import { State } from "../state/State";

export type Organization = {
  address: string | null;
  createdAt: Date;
  forms?: Array<Form>;
  id: string;
  name: string | null;
  phoneNumber: string | null;
  state?: State | null;
  updatedAt: Date;
  zipCode: string | null;
};
