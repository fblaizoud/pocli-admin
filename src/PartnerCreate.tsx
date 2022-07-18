import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

export const PartnerCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un document" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" />
      <TextInput source="logo" />
      <TextInput source="url" />
    </SimpleForm>
  </Create>
);
