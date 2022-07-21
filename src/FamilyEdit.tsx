import {
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import {
  validateContent,
  validateEmail,
  validateNumber,
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

export const FamilyEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="name" label="Nom" validate={validateContent} />
      <NumberInput
        source="streetNumber"
        label="N° de voie"
        validate={validateNumber}
      />
      <TextInput source="address" label="Adresse" validate={validateContent} />
      <NumberInput
        source="phoneNumber"
        label="N° de téléphone"
        validate={validateNumber}
      />
      <TextInput source="email" validate={validateEmail} />
      <TextInput source="password" label="Mot de passe" allowEmpty />
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
  </Edit>
);
