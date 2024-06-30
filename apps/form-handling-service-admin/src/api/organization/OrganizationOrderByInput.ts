import { SortOrder } from "../../util/SortOrder";

export type OrganizationOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phoneNumber?: SortOrder;
  stateId?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
