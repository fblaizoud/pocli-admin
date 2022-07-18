import {
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const CityEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" />
      <TextInput source="zipCode" validate={maxLength(5)} />
    </SimpleForm>
  </Edit>
);

export default CityEdit;
