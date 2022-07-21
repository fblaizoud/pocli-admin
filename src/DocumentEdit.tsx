import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import { validateMediumStringOnly, validateUrl } from "./helpers/Validators";

const DocumentEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput
        source="name"
        label="Nom du document"
        validate={validateMediumStringOnly}
      />
      <TextInput source="url" label="Source" validate={validateUrl} />
    </SimpleForm>
  </Edit>
);

export default DocumentEdit;
