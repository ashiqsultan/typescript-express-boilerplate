import { Request, Response, NextFunction } from "express";
import ResponseStructure from "../../../../../Classes/ResponseStructure";

const customLogic = async (
  req: Request,
  res: Response,
  resourceName: string
): Promise<ResponseStructure> => {
  try {
    // Logic for Custom Route
    const toSend = {
      message: `Lorem Ipsum custom response.\n Name of the resource ${resourceName}`,
    };
    const responseData = new ResponseStructure(toSend, false);
    return responseData;
  } catch (error) {
    const responseData = new ResponseStructure([], true, error.message);
    return responseData;
  }
};

export default customLogic;
