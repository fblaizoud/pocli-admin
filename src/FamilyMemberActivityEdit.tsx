import {
  DateInput,
  Edit,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export interface IFamilyMember {
  firstname: string;
}

export interface IActivity {
  name: string;
}

const familyMemberRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;

const activityRenderer = (activity: IActivity) => `${activity.name}`;

export const FamilyMemberActivityEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />

      <ReferenceInput
        source="idFamilyMember"
        reference="familyMembers"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idActivity" reference="activities" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={activityRenderer} />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);
