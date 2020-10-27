import ConfigType from "./Classes/ConfigType";
const development: ConfigType = {
  port: process.env.PORT || "8000",
  dbConnectionString: process.env.DB_CONNECTION_STRING,
  secretKey: process.env.SECRET_KEY,
  corsOptions: { origin: "*" },
};

const production: ConfigType = {
  port: process.env.PORT || "8000",
  dbConnectionString: process.env.DB_CONNECTION_STRING,
  secretKey: process.env.SECRET_KEY,
  corsOptions: { origin: "*" },
};

const config = (): ConfigType =>
  process.env.NODE_ENV === "production" ? production : development;

export default config();
