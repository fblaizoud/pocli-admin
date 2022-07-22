import {
  Edit,
  FormDataConsumer,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

import { validateContent } from "./helpers/Validators";
import { useEffect, useState } from "react";

import { useWatch } from "react-hook-form";
import axios from "axios";

export interface IFamilyMember {
  firstname: string;
}

export interface IFamily {
  name: string;
  email: string;
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

export const CommunicationMemberEdit = (props: ListProps) => {
  const [value, setValue] = useState(1);
  const [members, setMembers] = useState([]);

  return (
    <Edit {...props} actions={<PostEditActions />}>
      {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
      <SimpleForm>
        <NumberInput source="id" disabled />
        <ReferenceInput
          source="idFamily"
          reference="families"
          onChange={(e) => setValue(e.target.value)}
          value={value}
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
          label="Communication"
          source="idCommunication"
          reference="communications"
          validate={validateContent}
        >
          {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
          <SelectInput optionText={communicationRenderer} />
        </ReferenceInput>
        <NumberInput source="isOpened" defaultValue={0} />
        <NumberInput source="isTrashed" defaultValue={0} />
      </SimpleForm>
    </Edit>
  );
};
