import {
  Datagrid,
  DateField,
  List,
  ListProps,
  ReferenceField,
  TextField,
} from "react-admin";

const EventList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <TextField source="numberParticipantsMax" />
      <DateField source="date" />
      <TextField source="description" />
      <TextField source="text" />
      <TextField source="podcastLink" />
      <TextField source="reservedAdherent" />
      <TextField source="price" />

      <ReferenceField
        label="PostType"
        source="idPostType"
        reference="postTypes"
      >
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Activity"
        source="idActivity"
        reference="activities"
      >
        <>
          <TextField source="name" />
          <TextField source="category" />
          <TextField source="shortName" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default EventList;
