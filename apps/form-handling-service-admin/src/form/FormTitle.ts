import { Form as TForm } from "../api/form/Form";

export const FORM_TITLE_FIELD = "name";

export const FormTitle = (record: TForm): string => {
  return record.name?.toString() || String(record.id);
};
