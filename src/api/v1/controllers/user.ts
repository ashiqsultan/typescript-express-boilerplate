import { Request, Response } from "express";
import Resource from "../../../Classes/Resource";
import ResponseStructure from "../../../Classes/ResponseStructure";

// const user = new Resource("user");

// user.customMethod01 = (req: Request, res: Response) => {
//   res.json({ response: "customMethod01" });
// };

class User extends Resource {
  constructor(readonly resourceName: string) {
    super(resourceName);
  }
  // sendResponse(data: ResponseStructure, res: Response) {
  //   super.sendResponse(data, res);
  // }
  customMethod(req: Request, res: Response) {
    try {
      // Logic for Custom Route
      const toSend = { message: "Lorem Ipsum custom response" };
      const responseData = new ResponseStructure(toSend, false);
      super.sendResponse(responseData, res);
    } catch (error) {
      const responseData = new ResponseStructure([], true, error.message);
      super.sendResponse(responseData, res);
    }
  }
}

const user = new User("user");
export default user;
