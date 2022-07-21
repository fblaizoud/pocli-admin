import {
  ListProps,
  Create,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  DateInput,
  NumberInput,
  FormDataConsumer,
} from "react-admin";
import { validateContent, validateNumber } from "./helpers/Validators";
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

export const PaymentRecordCreate = (props: ListProps) => (
  <Create
    title="Rajoutons un membre de la famille" // Rajoute un titre à la page
    actions={<PostEditActions />} // Rajoute des boutons personnalisés dans l'écran d'ajout
    {...props}
  >
    <SimpleForm warnWhenUnsavedChanges>
      <ReferenceInput
        source="idFamily"
        reference="families"
        label="Famille"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyRenderer} />
      </ReferenceInput>

      <ReferenceInput
        source="idFamilyMember"
        reference="familyMember"
        label="Adhérent"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={familyMemberRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idActivity"
        reference="activities"
        label="Activité"
        allowEmpty
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={activityRenderer} />
      </ReferenceInput>
      <ReferenceInput
        source="idPaymentMethod"
        reference="paymentMethods"
        label="Moyen de paiement"
      >
        {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
        <SelectInput optionText={paymentMethodRenderer} />
      </ReferenceInput>
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.idPaymentMethod === 11 && (
            <NumberInput
              source="checkNumber"
              label="N° de chèque"
              validate={validateContent}
              {...rest}
            />
          )
        }
      </FormDataConsumer>
      <NumberInput source="amount" label="Montant" validate={validateNumber} />
      <DateInput
        source="dateStart"
        label="Date de début"
        validate={validateContent}
      />
      <DateInput
        source="dateEnd"
        label="Date de fin"
        validate={validateContent}
      />
    </SimpleForm>
  </Create>
);
