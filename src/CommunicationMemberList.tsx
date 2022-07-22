import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import BooleanNumField from "./helpers/BooleanNumField";

const CommunicationMemberList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField
        label="Prénom"
        source="idFamilyMember"
        reference="familyMembers"
      >
        <>
          <TextField source="firstname" />
        </>
      </ReferenceField>
      <ReferenceField label="Nom" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Message"
        source="idCommunication"
        reference="communications"
      >
        <>
          <DateField source="date" /> - <TextField source="object" /> -{" "}
          <TextField source="content" />
        </>
      </ReferenceField>
      <BooleanNumField source="isOpened" label="Ouvert" />
    </Datagrid>
  </List>
);

export default CommunicationMemberList;
