interface IResponseStructure {
  // error is not mandatory because it contains data only if isError is true
  response: object;
  isError: boolean;
  errorMessage?: string;
}

class ResponseStructure implements IResponseStructure {
  /*
   * While consuming the API in frontend or anywhere, always check for isError value,
   * If its true then read error
   * Make sure to pass error if error value is true
   */
  constructor(
    readonly response: object,
    readonly isError: boolean,
    readonly errorMessage?: string
  ) {}
}

export default ResponseStructure;
