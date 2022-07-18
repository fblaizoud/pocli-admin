import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

// const optionRenderer = (user: IUser) => `${user.firstname} ${user.lastname}`;

export const PaymentMethodCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un moyen de paiement" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" />
    </SimpleForm>
  </Create>
);
