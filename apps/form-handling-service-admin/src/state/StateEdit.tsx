import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { FormTitle } from "../form/FormTitle";
import { OrganizationTitle } from "../organization/OrganizationTitle";

export const StateEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="forms"
          reference="Form"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FormTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="organizations"
          reference="Organization"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={OrganizationTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
