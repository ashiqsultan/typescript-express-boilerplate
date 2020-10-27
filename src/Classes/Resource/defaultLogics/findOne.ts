import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";
import { Model, Document } from "mongoose";

const findOne = async (
  req: Request,
  res: Response,
  dbModel: Model<Document>
): Promise<ResponseStructure> => {
  try {
    // FindOne Logic here
    let id = req.params.id;
    const document = await dbModel.findById(id).exec();
    const response = new ResponseStructure({ document }, false);
    return response;
  } catch (error) {
    throw error;
  }
};

export default findOne;
