import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const createOne = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // Create Logic here
    // Test
    // throw new Error("Intentional messup");
    const finalDataToSend = { message: "createOne function executed" };
    const data = new ResponseStructure(finalDataToSend, false);
    return data;
  } catch (error) {
    const data = new ResponseStructure([], true, error.message);
    return data;
  }
};
export default createOne;
