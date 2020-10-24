import { Request, Response, NextFunction } from "express";
import Resource from "../../../Classes/Resource/Resource";
import ResponseStructure from "../../../Classes/ResponseStructure";

const customMethod = async (
  req: Request,
  res: Response,
  resourceName: string
): Promise<ResponseStructure> => {
  try {
    // Logic for Custom Route
    const toSend = {
      message: `Lorem Ipsum custom response.\n Name of the resource ${resourceName}`,
    };
    const responseData = new ResponseStructure(toSend, false);
    return responseData;
  } catch (error) {
    const responseData = new ResponseStructure([], true, error.message);
    return responseData;
  }
};

class User extends Resource {
  customCreate = (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "Custom Create";
    const logic = (): Promise<ResponseStructure> =>
      customMethod(req, res, this.resourceName);
    this.handlerBuilder(handlerName, logic, res, next);
  };
}

const user = new User("user");
export default user;
