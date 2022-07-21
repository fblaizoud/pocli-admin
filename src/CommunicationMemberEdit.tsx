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

const familyMembersRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;

const familyRenderer = (family: IFamily) => `${family.name}`;
const communicationRenderer = (communication: ICommunication) =>
  `${communication.object} ${communication.content} ${communication.date}`;

export const CommunicationMemberEdit = (props: ListProps) => {
  const [value, setValue] = useState(1);
  const [members, setMembers] = useState([]);

  // useEffect(()=> {

  //   const getContent = async () => {
  //     const data = await axios.get('http://localhost:3001/api/familyMembers'),
  //     // setMembers(data);
  //     console.log(data)
  //   }

  //   getContent();

  // }, []);

  // const members = (members) =>
  //   members.map((member) => ({ id: member, name: member }));

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

        <FormDataConsumer>
          {({ formData, scopedFormData, getSource, ...rest }) => {
            console.log(formData.idFamily);
            console.log(scopedFormData);
            // console.log(getSource("firstname"));
            return (
              <ReferenceInput
                source="idFamilyMember"
                reference="familyMembers"
                label="adherent"
                // choices={
                //   !formData.idFamily ||
                //   members.filter(
                //     (member) => member.idFamily === formData.idFamily
                //   )
                // }
                validate={validateContent}
                {...rest}
              >
                {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
                <SelectInput optionText={familyMembersRenderer} />
              </ReferenceInput>
            );
          }}
        </FormDataConsumer>

        <ReferenceInput
          label="Prénom"
          source="name"
          reference="familyMembers"
          filterToQuery={(search) => ({ search, value })}
          allowEmpty
        >
          {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
          <SelectInput optionText={familyMembersRenderer} />
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
      </SimpleForm>
    </Edit>
  );
};
