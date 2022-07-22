import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import {
  validateMediumStringOnly,
  validateContent,
} from "./helpers/Validators";

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
      <TextInput
        multiline
        fullWidth
        source="object"
        label="Objet"
        validate={validateMediumStringOnly}
      />
      <TextInput
        fullWidth
        multiline
        source="content"
        label="Contenu"
        validate={validateContent}
      />
      <DateInput source="date" validate={validateContent} />
      <ReferenceInput
        label="Administrateur"
        source="idAdmin"
        reference="admins"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
