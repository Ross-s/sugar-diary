import { defineConfig } from "drizzle-kit";
export default defineConfig({
  out: "./drizzle",
  schema: "./src/db/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
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
});
