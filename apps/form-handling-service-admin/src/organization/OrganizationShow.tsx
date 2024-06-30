import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "./OrganizationTitle";
import { STATE_TITLE_FIELD } from "../state/StateTitle";

export const OrganizationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <ReferenceField label="State" source="state.id" reference="State">
          <TextField source={STATE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="zipCode" source="zipCode" />
        <ReferenceManyField
          reference="Form"
          target="organizationId"
          label="Forms"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <ReferenceField
              label="Organization"
              source="organization.id"
              reference="Organization"
            >
              <TextField source={ORGANIZATION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="State" source="state.id" reference="State">
              <TextField source={STATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
