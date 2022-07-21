import {
  ListProps,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  FormDataConsumer,
  DateInput,
  NumberInput,
} from "react-admin";
import transformDate from "./helpers/transformDate";
import { validateContent } from "./helpers/Validators";
import { PostEditActions } from "./PostEditActions";

export interface IFamilyMember {
  firstname: string;
}

export interface IFamily {
  name: string;
}

export interface IEvent {
  description: string;
  date: string;
}

export interface IDocument {
  name: string;
  url: string;
}

const familyMemberRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;
const familyRenderer = (family: IFamily) => `${family.name}`;
const eventRenderer = (event: IEvent) =>
  `${transformDate(event.date)} ${event.description}`;
const documentRenderer = (document: IDocument) => `${document.name}`;

export const LinkedDocumentCreate = (props: ListProps) => (
  <Create
    title="Rajoutons une communication pour un membre" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <SelectInput
        source="linkType"
        label="Type de liaison"
        choices={[
          { id: "family", name: "Lier un document à une famille" },
          { id: "familyMember", name: "Lier un document à un adhérent" },
          { id: "event", name: "Lier un document à un évènement" },
        ]}
      />

      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.linkType === "family" ? (
            <ReferenceInput
              source="idFamily"
              reference="families"
              label="Famille"
              validate={validateContent}
              {...rest}
            >
              {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
              <SelectInput optionText={familyRenderer} />
            </ReferenceInput>
          ) : formData.linkType === "familyMember" ? (
            <>
              <ReferenceInput
                source="idFamily"
                reference="families"
                label="Famille"
                validate={validateContent}
                {...rest}
              >
                {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
                <SelectInput optionText={familyRenderer} />
              </ReferenceInput>
              <ReferenceInput
                source="idFamilyMember"
                reference="familyMembers"
                label="Adhérent"
                validate={validateContent}
                {...rest}
              >
                {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
                <SelectInput optionText={familyMemberRenderer} />
              </ReferenceInput>
            </>
          ) : (
            formData.linkType === "event" && (
              <ReferenceInput
                source="idEvent"
                reference="events"
                label="Evènement"
                allowEmpty
              >
                {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
                <SelectInput optionText={eventRenderer} />
              </ReferenceInput>
            )
          )
        }
      </FormDataConsumer>

      <ReferenceInput
        source="idDocument"
        reference="documents"
        label="Document"
        validate={validateContent}
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={documentRenderer} />
      </ReferenceInput>
      <DateInput source="date" />
      <NumberInput
        source="isOpened"
        defaultValue={0}
        style={{ display: "none" }}
      />
    </SimpleForm>
  </Create>
);
