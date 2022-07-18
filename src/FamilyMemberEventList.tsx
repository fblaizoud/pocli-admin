import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const FamilyMemberEventList = (props: ListProps) => (
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
      <ReferenceField label="Event" source="idEvent" reference="events">
        <>
          <TextField source="description" />
          <TextField source="date" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default FamilyMemberEventList;
