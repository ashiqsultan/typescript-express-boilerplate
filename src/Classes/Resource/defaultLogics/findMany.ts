import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../ResponseStructure";

const findMany = async (
  req: Request,
  res: Response
): Promise<ResponseStructure> => {
  try {
    // FindOne Logic here
    const finalDataToSend = {
      message: ["Found Many many", "Found Many many", "Found Many many"],
      property: { name: "lorem", value: "Ipsum" },
    };
    const data = new ResponseStructure(finalDataToSend, false);
    return data;
  } catch (error) {
    const data = new ResponseStructure([], true, error.message);
    return data;
  }
};

export default findMany;
