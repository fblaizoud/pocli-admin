import {
  ListProps,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import transformDate from "./helpers/transformDate";
import { validateContent } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

export interface IFamilyMember {
  firstname: string;
}

export interface IEvent {
  description: string;
  date: string;
}

const familyMemberRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;

const eventRenderer = (event: IEvent) =>
  `${transformDate(event.date)} ${event.description}`;

export const FamilyMemberEventCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un évènement pour un membre" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput
        source="idFamilyMember"
        reference="familyMembers"
        label="Adhérent"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idEvent"
        reference="events"
        label="Evènement"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={eventRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
