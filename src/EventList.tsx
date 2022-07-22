import {
  Datagrid,
  DateField,
  List,
  ListProps,
  ReferenceField,
  TextField,
  UrlField,
  NumberField,
} from "react-admin";
import BooleanNumField from "./helpers/BooleanNumField";

const EventList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField
        source="numberParticipantsMax"
        label="Limite de participants"
      />
      <DateField source="date" />
      <TextField source="description" />
      <TextField source="text" label="Texte" />
      <UrlField source="podcastLink" label="Lien podcast" />
      <BooleanNumField
        source="reservedAdherent"
        label="Reservé aux adhérents"
      />
      <NumberField
        source="price"
        label="Prix"
        options={{ style: "currency", currency: "EUR" }}
      />
      <ReferenceField
        label="Type de publication"
        source="idPostType"
        reference="postTypes"
      >
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Nom d'activité"
        source="idActivity"
        reference="activities"
      >
        <>
          "<TextField source="name" />" / <TextField source="category" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default EventList;
