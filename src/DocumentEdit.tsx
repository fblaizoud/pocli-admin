import {
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const DocumentEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="url" />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
