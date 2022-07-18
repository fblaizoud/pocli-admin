import {
  DateInput,
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
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
      <ReferenceInput source="idFamily" reference="families" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <TextInput source="firstname" />
      <DateInput source="birthday" />
      <TextInput source="avatar" />
    </SimpleForm>
  </Edit>
);
