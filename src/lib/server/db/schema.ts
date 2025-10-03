import { pgTable, text, varchar, date, serial, integer, timestamp } from 'drizzle-orm/pg-core';

// --- Users Table ---
export const users = pgTable('users', {
    id: serial('id').primaryKey(), 
    username: varchar('username', { length: 16 }).unique().notNull(), 
    email: text("email").unique().notNull(), 
    password: varchar("password", { length: 60 }).notNull(), 
    birthDate: date("birth_date"),
	
    role: text("role", { enum: ["administrator", "moderator", "member"] }).notNull().default('member'), 
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
});

// --- Categories Table ---
export const categories = pgTable("categories", {
    id: serial("id").primaryKey(),
    name: text("name").unique().notNull(),
    description: text("description"),
});

// --- Threads Table ---
export const threads = pgTable("threads", {
    id: serial("id").primaryKey(),
    name: text("name").notNull(),
    description: text("description"),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(), 
    
    creatorId: integer('creator_id').references(() => users.id).notNull(), 
    categoryId: integer('category_id').references(() => categories.id).notNull(), 
});

// --- Posts Table ---
export const posts = pgTable("posts", {
    id: serial("id").primaryKey(),
    message: text("message").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),

    posterId: integer('poster_id').references(() => users.id).notNull(),
    threadId: integer('thread_id').references(() => threads.id, { onDelete: "cascade" }).notNull(),
});