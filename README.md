## Custom Types

- ResponseStructure
- Handlers
- Resourse

## ResponseStructure

- This is a JSON structure
- All client consumable responses sent from the server should be an instance of ResponseStructure

**Example Response**
Successful Response

```
const okResponse = new ResponseStructure(responseData, false);
{
    response: [
        {"item":"carrot","price":50},
        {"item":"onion","price":100}
    ],
    isError: false,
}
```

Error Response

```
const errorResponse = new ResponseStructure([], true, errorMessage);

{
    response: [],
    isError: true,
    errorMessage: "An Error Occured"
}
```

- While consuming the API in frontend or anywhere, always check for isError value,
- If its true then read errorMessage
- Make sure to pass errorMessage if error value is true

## Resource

**Definition**: A resource is a logical business entity for which Database Models are maintained and CRUD operations are executed. Resource as the base routes.

- To create a resource simply create a new class with resource name you want and extend the Resource Class
- Give you resource a name
- Pass the Mongoose Model
**Example**
```

class MyResource extends Resource {}
const myResource = new MyResource("resourceName", mongooseModel);

class User extends Resource {}

const user = new User("user", UserModel);
```

## Handlers

- Handlers contain Business logic for your Resource Routes
- The Resource class comes with basic CURD operations. Also called default handlers for a Resource. They are

  - createOne
  - findOne
  - updateOne
  - deleteOne
  - findAll

- You can simply overwrite these methods inside your extended resource class if you want.

## Custom Resourse Handlers

Custom Resource handlers are the logics other than CRUD, it can be anything. **A Resource handler or Custom Resource Handler is any function inside your Resource class which calls `this.handlerBuilder()` at the end of the function.**

### How to create new Custom Resourse Handlers

- To create custom Resource handlers you must first write the **handler's logic as a function expression** (Async Arrow function).
- This **enables you to test your handle logics separately** in a TDD
- A handler logic should return a `Promise<ResponseStructure>` type.
- The below Example code contains a Resource named user with two custom handlers `customHandler` and `sendEmail`.

**Example**

```
const customLogic = async (): Promise<ResponseStructure> => {
    return new ResponseStructure(toSend, false);
}

class User extends Resource {
  customHandler = (req: Request, res: Response, next: NextFunction) => {
      const handlerName = "Custom Handler";
      const logic = (): Promise<ResponseStructure>  => customLogic(req, res, next);
      this.handlerBuilder(handlerName, logic, res, next);
  };
  sendEmail = (req: Request, res: Response, next: NextFunction) => {
      const handlerName = "User send Email Handler";
      const logic = (): Promise<ResponseStructure> => util.email(req,res);
      this.handlerBuilder(handlerName, uploadLogic, res, next);
}

const user = new User("user");

router.get("/user/custom", user.customHandler); // Executes customHandler function
router.post("/user/send-email", user.sendEmail); // Executes sendEmail function

```

- **Note**: The Logic function being passed to the Handler class should return a Promise of type ResponseStructure `Promise<ResponseStructure>`. Refer ResponseStructure and default handlers on how to implement it.
- **Note** For default handlers, make sure to pass the data in the `request.body.data` with the field names same as the names given in Mongoose Model
- **Note** All response other than 404 (Not Found) and 500 (Internal Server Error) should be sent only as Handler.sendResponse().
