import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const findOne = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // FindOne Logic here
    const finalDataToSend = {
      message: "Found one item",
      property: { name: "lorem", value: "Ipsum" },
    };
    const data = new ResponseStructure(finalDataToSend, false);
    return data;
  } catch (error) {
    const data = new ResponseStructure([], true, error.message);
    return data;
  }
};

export default findOne;
