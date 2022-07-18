import { Datagrid, List, ListProps, TextField } from "react-admin";

const ActivityList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" />
      <TextField source="category" />
      <TextField source="shortName" />
    </Datagrid>
  </List>
);

export default ActivityList;
