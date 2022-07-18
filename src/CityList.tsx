import { Datagrid, List, ListProps, TextField } from "react-admin";

const CityList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" />
      <TextField source="zipCode" />
    </Datagrid>
  </List>
);

export default CityList;
