import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const deleteMany = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // DeleteOne Logic here
    const finalDataToSend = { message: "Deleted many" };
    const data = new ResponseStructure(finalDataToSend, false);
    return data;
  } catch (error) {
    const data = new ResponseStructure([], true, error.message);
    return data;
  }
};

export default deleteMany;
