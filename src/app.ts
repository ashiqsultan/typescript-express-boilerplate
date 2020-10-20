import express from "express";
import bodyParser from "body-parser";

// Create Express server
const app = express();

// Set PORT
app.set("port", process.env.PORT || 3000);

// Middleware for express to parse request body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // Enable CORS
// app.use(cors(config.corsOptions));

app.get("/", (req, res, next) => {
  console.log("ashiqsultan")
  res.send({ hello: "hellowWorld56" });
});

export default app;
