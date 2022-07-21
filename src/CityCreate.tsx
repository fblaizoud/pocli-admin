import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import { validateCityName, validatePostalCode } from "./helpers/Validators";

export const CityCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une ville" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" label="Nom" validate={validateCityName} />
      <NumberInput
        source="zipCode"
        label="Code postal"
        validate={validatePostalCode}
      />
    </SimpleForm>
  </Create>
);
