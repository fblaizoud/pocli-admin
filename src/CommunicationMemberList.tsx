import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const CommunicationMemberList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField
        label="FamilyMember"
        source="idFamilyMember"
        reference="familyMembers"
      >
        <>
          <TextField source="firstname" />
        </>
      </ReferenceField>
      <ReferenceField label="Family" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Communication"
        source="idCommunication"
        reference="communications"
      >
        <>
          <TextField source="object" />
          <TextField source="content" />
          <DateField source="date" />
        </>
      </ReferenceField>
      <NumberField source="isOpened" />
    </Datagrid>
  </List>
);

export default CommunicationMemberList;
