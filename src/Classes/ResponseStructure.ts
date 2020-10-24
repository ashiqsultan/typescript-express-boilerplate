interface ResponseStructureType {
  // error is not mandatory because it contains data only if isError is true
  response: object;
  isError: boolean;
  error?: Error;
}

class ResponseStructure implements ResponseStructureType {
  /*
   * While consuming the API in frontend or anywhere, always check for isError value,
   * If its true then read error
   * Make sure to pass error if error value is true
   */
  constructor(
    public response: object,
    public isError: boolean,
    public errorMessage?: string
  ) {}
}

export default ResponseStructure;
