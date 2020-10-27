import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";
import { Model, Document } from "mongoose";
const findAll = async (
  req: Request,
  res: Response,
  dbModel: Model<Document>
): Promise<ResponseStructure> => {
  try {
    // FindOne Logic here
    const allData = await dbModel.find({}).exec();
    const response = new ResponseStructure(allData, false);
    return response;
  } catch (error) {
    throw error;
  }
};

export default findAll;
