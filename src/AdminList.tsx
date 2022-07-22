import { Datagrid, List, ListProps, TextField, EmailField } from "react-admin";

const AdminList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="firstname" label="Prénom" />
      <TextField source="lastname" label="Nom" />
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export default AdminList;
