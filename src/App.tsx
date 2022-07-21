import * as React from "react";
import "./index.css";
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
import PeopleIcon from "@mui/icons-material/People";
import RowingIcon from "@mui/icons-material/Rowing";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import CelebrationIcon from "@mui/icons-material/Celebration";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ThreePIcon from "@mui/icons-material/ThreeP";
import EuroIcon from "@mui/icons-material/Euro";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import HandshakeIcon from "@mui/icons-material/Handshake";
import HealingIcon from "@mui/icons-material/Healing";
import ArtTrackIcon from "@mui/icons-material/ArtTrack";
import LocationCityIcon from "@mui/icons-material/LocationCity";

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
      options={{ label: "Activités" }}
      icon={RowingIcon}
    />

    <Resource
      name="familyMembers"
      list={FamilyMemberList}
      edit={FamilyMemberEdit}
      create={FamilyMemberCreate}
      options={{ label: "Adhérents" }}
      icon={PeopleIcon}
    />

    <Resource
      name="admins"
      list={AdminList}
      edit={AdminEdit}
      create={AdminCreate}
      options={{ label: "Administrateurs" }}
      icon={AdminPanelSettingsIcon}
    />

    <Resource
      name="documents"
      list={DocumentList}
      edit={DocumentEdit}
      create={DocumentCreate}
      icon={DocumentScannerIcon}
    />

    <Resource
      name="linkedDocuments"
      list={LinkedDocumentList}
      edit={LinkedDocumentEdit}
      create={LinkedDocumentCreate}
      options={{ label: "Documents liés" }}
      icon={FilePresentIcon}
    />

    <Resource
      name="paymentRecords"
      list={PaymentRecordList}
      edit={PaymentRecordEdit}
      create={PaymentRecordCreate}
      options={{ label: "Enregistrement adhésion" }}
      icon={AccountBalanceIcon}
    />

    <Resource
      name="events"
      list={EventList}
      edit={EventEdit}
      create={EventCreate}
      options={{ label: "Evènements" }}
      icon={CelebrationIcon}
    />

    <Resource
      name="families"
      list={FamilyList}
      edit={FamilyEdit}
      create={FamilyCreate}
      options={{ label: "Familles" }}
      icon={FamilyRestroomIcon}
    />

    <Resource
      name="familyMemberEvents"
      list={FamilyMemberEventList}
      edit={FamilyMemberEventEdit}
      create={FamilyMemberEventCreate}
      options={{ label: "Inscriptions évènements" }}
      icon={HowToRegIcon}
    />

    <Resource
      name="communications"
      list={CommunicationList}
      edit={CommunicationEdit}
      create={CommunicationCreate}
      options={{ label: "Messages" }}
      icon={MailOutlineIcon}
    />

    <Resource
      name="communicationMembers"
      list={CommunicationMemberList}
      edit={CommunicationMemberEdit}
      create={CommunicationMemberCreate}
      options={{ label: "Messages adhérents" }}
      icon={ThreePIcon}
    />

    <Resource
      name="paymentMethods"
      list={PaymentMethodList}
      edit={PaymentMethodEdit}
      create={PaymentMethodCreate}
      options={{ label: "Moyens de paiement" }}
      icon={EuroIcon}
    />

    <Resource
      name="newsletters"
      list={NewsletterList}
      edit={NewsletterEdit}
      create={NewsletterCreate}
      icon={NewspaperIcon}
    />

    <Resource
      name="partners"
      list={PartnerList}
      edit={PartnerEdit}
      create={PartnerCreate}
      options={{ label: "Partenaires" }}
      icon={HandshakeIcon}
    />

    <Resource
      name="recipients"
      list={RecipientList}
      options={{ label: "Raisons sociales" }}
      icon={HealingIcon}
    />

    <Resource
      name="postTypes"
      list={PostTypeList}
      options={{ label: "Types de publication" }}
      icon={ArtTrackIcon}
    />

    <Resource
      name="cities"
      list={CityList}
      edit={CityEdit}
      create={CityCreate}
      options={{ label: "Villes" }}
      icon={LocationCityIcon}
    />
  </Admin>
);

export default App;
