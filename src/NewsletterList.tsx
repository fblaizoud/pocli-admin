import { Datagrid, List, ListProps, TextField, EmailField } from "react-admin";

const NewsletterList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <EmailField source="email" />
    </Datagrid>
  </List>
);

export default NewsletterList;
