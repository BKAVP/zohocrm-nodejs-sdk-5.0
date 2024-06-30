import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ORGANIZATION_TITLE_FIELD } from "../organization/OrganizationTitle";
import { STATE_TITLE_FIELD } from "./StateTitle";

export const StateShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Form" target="stateId" label="Forms">
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
        <ReferenceManyField
          reference="Organization"
          target="stateId"
          label="Organizations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
