import { Request, Response, NextFunction } from "express";
import { Handler, Logic } from "../Handler";
import defaultLogics from "./defaultLogics/index";
import mongoose, { Model, Document } from "mongoose";

interface IResource {
  resourceName: string;
  mongooseModel: Model<Document>;
}

class Resource implements IResource {
  /* TODO
   * limit property (No of items returned from default find)
   * response display properties array (Model fields which should and should not be included in the find)
   */

  constructor(
    readonly resourceName: string,
    public mongooseModel: Model<Document>
  ) {}

  /* handlerBuilder is a function which constructs the resouce handlers
   * Any function inside the Resource Class which will be used as a handler for a route should call the handlerBuilder() function at the end.
   * Creates new handler instances and runs the sendResponse() function when a resource is called
   */
  handlerBuilder(
    name: string,
    logic: Logic,
    res: Response,
    next: NextFunction
  ): void {
    const handler = new Handler(name, logic, res, next);
    handler.sendResponse();
  }

  // createOne Handler
  createOne = (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "Create One";
    const logic = () => defaultLogics.createOne(req, res, this.mongooseModel);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  // findOne Handler
  findOne = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "findOne";
    const logic = () => defaultLogics.findOne(req, res, this.mongooseModel);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  // updateOne Handler
  updateOne = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "updateOne";
    const logic = () => defaultLogics.updateOne(req, res, this.mongooseModel);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  // deleteOne Handler
  deleteOne = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "deleteOne";
    const logic = () => defaultLogics.deleteOne(req, res, this.mongooseModel);
    this.handlerBuilder(handlerName, logic, res, next);
  };

  // findAll Handler
  findAll = async (req: Request, res: Response, next: NextFunction) => {
    const handlerName = "findAll";
    const logic = () => defaultLogics.findAll(req, res, this.mongooseModel);
    this.handlerBuilder(handlerName, logic, res, next);
  };
}
export default Resource;
