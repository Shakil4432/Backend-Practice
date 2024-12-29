import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
export default {
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT,
  salt_round: process.env.SALT_ROUND,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  access_token_expires_time: process.env.ACCESS_TOKEN_EXPIRED,
  node_env: process.env.NODE_ENV,
};
