import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

const FamilyMemberList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField label="Family" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <TextField source="firstname" />
      <DateField source="birthday" />
      <TextField source="avatar" />
    </Datagrid>
  </List>
);

export default FamilyMemberList;
