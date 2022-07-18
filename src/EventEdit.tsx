import {
  DateInput,
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

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

export const EventEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <TextInput source="numberParticipantsMax" />
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
  </Edit>
);
