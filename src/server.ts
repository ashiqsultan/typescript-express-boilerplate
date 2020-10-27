require("dotenv").config();
import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(
    `App is running 
    Port: ${app.get("port")}
    Environment:${app.get("env")}`
  );
  console.log("Press CTRL-C to stop the server\n");
});

export default server;
