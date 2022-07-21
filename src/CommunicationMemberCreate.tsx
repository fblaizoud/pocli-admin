import {
  ListProps,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";
import { validateContent } from "./helpers/Validators";

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

export const CommunicationMemberCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une communication pour un membre" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput
        source="idFamily"
        reference="families"
        label="Nom"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idFamilyMember"
        reference="familyMembers"
        label="Prénom"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idCommunication"
        reference="communications"
        label="Communication"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={communicationRenderer} />
      </ReferenceInput>
      <NumberInput
        source="isOpened"
        defaultValue={0}
        style={{ display: "none" }}
      />
      <NumberInput
        source="isTrashed"
        defaultValue={0}
        style={{ display: "none" }}
      />
    </SimpleForm>
  </Create>
);
