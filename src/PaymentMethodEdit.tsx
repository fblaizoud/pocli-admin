import { Edit, ListProps, maxLength, SimpleForm, TextInput } from "react-admin";
import { validateContent } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

const PaymentMethodEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    <SimpleForm>
      <TextInput
        source="name"
        label="Moyen de paiement"
        validate={validateContent}
      />
    </SimpleForm>
  </Edit>
);

export default PaymentMethodEdit;
