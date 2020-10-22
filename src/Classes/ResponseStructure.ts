interface ResponseStructureType {
  // errorMessage is not mandatory because it contains data only if error object is true
  response: object;
  error: boolean;
  errorMessage?: string;
}

class ResponseStructure implements ResponseStructureType {
  /* 
    * While consuming the API in frontend or anywhere, always check for error value,
    * If its true then read errorMessage
    * Make sure to pass errorMessage if error value is true
  */
  constructor(
    public response: object,
    public error: boolean,
    public errorMessage?: string
  ) {}
  // get() {
  //   if (this.error) {
  //     return {
  //       response: this.response,
  //       error: this.error,
  //       errorMessage: this.errorMessage,
  //     };
  //   } else {
  //     return {
  //       response: this.response,
  //       error: this.error,
  //     };
  //   }
  // }
}

export default ResponseStructure;
