import { Datagrid, List, ListProps, TextField, EmailField } from "react-admin";

const AdminList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="firsname" />
      <TextField source="lastname" />
      <EmailField source="email" />
      <TextField source="password" />
    </Datagrid>
  </List>
);

export default AdminList;
