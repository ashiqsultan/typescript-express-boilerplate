import { Request, Response, NextFunction } from "express";
import ResponseStructure from "./ResponseStructure";

interface GeneralRequestHandlers {
  createOne(req: Request, res: Response, next?: NextFunction): void;
  findOne(req: Request, res: Response, next?: NextFunction): void;
  updateOne(req: Request, res: Response, next?: NextFunction): void;
  deleteOne(req: Request, res: Response, next?: NextFunction): void;
  sendResponse(data: ResponseStructure, res: Response): void;
}

class Resource implements GeneralRequestHandlers {
  constructor(readonly resourceName: string) {}

  sendResponse(data: ResponseStructure, res: Response) {
    res.json(data);
  }
  createOne = async (req: Request, res: Response) => {
    try {
      // Create Logic here
      // Test
      // throw new Error("Intentional messup");
      const finalDataToSend = { message: "created" };
      const data = new ResponseStructure(finalDataToSend, false);
      this.sendResponse(data, res);
    } catch (error) {
      const data = new ResponseStructure([], true, error.message);
      this.sendResponse(data, res);
    }
  };
  findOne = (req: Request, res: Response) => {
    try {
      // FindOne Logic here
      const finalDataToSend = {
        message: "Found one",
        property: { name: "lorem", value: "Ipsum" },
      };
      const data = new ResponseStructure(finalDataToSend, false);
      this.sendResponse(data, res);
    } catch (error) {
      const data = new ResponseStructure([], true, error.message);
      this.sendResponse(data, res);
    }
  };
  updateOne = (req: Request, res: Response) => {
    try {
      // UpdateOne Logic here
      const finalDataToSend = {
        message: "updated",
        updatedData: ["Lorem", "Ipsum"],
      };
      const data = new ResponseStructure(finalDataToSend, false);
      this.sendResponse(data, res);
    } catch (error) {
      const data = new ResponseStructure([], true, error.message);
      this.sendResponse(data, res);
    }
  };
  deleteOne = (req: Request, res: Response) => {
    try {
      // DeleteOne Logic here
      const finalDataToSend = { message: "Deleted" };
      const data = new ResponseStructure(finalDataToSend, false);
      this.sendResponse(data, res);
    } catch (error) {
      const data = new ResponseStructure([], true, error.message);
      this.sendResponse(data, res);
    }
  };
}
export default Resource;
