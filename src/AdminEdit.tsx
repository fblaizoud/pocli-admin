import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import {
  validateMediumStringOnly,
  validateEmail,
  validatePasswordOptional,
} from "./helpers/Validators";

export const AdminEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
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
        validate={validatePasswordOptional}
        allowEmpty
      />
    </SimpleForm>
  </Edit>
);
