import {
  Datagrid,
  List,
  ListProps,
  ReferenceField,
  TextField,
  NumberField,
  DateField,
} from "react-admin";

const FamilyMemberEventList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField
        label="Adhérent"
        source="idFamilyMember"
        reference="familyMembers"
      >
        <>
          <TextField source="firstname" />{" "}
          <ReferenceField
            label="Famille"
            source="idFamily"
            reference="families"
          >
            <>
              <TextField source="name" />
            </>
          </ReferenceField>
        </>
      </ReferenceField>
      <ReferenceField label="Evènement" source="idEvent" reference="events">
        <>
          <DateField source="date" /> - <TextField source="description" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default FamilyMemberEventList;
