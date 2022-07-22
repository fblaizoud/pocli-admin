import { Datagrid, List, ListProps, TextField } from "react-admin";

const PaymentMethodList = (props: ListProps) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />

      <TextField source="name" label="Moyen de paiement" />
    </Datagrid>
  </List>
);

export default PaymentMethodList;
