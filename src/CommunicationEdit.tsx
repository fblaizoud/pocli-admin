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
      <TextInput source="object" />
      <TextInput source="content" />
      <DateInput source="date" />
      <ReferenceInput source="idAdmin" reference="admins" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={optionRenderer} />
      </ReferenceInput>
      <NumberInput source="isBanner" />
    </SimpleForm>
  </Edit>
);
