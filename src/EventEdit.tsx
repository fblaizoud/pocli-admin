import {
  DateInput,
  Edit,
  FormDataConsumer,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";
import {
  validateContent,
  validateMediumStringOnly,
  validateNumber,
  validateNumberOptional,
  validateUrl,
  validateUrlOptional,
} from "./helpers/Validators";

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
      <NumberInput
        source="numberParticipantsMax"
        label="Limite de participants"
        validate={validateNumberOptional}
        allowEmpty
      />
      <DateInput source="date" validate={validateContent} />
      <TextInput
        multiline
        fullWidth
        source="description"
        validate={validateMediumStringOnly}
      />
      <TextInput
        multiline
        fullWidth
        source="text"
        label="Texte"
        validate={validateContent}
      />
      <SelectInput
        source="reservedAdherent"
        label="Visibilité"
        defaultValue={0}
        choices={[
          { id: "1", name: "Reservé aux adhérents" },
          { id: "0", name: "Pour tous" },
        ]}
        validate={validateContent}
      />
      <NumberInput
        source="price"
        label="Prix"
        validate={validateNumberOptional}
      />
      <ReferenceInput
        label="Type de publication"
        source="idPostType"
        reference="postTypes"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={postTypeRenderer} />
      </ReferenceInput>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.idPostType === 1 ? (
            <ReferenceInput
              label="Type d'activité"
              source="idActivity"
              reference="activities"
              validate={validateContent}
              {...rest}
            >
              {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
              <SelectInput optionText={activityRenderer} />
            </ReferenceInput>
          ) : (
            formData.idPostType === 21 && (
              <TextInput
                source="podcastLink"
                label="Lien de podcast"
                validate={validateUrl}
                {...rest}
              />
            )
          )
        }
      </FormDataConsumer>
    </SimpleForm>
  </Edit>
);
