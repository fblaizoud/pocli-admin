import { ListProps, Create, SimpleForm, TextInput } from "react-admin";
import { validateContent, validateUrl } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

export const PartnerCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un document" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput
        source="name"
        label="Raison sociale"
        validate={validateContent}
      />
      <TextInput source="logo" label="Lien logo" validate={validateContent} />
      <TextInput source="link" label="Lien site web" validate={validateUrl} />
    </SimpleForm>
  </Create>
);
