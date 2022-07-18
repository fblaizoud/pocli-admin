import { Datagrid, List, ListProps, TextField } from "react-admin";

const NewsletterList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="email" />
    </Datagrid>
  </List>
);

export default NewsletterList;
