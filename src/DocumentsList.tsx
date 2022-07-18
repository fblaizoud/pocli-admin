import { Datagrid, List, ListProps, TextField } from "react-admin";

const DocumentList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" />
      <TextField source="url" />
    </Datagrid>
  </List>
);

export default DocumentList;
