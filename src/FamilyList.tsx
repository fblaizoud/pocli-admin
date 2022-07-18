import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  EmailField,
} from "react-admin";

const FamilyList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" />
      <TextField source="streetNumber" />
      <TextField source="address" />
      <EmailField source="email" />

      <ReferenceField label="City" source="idCity" reference="cities">
        <>
          <TextField source="name" /> <TextField source="zipCode" />
        </>
      </ReferenceField>
      <TextField source="password" />
      <ReferenceField
        label="Recipient"
        source="idRecipient"
        reference="recipients"
      >
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default FamilyList;
