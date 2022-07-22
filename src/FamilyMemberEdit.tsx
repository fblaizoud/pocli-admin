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
import {
  validateContent,
  validateMediumStringOnly,
  validateUrlOptional,
} from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

export default interface IFamily {
  name: string;
  email: string;
}

const optionRenderer = (family: IFamily) => `${family.name} ${family.email}`;

export const FamilyMemberEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <ReferenceInput
        source="idFamily"
        reference="families"
        label="Famille"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={validateMediumStringOnly}
      />
      <DateInput
        source="birthday"
        label="Date d'anniversaire"
        validate={validateContent}
      />
      <TextInput
        source="avatar"
        label="Lien d'avatar"
        validate={validateUrlOptional}
        allowEmpty
      />
    </SimpleForm>
  </Edit>
);
