import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  EmailField,
  NumberField,
} from "react-admin";

const FamilyList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="name" label="Nom" />
      <TextField source="streetNumber" label="N° de voie" />
      <TextField source="address" label="Adresse" />
      <NumberField source="phoneNumber" label="N° de téléphone" />
      <EmailField source="email" />
      <ReferenceField label="Ville" source="idCity" reference="cities">
        <>
          <TextField source="name" /> <TextField source="zipCode" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Régime social"
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
