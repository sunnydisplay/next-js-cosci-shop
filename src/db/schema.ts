import { mysqlTable, primaryKey, int, varchar, decimal } from "drizzle-orm/mysql-core"


export const products = mysqlTable("products", {
    id: int({ unsigned: true }).autoincrement().notNull(),
    title: varchar({ length: 255 }).notNull(),
    price: decimal({ precision: 10, scale: 2 }).notNull(),
},
(table) => [
    primaryKey({ columns: [table.id], name: "product_id"}),
]);
