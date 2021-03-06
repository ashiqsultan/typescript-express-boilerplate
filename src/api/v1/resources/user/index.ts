import { Request, Response, NextFunction } from "express";
import Resource from "../../../../Classes/Resource/Resource";
import ResponseStructure from "../../../../Classes/ResponseStructure";
import { customLogic } from "./handlers";
import UserModel from "../../../../models/User.model";

class User extends Resource {
  customCreate = (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "Custom Create";
    const logic = (): Promise<ResponseStructure> =>
      customLogic(req, res, this.resourceName);
    this.handlerBuilder(handlerName, logic, res, next);
  };
}

const user = new User("user", UserModel);

export default user;
