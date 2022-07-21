import { Datagrid, List, ListProps, TextField } from "react-admin";

const RecipientList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" label="Régime social" />
    </Datagrid>
  </List>
);

export default RecipientList;
