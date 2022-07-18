import {
  DateInput,
  Edit,
  ListProps,
  minLength,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
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
      <TextInput source="name" />
      <NumberInput source="streetNumber" />
      <TextInput source="address" />
      <NumberInput source="phoneNumber" />
      <TextInput source="email" />
      <TextInput source="password" validate={minLength(8)} />
      <ReferenceInput source="idCity" reference="cities" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={cityRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idRecipient" reference="recipients" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={recipientRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
