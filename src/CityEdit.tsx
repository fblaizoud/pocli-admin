import {
  Edit,
  ListProps,
  NumberInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import { validateCityName, validatePostalCode } from "./helpers/Validators";

const CityEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" label="Nom" validate={validateCityName} />
      <NumberInput
        source="zipCode"
        label="Code postal"
        validate={validatePostalCode}
      />
    </SimpleForm>
  </Edit>
);

export default CityEdit;
