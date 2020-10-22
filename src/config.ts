import ConfigType from "./Classes/ConfigType";
const development: ConfigType = {
  port: String(process.env.PORT || 8000),
  dbConnectionString: String(process.env.DB_CONNECTION_STRING),
  secretKey: String(process.env.SECRET_KEY),
  corsOptions: { origin: "*" },
};

const production: ConfigType = {
  port: String(process.env.PORT || 8000),
  dbConnectionString: String(process.env.DB_CONNECTION_STRING),
  secretKey: String(process.env.SECRET_KEY),
  corsOptions: { origin: "*" },
};

const config = (): ConfigType =>
  process.env.NODE_ENV === "production" ? production : development;

export default config();
