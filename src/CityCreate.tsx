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
  NumberInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

export default interface IUser {
  firstname: string;
  lastname: string;
}

// const optionRenderer = (user: IUser) => `${user.firstname} ${user.lastname}`;

export const CityCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une ville" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="city" validate={validatePostalCode} />
      <NumberInput source="zipCode" validate={validateCity} />
    </SimpleForm>
  </Create>
);
