import { SortOrder } from "../../util/SortOrder";

export type FormOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  organizationId?: SortOrder;
  stateId?: SortOrder;
  updatedAt?: SortOrder;
};
