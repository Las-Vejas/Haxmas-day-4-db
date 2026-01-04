import { sqliteTable, integer, text,  } from "drizzle-orm/sqlite-core"

export const wishes = sqliteTable("ch_desserts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  dessert: text("dessert").notNull(),
  nationality: integer("nationality").notNull().default(0),
  createdAt: integer("created_at").notNull(),

})