import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";
import { Model, Document } from "mongoose";
const createOne = async (
  req: Request,
  res: Response,
  dbModel: Model<Document>
): Promise<ResponseStructure> => {
  try {
    // TODO
    // Make sure whats not in the model if passed in the body is not being saved
    let dataToBeCreated = req.body.data;
    let newDocument = new dbModel(dataToBeCreated);
    const createdData = await newDocument.save();
    const response = new ResponseStructure(createdData, false);
    return response;
  } catch (error) {
    throw error;
  }
};
export default createOne;
