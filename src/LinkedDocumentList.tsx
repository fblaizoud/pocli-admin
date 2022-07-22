import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  ImageField,
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
          <ImageField source="url" />
        </>
      </ReferenceField>

      <ReferenceField label="Evènement" source="idEvent" reference="events">
        <>
          <DateField source="date" /> - <TextField source="description" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Message"
        source="idCommunication"
        reference="communications"
      >
        <>
          <DateField source="date" /> - <TextField source="object" />
        </>
      </ReferenceField>
      <ReferenceField label="Famille" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Adhérent"
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
