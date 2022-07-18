import * as React from "react";
import { Admin, Resource, fetchUtils, EditGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import authProvider from "./authProvider";
import CityList from "./CityList";
import CityEdit from "./CityEdit";
import { CityCreate } from "./CityCreate";
import FamilyList from "./FamilyList";
import RecipientList from "./RecipientList";
import { FamilyEdit } from "./FamilyEdit";
import { FamilyCreate } from "./FamilyCreate";
import AdminList from "./AdminList";
import { AdminEdit } from "./AdminEdit";
import { AdminCreate } from "./AdminCreate";
import CommunicationList from "./CommunicationList";
import { CommunicationEdit } from "./CommunicationEdit";
import { CommunicationCreate } from "./CommunicationCreate";
import ActivityList from "./ActivityList";
import { ActivityEdit } from "./ActivityEdit";
import { ActivityCreate } from "./ActivityCreate";
import PostTypeList from "./PostTypeList";
import EventList from "./EventList";
import { EventCreate } from "./EventCreate";
import { EventEdit } from "./EventEdit";
import FamilyMemberList from "./FamilyMemberList";
import { FamilyMemberCreate } from "./FamilyMemberCreate";
import { FamilyMemberEdit } from "./FamilyMemberEdit";
import CommunicationMemberList from "./CommunicationMemberList";
import { CommunicationMemberEdit } from "./CommunicationMemberEdit";
import { CommunicationMemberCreate } from "./CommunicationMemberCreate";
import DocumentList from "./DocumentsList";
import DocumentEdit from "./DocumentEdit";
import { DocumentCreate } from "./DocumentCreate";
import PaymentMethodList from "./PaymentMethodList";
import PaymentMethodEdit from "./PaymentMethodEdit";
import { PaymentMethodCreate } from "./PaymentMethodCreate";
import PaymentRecordList from "./PaymentRecordList";
import { PaymentRecordEdit } from "./PaymentRecordEdit";
import { PaymentRecordCreate } from "./PaymentRecordCreate";
import LinkedDocumentList from "./LinkedDocumentList";
import { LinkedDocumentEdit } from "./LinkedDocumentEdit";
import { LinkedDocumentCreate } from "./LinkedDocumentCreate";
import PartnerList from "./PartnerList";
import PartnerEdit from "./PartnerEdit";
import { PartnerCreate } from "./PartnerCreate";
import NewsletterList from "./NewsletterList";
import NewsletterEdit from "./NewsletterEdit";
import { NewsletterCreate } from "./NewsletterCreate";
import FamilyMemberEventList from "./FamilyMemberEventList";
import { FamilyMemberEventEdit } from "./FamilyMemberEventEdit";
import { FamilyMemberEventCreate } from "./FamilyMemberEventCreate";
import FamilyMemberActivityList from "./FamilyMemberActivityList";
import { FamilyMemberActivityEdit } from "./FamilyMemberActivityEdit";
import { FamilyMemberActivityCreate } from "./FamilyMemberActivityCreate";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
  const { token } = JSON.parse(localStorage.getItem("auth") || "");
  options.headers.set("Authorization", `${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = simpleRestProvider(
  "http://localhost:3001/api",
  httpClient
);
const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource
      name="activities"
      list={ActivityList}
      edit={ActivityEdit}
      create={ActivityCreate}
    />

    <Resource
      name="admins"
      list={AdminList}
      edit={AdminEdit}
      create={AdminCreate}
    />

    <Resource
      name="cities"
      list={CityList}
      edit={CityEdit}
      create={CityCreate}
    />

    <Resource
      name="communications"
      list={CommunicationList}
      edit={CommunicationEdit}
      create={CommunicationCreate}
    />

    <Resource
      name="communicationMembers"
      list={CommunicationMemberList}
      edit={CommunicationMemberEdit}
      create={CommunicationMemberCreate}
    />

    <Resource
      name="documents"
      list={DocumentList}
      edit={DocumentEdit}
      create={DocumentCreate}
    />

    <Resource
      name="events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
    />

    <Resource
      name="families"
      list={FamilyList}
      edit={FamilyEdit}
      create={FamilyCreate}
    />

    <Resource
      name="familyMembers"
      list={FamilyMemberList}
      edit={FamilyMemberEdit}
      create={FamilyMemberCreate}
    />

    <Resource
      name="familyMemberActivities"
      list={FamilyMemberActivityList}
      edit={FamilyMemberActivityEdit}
      create={FamilyMemberActivityCreate}
    />

    <Resource
      name="familyMemberEvents"
      list={FamilyMemberEventList}
      edit={FamilyMemberEventEdit}
      create={FamilyMemberEventCreate}
    />

    <Resource
      name="linkedDocuments"
      list={LinkedDocumentList}
      edit={LinkedDocumentEdit}
      create={LinkedDocumentCreate}
    />

    <Resource
      name="newsletters"
      list={NewsletterList}
      edit={NewsletterEdit}
      create={NewsletterCreate}
    />

    <Resource
      name="partners"
      list={PartnerList}
      edit={PartnerEdit}
      create={PartnerCreate}
    />

    <Resource
      name="paymentMethods"
      list={PaymentMethodList}
      edit={PaymentMethodEdit}
      create={PaymentMethodCreate}
    />

    <Resource
      name="paymentRecords"
      list={PaymentRecordList}
      edit={PaymentRecordEdit}
      create={PaymentRecordCreate}
    />

    <Resource name="postTypes" list={PostTypeList} />

    <Resource name="recipients" list={RecipientList} />
  </Admin>
);

export default App;
