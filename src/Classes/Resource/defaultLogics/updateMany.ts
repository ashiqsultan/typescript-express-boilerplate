import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const UpdateMany = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // UpdateMany Logic here
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

export default UpdateMany;
