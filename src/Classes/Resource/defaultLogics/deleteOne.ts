import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const deleteOne = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // DeleteOne Logic here
    const finalDataToSend = { message: "Deleted" };
    const data = new ResponseStructure(finalDataToSend, false);
    return data;
  } catch (error) {
    console.error(error);
    const data = new ResponseStructure([], true, error.message);
    return data;
  }
};

export default deleteOne;
