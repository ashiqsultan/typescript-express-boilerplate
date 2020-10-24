import { Request, Response, NextFunction } from "express";
import ResponseStructure from "./ResponseStructure";

interface Logic {
  //(err?: any): Promise<ResponseStructure>;
  (): Promise<ResponseStructure>;
  //name: string;
}

class Handler {
  constructor(
    readonly name: string,
    public logic: Logic,
    public res: Response,
    public next: NextFunction
  ) {}

  // All response other than 404 and 500 should be sent only using this method
  async sendResponse() {
    try {
      const responseToSend = await this.logic();
      this.res.send(responseToSend);
    } catch (error) {
      console.error(`Error caught in handler name: ${this.name}`);
      this.next(error);
    }
  }
}

export default Handler;
