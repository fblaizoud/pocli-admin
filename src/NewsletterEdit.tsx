import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { validateEmail } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

const NewsletterEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="email" validate={validateEmail} />
    </SimpleForm>
  </Edit>
);

export default NewsletterEdit;
