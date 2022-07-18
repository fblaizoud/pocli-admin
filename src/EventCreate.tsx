import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  DateInput,
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

export interface IActivity {
  name: string;
  category: string;
  shortName: string;
}

export interface IPostType {
  name: string;
}

const activityRenderer = (activity: IActivity) =>
  `${activity.name} ${activity.category} ${activity.shortName}`;

const postTypeRenderer = (postType: IPostType) => `${postType.name}`;

export const EventCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une event" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <NumberInput source="numberParticipantsMax" />
      <DateInput source="date" />
      <TextInput source="description" />
      <TextInput source="text" />
      <TextInput source="podcastLink" />
      <NumberInput source="reservedAdherent" />
      <NumberInput source="price" />

      <ReferenceInput source="idPostType" reference="postTypes" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={postTypeRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idActivity" reference="activities" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={activityRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
