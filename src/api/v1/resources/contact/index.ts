import Resource from "../../../../Classes/Resource/Resource";
import ContactModel from "../../../../models/Contact.model";

class Contact extends Resource {}

const contact = new Contact("contact", ContactModel);

export default contact;
