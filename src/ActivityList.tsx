import {
  Datagrid,
  FunctionField,
  List,
  ListProps,
  TextField,
} from "react-admin";

const ActivityList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" label="Activité" />
      <TextField source="category" label="Catégorie" />
    </Datagrid>
  </List>
);

export default ActivityList;
