import { Request, Response } from "express";
import Resource from "../../../Classes/Resource/Resource";

class Contact extends Resource {}

const contact = new Contact("contact");
export default contact;
