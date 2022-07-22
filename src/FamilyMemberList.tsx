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
      <TextField source="idFamily" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField label="Famille" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <TextField source="firstname" label="Prénom" />
      <DateField source="birthday" label="Date d'anniversaire" />
      <TextField source="avatar" />
    </Datagrid>
  </List>
);

export default FamilyMemberList;
