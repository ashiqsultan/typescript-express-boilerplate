import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
  console.log(`App is running at ${app.get("port")} in ${app.get("env")} environment mode \n`)
  console.log("Press CTRL-C to stop the server\n");
});

export default server;
