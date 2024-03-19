import { CustomerUsForm } from "interfaces/components/info.interfaces";

export interface ContactUsPayload {
  name: CustomerUsForm["name"]["value"];
  contact: CustomerUsForm["contact"]["value"];
  comment: CustomerUsForm["comment"]["value"];
  category: CustomerUsForm["options"]["category"];
  preference: CustomerUsForm["options"]["contact"];
}
