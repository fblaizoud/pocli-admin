import {
  ListProps,
  Create,
  SimpleForm,
  TextInput,
  regex,
  Validator,
  required,
  minLength,
  maxLength,
  ReferenceInput,
  SelectInput,
  DateInput,
  NumberInput,
} from "react-admin";
import { PostEditActions } from "./PostEditActions";

const validateCity: Validator[] = [required(), minLength(2), maxLength(200)];
const validateAddress: Validator[] = [required(), minLength(2), maxLength(255)];
const validatePostalCode: Validator[] = [
  required(),
  regex(/^\d{5}$/, "Must be a valid Zip Code"),
];

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

export const PaymentRecordCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un membre de la famille" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
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
  </Create>
);
