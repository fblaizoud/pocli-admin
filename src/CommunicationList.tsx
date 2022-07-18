import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const CommunicationList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="object" />
      <TextField source="content" />
      <DateField source="date" />
      <NumberField source="isBanner" />
      <ReferenceField label="Admin" source="idAdmin" reference="admins">
        <>
          <TextField source="firstname" /> <TextField source="lastname" />{" "}
          <TextField source="email" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default CommunicationList;
