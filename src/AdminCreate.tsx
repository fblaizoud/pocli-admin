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
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

export const AdminCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un Admin" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="email" />
      <TextInput source="password" />
    </SimpleForm>
  </Create>
);
