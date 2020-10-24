import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const UpdateOne = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // UpdateOne Logic here
    const finalDataToSend = {
      message: "updated",
      updatedData: ["Lorem", "Ipsum"],
    };
    const data = new ResponseStructure(finalDataToSend, false);
    return data;
  } catch (error) {
    const data = new ResponseStructure([], true, error.message);
    return data;
  }
};

export default UpdateOne;
