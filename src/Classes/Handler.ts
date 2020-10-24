import { Request, Response, NextFunction } from "express";
import ResponseStructure from "./ResponseStructure";

interface Logic {
  /* Handler Logic function.
   * This is the main function which contains a logic for a route.
   * This function should return Promise<ResponseStructure>
   * This enforces the handler logic functions to be written in async mode
   * */
  (err?: any): Promise<ResponseStructure>;
}

class Handler {
  constructor(
    readonly name: string,
    public logic: Logic,
    public res: Response,
    public next: NextFunction
  ) {}

  async sendResponse() {
    /* sendResponse
     * Executes the Handler Logic and sends the response
     * All response other than 404 and 500 should be sent only using this method
     * */
    try {
      const responseToSend = await this.logic();
      this.res.send(responseToSend);
    } catch (error) {
      console.error(`Error caught in handler name: ${this.name}`);
      this.next(error);
    }
  }
}

export { Handler, Logic };
