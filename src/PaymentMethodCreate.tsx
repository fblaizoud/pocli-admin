import { ListProps, Create, SimpleForm, TextInput } from "react-admin";
import { validateContent } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

export const PaymentMethodCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un moyen de paiement" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput
        source="name"
        label="Moyen de paiement"
        validate={validateContent}
      />
    </SimpleForm>
  </Create>
);
