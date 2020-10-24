import { Request, Response, NextFunction } from "express";
import Handler from "../Handler";
import ResponseStructure from "../ResponseStructure";
import createOne from "./defaultLogics/createOne";
import defaultLogics from "./defaultLogics/index";

class Resource {
  // TODO
  // limit property
  // response display properties in array
  constructor(readonly resourceName: string) {}

  handlerBuilder(name: string, logic:any, res: Response, next: NextFunction) {
    const handler = new Handler(name, logic, res, next);
    handler.sendResponse();
  }

  createOne = (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "Create One";
    const logic = () => defaultLogics.createOne(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  findOne = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "findOne";
    const logic = () => defaultLogics.findOne(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  updateOne = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "updateOne";
    const logic = () => defaultLogics.updateOne(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };
  deleteOne = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "deleteOne";
    const logic = () => defaultLogics.deleteOne(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  findMany = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "findMany";
    const logic = () => defaultLogics.findMany(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  updateMany = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "updateMany";
    const logic = () => defaultLogics.updateMany(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  deleteMany = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "deleteMany";
    const logic = () => defaultLogics.deleteMany(req, res);
    this.handlerBuilder(handlerName, logic, res, next);
  };
}
export default Resource;
