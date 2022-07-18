import {
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const PaymentMethodEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);

export default PaymentMethodEdit;
