import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const connectionDetailsTable = sqliteTable("connection_details", {
  id: int().primaryKey({ autoIncrement: true }),
  userId: text("user_id").notNull(),
  connectionType: text("connection_type", {
    enum: ["nightscout"],
  }).notNull(),
  url: text("url").notNull(),
  authToken: text("auth_token").notNull(),
});
