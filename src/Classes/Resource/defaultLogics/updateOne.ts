import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";
import { Model, Document } from "mongoose";
const UpdateOne = async (
  req: Request,
  res: Response,
  dbModel: Model<Document>
): Promise<ResponseStructure> => {
  try {
    // Update one by ID
    let id = req.params.id;
    let dataToBeUpdated = req.body.data;
    console.log(JSON.stringify(dataToBeUpdated));
    const updateDocument = await dbModel
      .findByIdAndUpdate(id, { ...dataToBeUpdated }, { new: true })
      .exec();
    const response = new ResponseStructure({ updateDocument }, false);
    return response;
  } catch (error) {
    throw error;
  }
};

export default UpdateOne;
