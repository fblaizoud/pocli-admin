import {
  Datagrid,
  DateField,
  EmailField,
  List,
  ListProps,
  NumberField,
  ReferenceField,
  TextField,
} from "react-admin";

const PaymentRecordList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      {/*  sortBy="addresses.id_address" /> */}
      <ReferenceField
        label="PaymentMethod"
        source="idPaymentMethod"
        reference="paymentMethods"
      >
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <NumberField source="checkNumber" />
      <DateField source="dateStart" />
      <DateField source="dateEnd" />
      <NumberField source="amount" />
      <ReferenceField label="Family" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="FamilyMember"
        source="idFamilyMember"
        reference="familyMembers"
      >
        <>
          <TextField source="firstname" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Activity"
        source="idActivity"
        reference="activities"
      >
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
    </Datagrid>
  </List>
);

export default PaymentRecordList;
