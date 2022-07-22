import { ListProps, Create, SimpleForm, TextInput } from "react-admin";
import { validateEmail } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

export const NewsletterCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un document" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="email" validate={validateEmail} />
    </SimpleForm>
  </Create>
);
