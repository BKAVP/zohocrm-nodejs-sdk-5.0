import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { FormTitle } from "../form/FormTitle";
import { StateTitle } from "../state/StateTitle";

export const OrganizationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <ReferenceArrayInput
          source="forms"
          reference="Form"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <ReferenceInput source="state.id" reference="State" label="State">
          <SelectInput optionText={StateTitle} />
        </ReferenceInput>
        <TextInput label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
