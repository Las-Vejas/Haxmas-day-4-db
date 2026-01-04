import { sqliteTable, integer, text,  } from "drizzle-orm/sqlite-core"

export const wishes = sqliteTable("ch_desserts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  dessert: text("dessert").notNull(),
  nationality: text("nationality").notNull(),
  createdAt: integer("created_at").notNull(),

})