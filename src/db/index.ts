import { drizzle } from "drizzle-orm/libsql";
import * as schema from "./schema";
export const db = drizzle({
  connection: {
    url:
      process.env.TURSO_DATABASE_URL ||
      (() => {
        throw new Error("TURSO_DATABASE_URL is required");
      })(),
    authToken:
      process.env.TURSO_AUTH_TOKEN ||
      (() => {
        throw new Error("TURSO_AUTH_TOKEN is required");
      })(),
  },
  schema: schema,
});
