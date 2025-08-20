import { 
  users, 
  type User, 
  type InsertUser, 
  contactMessages, 
  type ContactMessage, 
  type InsertContactMessage, 
  newsletterSubscriptions, 
  type NewsletterSubscription, 
  type InsertNewsletterSubscription,
  blogPosts,
  type BlogPost,
  type InsertBlogPost,
  events,
  type Event,
  type InsertEvent
} from "@shared/schema";
import { eq, gte } from "drizzle-orm";
import { db } from "./db";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact message operations
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  getContactMessage(id: number): Promise<ContactMessage | undefined>;
  markContactMessageAsRead(id: number): Promise<ContactMessage | undefined>;
  
  // Newsletter subscription operations
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptions(): Promise<NewsletterSubscription[]>;
  unsubscribeFromNewsletter(email: string): Promise<boolean>;
  
  // Blog post operations
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  getBlogPosts(): Promise<BlogPost[]>;
  getPublishedBlogPosts(): Promise<BlogPost[]>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  updateBlogPost(id: number, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined>;
  deleteBlogPost(id: number): Promise<boolean>;
  
  // Event operations
  createEvent(event: InsertEvent): Promise<Event>;
  getEvents(): Promise<Event[]>;
  getPublishedEvents(): Promise<Event[]>;
  getUpcomingEvents(): Promise<Event[]>;
  getEvent(id: number): Promise<Event | undefined>;
  updateEvent(id: number, updates: Partial<InsertEvent>): Promise<Event | undefined>;
  deleteEvent(id: number): Promise<boolean>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private newsletterSubscriptions: Map<number, NewsletterSubscription>;
  private userId: number;
  private contactMessageId: number;
  private newsletterSubscriptionId: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.userId = 1;
    this.contactMessageId = 1;
    this.newsletterSubscriptionId = 1;
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userId++;
    const now = new Date();
    const user: User = { 
      ...insertUser, 
      id, 
      role: "user", 
      createdAt: now,
      firstName: insertUser.firstName || null,
      lastName: insertUser.lastName || null
    };
    this.users.set(id, user);
    return user;
  }
  
  // Contact message operations
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.contactMessageId++;
    const now = new Date();
    const contactMessage: ContactMessage = {
      ...message,
      id,
      createdAt: now,
      isRead: false,
      phone: message.phone || null
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    return this.contactMessages.get(id);
  }
  
  async markContactMessageAsRead(id: number): Promise<ContactMessage | undefined> {
    const message = this.contactMessages.get(id);
    if (message) {
      const updatedMessage = { ...message, isRead: true };
      this.contactMessages.set(id, updatedMessage);
      return updatedMessage;
    }
    return undefined;
  }
  
  // Newsletter subscription operations
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    // Check for existing subscription with the same email
    const existingSubscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === subscription.email
    );
    
    if (existingSubscription) {
      throw new Error("Email already subscribed: unique constraint violation");
    }
    
    const id = this.newsletterSubscriptionId++;
    const now = new Date();
    const newSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      subscriptionDate: now,
      isActive: true
    };
    this.newsletterSubscriptions.set(id, newSubscription);
    return newSubscription;
  }
  
  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return Array.from(this.newsletterSubscriptions.values());
  }
  
  async unsubscribeFromNewsletter(email: string): Promise<boolean> {
    const subscription = Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === email
    );
    
    if (subscription) {
      const updatedSubscription = { ...subscription, isActive: false };
      this.newsletterSubscriptions.set(subscription.id, updatedSubscription);
      return true;
    }
    return false;
  }
  
  // Blog post operations (stub implementations)
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    throw new Error("Blog post operations not implemented in MemStorage");
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    return [];
  }
  
  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return [];
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return undefined;
  }
  
  async updateBlogPost(id: number, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    return undefined;
  }
  
  async deleteBlogPost(id: number): Promise<boolean> {
    return false;
  }
  
  // Event operations (stub implementations)
  async createEvent(event: InsertEvent): Promise<Event> {
    throw new Error("Event operations not implemented in MemStorage");
  }
  
  async getEvents(): Promise<Event[]> {
    return [];
  }
  
  async getPublishedEvents(): Promise<Event[]> {
    return [];
  }
  
  async getUpcomingEvents(): Promise<Event[]> {
    return [];
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    return undefined;
  }
  
  async updateEvent(id: number, updates: Partial<InsertEvent>): Promise<Event | undefined> {
    return undefined;
  }
  
  async deleteEvent(id: number): Promise<boolean> {
    return false;
  }
}

// Database Storage implementation
export class DatabaseStorage implements IStorage {
  // User operations
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
  
  // Contact message operations
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const [contactMessage] = await db
      .insert(contactMessages)
      .values(message)
      .returning();
    return contactMessage;
  }
  
  async getContactMessages(): Promise<ContactMessage[]> {
    return await db.select().from(contactMessages);
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message || undefined;
  }
  
  async markContactMessageAsRead(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db
      .update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id))
      .returning();
    return message || undefined;
  }
  
  // Newsletter subscription operations
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    try {
      const [newSubscription] = await db
        .insert(newsletterSubscriptions)
        .values(subscription)
        .returning();
      return newSubscription;
    } catch (error) {
      // Check if it's a unique constraint violation
      if (error instanceof Error && (error.message.includes('unique') || error.message.includes('duplicate'))) {
        throw new Error("Email already subscribed: unique constraint violation");
      }
      throw error;
    }
  }
  
  async getNewsletterSubscriptions(): Promise<NewsletterSubscription[]> {
    return await db.select().from(newsletterSubscriptions);
  }
  
  async unsubscribeFromNewsletter(email: string): Promise<boolean> {
    const result = await db
      .update(newsletterSubscriptions)
      .set({ isActive: false })
      .where(eq(newsletterSubscriptions.email, email))
      .returning();
    
    return result.length > 0;
  }
  
  // Blog post operations
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [blogPost] = await db
      .insert(blogPosts)
      .values(post)
      .returning();
    return blogPost;
  }
  
  async getBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts);
  }
  
  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts).where(eq(blogPosts.isPublished, true));
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post || undefined;
  }
  
  async updateBlogPost(id: number, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [post] = await db
      .update(blogPosts)
      .set(updates)
      .where(eq(blogPosts.id, id))
      .returning();
    return post || undefined;
  }
  
  async deleteBlogPost(id: number): Promise<boolean> {
    const result = await db.delete(blogPosts).where(eq(blogPosts.id, id)).returning();
    return result.length > 0;
  }
  
  // Event operations
  async createEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db
      .insert(events)
      .values(event)
      .returning();
    return newEvent;
  }
  
  async getEvents(): Promise<Event[]> {
    return await db.select().from(events);
  }
  
  async getPublishedEvents(): Promise<Event[]> {
    return await db.select().from(events).where(eq(events.isPublished, true));
  }
  
  async getUpcomingEvents(): Promise<Event[]> {
    const now = new Date();
    return await db.select().from(events)
      .where(eq(events.isPublished, true))
      .orderBy(events.startDate);
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event || undefined;
  }
  
  async updateEvent(id: number, updates: Partial<InsertEvent>): Promise<Event | undefined> {
    const [event] = await db
      .update(events)
      .set(updates)
      .where(eq(events.id, id))
      .returning();
    return event || undefined;
  }
  
  async deleteEvent(id: number): Promise<boolean> {
    const result = await db.delete(events).where(eq(events.id, id)).returning();
    return result.length > 0;
  }
}

// Export an instance of the DatabaseStorage
export const storage = new DatabaseStorage();
