import { ListProps, Create, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "./PostEditActions";
import {
  validateMediumStringOnly,
  validateEmail,
  validatePassword,
} from "./helpers/Validators";

export const AdminCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un Admin" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput
        source="firstname"
        label="Prénom"
        validate={validateMediumStringOnly}
      />
      <TextInput
        source="lastname"
        label="Nom"
        validate={validateMediumStringOnly}
      />
      <TextInput source="email" validate={validateEmail} />
      <TextInput
        source="password"
        label="Mot de passe"
        validate={validatePassword}
      />
    </SimpleForm>
  </Create>
);
