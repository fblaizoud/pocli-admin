import {
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import transformDate from "./helpers/transformDate";
import { validateContent } from "./helpers/Validators";

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

export const FamilyMemberEventEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <ReferenceInput
        source="Adhérent"
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
  </Edit>
);
