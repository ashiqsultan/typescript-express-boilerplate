import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiVersion1 from "./api/v1/routes";
import config from "./config";
import morgan from "morgan";
import ResponseStructure from "./Classes/ResponseStructure";

// Create Express server
const app = express();

// Set PORT
app.set("port", config.port);

// Middleware for express to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

// // Enable CORS
app.use(cors(config.corsOptions));

app.use("/v1", apiVersion1);

// 404 Handler
app.use(function (req, res, next) {
  const status = 404;
  const message = "Resource not found 404";
  console.log(message);
  const errorResponse = new ResponseStructure([], true, message);
  res.status(status).send(errorResponse);
});

// Server Error Handler
// Calling next(error) in any of the routes will call this function
app.use(
  (
    error: express.ErrorRequestHandler,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // Error object is only logged in server and not sent in response to restrict error details being known in the front-end
    // instead a general message is sent incase of server error
    console.error(error);
    const status = 500;
    const message = "API Server Error";
    const errorResponse = new ResponseStructure([], true, message);
    res.status(status).send(errorResponse);
  }
);

export default app;
