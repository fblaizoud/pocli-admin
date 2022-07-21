import {
  Datagrid,
  List,
  ListProps,
  TextField,
  ImageField,
  UrlField,
} from "react-admin";

const PartnerList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" label="Raison sociale" />
      <ImageField source="logo" />
      <UrlField source="link" label="Site web" />
    </Datagrid>
  </List>
);

export default PartnerList;
