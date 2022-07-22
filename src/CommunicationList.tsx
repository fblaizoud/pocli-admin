import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import BooleanNumField from "./helpers/BooleanNumField";

const CommunicationList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="object" label="Objet" />
      <TextField source="content" label="Contenu" />
      <DateField source="date" />
      <BooleanNumField source="isBanner" label="Affichage bannière" />
      <ReferenceField
        label="Administrateur"
        source="idAdmin"
        reference="admins"
      >
        <>
          <TextField source="firstname" /> <TextField source="lastname" />{" "}
          <TextField source="email" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default CommunicationList;
