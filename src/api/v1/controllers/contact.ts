import { Request, Response } from "express";
import Resource from "../../../Classes/Resource";

class Contact extends Resource {
  customMethod(req: Request, res: Response) {
    res.json({ response: "customMethodResponse" });
  }
}

const contact = new Contact("contact");
export default contact;