import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

export interface ICity {
  name: string;
  zipCode: number;
}

export interface IRecipient {
  name: string;
}

const cityRenderer = (city: ICity) => `${city.name} ${city.zipCode}`;
const recipientRenderer = (recipient: IRecipient) => `${recipient.name}`;

export const FamilyCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une famille" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <TextInput source="name" />
      <NumberInput source="streetNumber" />
      <TextInput source="address" />
      <NumberInput source="phoneNumber" />
      <TextInput source="mail" />
      <TextInput source="password" />
      <NumberInput source="idCity" />
      <NumberInput source="idRecipient" />
      <ReferenceInput source="idCity" reference="cities" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={cityRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idRecipient" reference="recipients" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={recipientRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
