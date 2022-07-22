import {
  DateInput,
  Edit,
  FormDataConsumer,
  ListProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
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

export const PaymentRecordEdit = (props: ListProps) => (
  <Edit {...props} actions={<PostEditActions />}>
    {/* Rajoute des boutons personnalisés dans l'écran d'ajout */}
    <SimpleForm>
      <NumberInput source="id" disabled />
      <SelectInput
        source="recordType"
        label="Type d'adhésion"
        choices={[
          { id: "familyRecord", name: "Adhésion famille" },
          { id: "familyMemberRecord", name: "Adhésion membre" },
        ]}
      />
      {/* <div className="MuiInputBase-root MuiFilledInput-root MuiFilledInput-underline MuiInputBase-formControl MuiInputBase-marginDense MuiFilledInput-marginDense"><div className="MuiSelect-root MuiSelect-select MuiSelect-selectMenu MuiSelect-filled MuiInputBase-input MuiFilledInput-input MuiInputBase-inputMarginDense MuiFilledInput-inputMarginDense" tabIndex={0} role="button" aria-haspopup="listbox"><span>​</span></div><input aria-hidden="true" tabindex="-1" class="MuiSelect-nativeInput" value="[object Object]"><svg class="MuiSvgIcon-root MuiSelect-icon MuiSelect-iconFilled" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"></path></svg></div> */}
      <FormDataConsumer>
        {({ formData, ...rest }) =>
          formData.recordType === "familyRecord" ? (
            <ReferenceInput
              source="idFamily"
              reference="families"
              label="Famille"
              validate={validateContent}
              {...rest}
            >
              {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
              <SelectInput optionText={familyRenderer} />
            </ReferenceInput>
          ) : (
            formData.recordType === "familyMemberRecord" && (
              <>
                <ReferenceInput
                  source="idFamilyMember"
                  reference="familyMembers"
                  label="Adhérent"
                  validate={validateContent}
                  {...rest}
                >
                  {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
                  <SelectInput optionText={familyMemberRenderer} />
                </ReferenceInput>
                <ReferenceInput
                  source="idActivity"
                  reference="activities"
                  label="Activité"
                  validate={validateContent}
                  {...rest}
                >
                  {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
                  <SelectInput optionText={activityRenderer} />
                </ReferenceInput>
              </>
            )
          )
        }
      </FormDataConsumer>

      {/* Ceci permet de faire une liste déroulante qui va aller afficher le résultat de la fonction optionRenderer : firstname lastname */}
      <NumberInput source="amount" label="Montant" validate={validateNumber} />

      <ReferenceInput
        source="idPaymentMethod"
        reference="paymentMethods"
        label="Moyen de paiement"
        validate={validateContent}
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
  </Edit>
);
