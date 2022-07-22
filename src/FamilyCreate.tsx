import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import {
  validateContent,
  validateEmail,
  validateLongStringOnly,
  validateMediumStringOnly,
  validateNumber,
  validatePassword,
} from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

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
      <TextInput
        source="name"
        label="Nom"
        validate={validateMediumStringOnly}
      />
      <NumberInput
        source="streetNumber"
        label="N° de voie"
        validate={validateNumber}
      />
      <TextInput
        source="address"
        label="Adresse"
        validate={validateLongStringOnly}
      />
      <NumberInput
        source="phoneNumber"
        label="N° de téléphone"
        validate={validateNumber}
      />
      <TextInput source="email" validate={validateEmail} />
      <TextInput
        source="password"
        validate={validatePassword}
        label="Mot de passe"
      />
      <ReferenceInput
        source="idCity"
        reference="cities"
        label="Ville"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={cityRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idRecipient"
        reference="recipients"
        label="Régime social"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={recipientRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
