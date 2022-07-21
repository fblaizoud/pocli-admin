import { Datagrid, List, ListProps, TextField, ImageField } from "react-admin";

const DocumentList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" label="Nom du document" />
      <ImageField source="url" label="Image" />
    </Datagrid>
  </List>
);

export default DocumentList;
