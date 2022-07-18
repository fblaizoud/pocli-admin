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
  DateInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

export default interface IAdmin {
  firstname: string;
  lastname: string;
}

const optionRenderer = (admin: IAdmin) =>
  `${admin.firstname} ${admin.lastname}`;

export const CommunicationCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une communication" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="object" />
      <TextInput source="content" />
      <DateInput source="date" />
      <ReferenceInput source="idAdmin" reference="admins" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="isBanner" />
    </SimpleForm>
  </Create>
);
