import {
  Datagrid,
  DateField,
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
      <ReferenceField
        label="Moyen de paiement"
        source="idPaymentMethod"
        reference="paymentMethods"
      >
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <NumberField source="checkNumber" label="N° de chèque" />
      <DateField source="dateStart" label="Date de début" />
      <DateField source="dateEnd" label="Date de fin" />
      <NumberField
        source="amount"
        label="Montant"
        options={{ style: "currency", currency: "EUR" }}
      />
      <ReferenceField label="Famille" source="idFamily" reference="families">
        <>
          <TextField source="name" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Adhérent"
        source="idFamilyMember"
        reference="familyMembers"
      >
        <>
          <TextField source="firstname" />
        </>
      </ReferenceField>
      <ReferenceField
        label="Activité"
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
