import { Edit, ListProps, maxLength, SimpleForm, TextInput } from "react-admin";
import { validateContent } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

const PartnerEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <TextInput
        source="name"
        label="Raison sociale"
        validate={validateContent}
      />
      <TextInput source="logo" label="Lien logo" validate={validateContent} />
      <TextInput
        source="link"
        label="Lien site web"
        validate={validateContent}
      />
    </SimpleForm>
  </Edit>
);

export default PartnerEdit;
