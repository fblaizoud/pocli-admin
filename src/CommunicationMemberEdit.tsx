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

export interface IFamily {
  name: string;
}

export interface ICommunication {
  object: string;
  content: string;
  date: string;
}

const familyMemberRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;

const familyRenderer = (family: IFamily) => `${family.name}`;
const communicationRenderer = (communication: ICommunication) =>
  `${communication.object} ${communication.content} ${communication.date}`;

export const CommunicationMemberEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />

      <ReferenceInput source="idFamily" reference="families" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idFamilyMember"
        reference="familyMembers"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idCommunication"
        reference="communications"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={communicationRenderer} />
      </ReferenceInput>
      <NumberInput source="isOpened" />
    </SimpleForm>
  </Edit>
);
