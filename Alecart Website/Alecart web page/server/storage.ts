import { users, propertySubmissions, type User, type InsertUser, type PropertySubmission, type InsertPropertySubmission } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createPropertySubmission(submission: InsertPropertySubmission): Promise<PropertySubmission>;
  getPropertySubmissions(): Promise<PropertySubmission[]>;
  getPropertySubmission(id: number): Promise<PropertySubmission | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createPropertySubmission(insertSubmission: InsertPropertySubmission): Promise<PropertySubmission> {
    const [submission] = await db
      .insert(propertySubmissions)
      .values(insertSubmission)
      .returning();
    return submission;
  }

  async getPropertySubmissions(): Promise<PropertySubmission[]> {
    return await db.select().from(propertySubmissions).orderBy(propertySubmissions.submittedAt);
  }

  async getPropertySubmission(id: number): Promise<PropertySubmission | undefined> {
    const [submission] = await db.select().from(propertySubmissions).where(eq(propertySubmissions.id, id));
    return submission || undefined;
  }
}

export const storage = new DatabaseStorage();
