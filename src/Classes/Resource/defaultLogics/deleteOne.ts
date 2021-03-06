import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";
import { Model, Document } from "mongoose";
const deleteOne = async (
  req: Request,
  res: Response,
  dbModel: Model<Document>
): Promise<ResponseStructure> => {
  try {
    // Update one by ID
    let id = req.params.id;
    const deleteOperation = await dbModel.findByIdAndDelete(id).exec();
    const response = new ResponseStructure({ deleteOperation }, false);
    return response;
  } catch (error) {
    throw error;
  }
};

export default deleteOne;
