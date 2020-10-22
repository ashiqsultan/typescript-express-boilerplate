import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import apiVersion1 from "./api/v1/routes";
import config from "./config";

// Create Express server
const app = express();

// Set PORT
app.set("port", config.port);

// Middleware for express to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Enable CORS
app.use(cors(config.corsOptions));

app.use("/v1", apiVersion1);

// 404 Handler
app.use(function (req, res, next) {
  const status = 404;
  const message = "Resource not found 404";
  console.log(message);
  res.status(status).json({ error: { message } });
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
    const status = 500;
    const message = "API Server Error";
    console.error(message);
    console.error(error);
    res.status(status).json({ error: { message } });
  }
);

export default app;
