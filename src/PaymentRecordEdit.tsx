import {
  DateInput,
  Edit,
  ListProps,
  maxLength,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

export interface IFamily {
  name: string;
}

export interface IFamilyMember {
  firstname: string;
}

export interface IActivity {
  name: string;
}

export interface IPaymentMethod {
  name: string;
}

const familyRenderer = (family: IFamily) => `${family.name}`;
const familyMemberRenderer = (familyMember: IFamilyMember) =>
  `${familyMember.firstname}`;
const activityRenderer = (activity: IActivity) => `${activity.name}`;
const paymentMethodRenderer = (paymentMethod: IPaymentMethod) =>
  `${paymentMethod.name}`;

export const PaymentRecordEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <ReferenceInput source="idFamily" reference="families" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idFamilyMember"
        reference="familyMember"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput source="idActivity" reference="activities" allowEmpty>
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={activityRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idPaymentMethod"
        reference="paymentMethods"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={paymentMethodRenderer} />
      </ReferenceInput>
      <NumberInput source="checkNumber" />
      <NumberInput source="amount" />
      <DateInput source="dateStart" />
      <DateInput source="dateEnd" />
    </SimpleForm>
  </Edit>
);
