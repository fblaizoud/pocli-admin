import {
  DateInput,
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
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

export const CommunicationEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput
        fullWidth
        multiline
        source="object"
        label="Objet"
        validate={validateMediumStringOnly}
      />
      <TextInput
        multiline
        fullWidth
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
  </Edit>
);
