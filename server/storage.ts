import { 
  users, 
  type User, 
  type InsertUser, 
  contactMessages, 
  type ContactMessage, 
  type InsertContactMessage, 
  newsletterSubscriptions, 
  type NewsletterSubscription, 
  type InsertNewsletterSubscription 
} from "@shared/schema";

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
}

// Export an instance of the storage
export const storage = new MemStorage();
