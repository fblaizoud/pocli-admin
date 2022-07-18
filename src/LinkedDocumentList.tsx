import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const LinkedDocumentList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField
        label="Document"
        source="idDocument"
        reference="documents"
      >
        <>
          <TextField source="name" />
          <TextField source="url" />
        </>
      </ReferenceField>

      <ReferenceField label="Event" source="idEvent" reference="events">
        <>
          <TextField source="description" />
          <DateField source="date" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Communication"
        source="idCommunication"
        reference="communications"
      >
        <>
          <TextField source="object" />
          <DateField source="date" />
        </>
      </ReferenceField>
      <ReferenceField label="Family" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="FamilyMember"
        source="idFamilyMember"
        reference="familyMembers"
      >
        <>
          <TextField source="firstname" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default LinkedDocumentList;
