import cors from "cors";
export default interface ConfigType {
  port: string;
  dbConnectionString?: string;
  secretKey?: string;
  corsOptions?: cors.CorsOptions;
  jwtKeyHeader?: string;
  morganLogType?: string;
}
