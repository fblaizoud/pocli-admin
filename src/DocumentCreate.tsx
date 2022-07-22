import { ListProps, Create, SimpleForm, TextInput } from "react-admin";
import { PostEditActions } from "./PostEditActions";

import { validateMediumStringOnly, validateUrl } from "./helpers/Validators";

export const DocumentCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un document" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput
        source="name"
        label="Nom du document"
        validate={validateMediumStringOnly}
      />
      <TextInput source="url" label="Source" />
    </SimpleForm>
  </Create>
);
