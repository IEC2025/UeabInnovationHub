import { 
  users, 
  type User, 
  type UpsertUser,
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
  type InsertEvent,
  newsArticles,
  type NewsArticle,
  type InsertNewsArticle,
  resources,
  type Resource,
  type InsertResource,
  eventRegistrations,
  type EventRegistration,
  type InsertEventRegistration,
  mentorProfiles,
  type MentorProfile,
  type InsertMentorProfile,
  mentorshipSessions,
  type MentorshipSession,
  type InsertMentorshipSession,
  notifications,
  type Notification,
  type InsertNotification,
  fileUploads,
  type FileUpload,
  type InsertFileUpload,
  searchHistory,
  type SearchHistory,
  type InsertSearchHistory,
  newsletterCampaigns,
  type NewsletterCampaign,
  type InsertNewsletterCampaign,
  simpleBiewRegistrations,
  type BiewRegistration,
  type InsertBiewRegistration
} from "@shared/schema";
import { eq, gte, desc, and, or, like, ilike } from "drizzle-orm";
import { db } from "./db";

// Interface for storage operations
export interface IStorage {
  // User operations (Replit Auth compatible)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // BIEW Registration operations (simplified)
  createBiewRegistration(registration: InsertBiewRegistration): Promise<BiewRegistration>;
  getBiewRegistrations(): Promise<BiewRegistration[]>;
  updateBiewRegistrationStatus(id: number, status: string): Promise<BiewRegistration | undefined>;
  
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
  
  // News article operations
  createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle>;
  getNewsArticles(): Promise<NewsArticle[]>;
  getPublishedNewsArticles(): Promise<NewsArticle[]>;
  getNewsArticleBySlug(slug: string): Promise<NewsArticle | undefined>;
  updateNewsArticle(id: number, updates: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined>;
  deleteNewsArticle(id: number): Promise<boolean>;
  
  // Resource operations
  createResource(resource: InsertResource): Promise<Resource>;
  getResources(): Promise<Resource[]>;
  getPublicResources(): Promise<Resource[]>;
  getResource(id: number): Promise<Resource | undefined>;
  updateResource(id: number, updates: Partial<InsertResource>): Promise<Resource | undefined>;
  deleteResource(id: number): Promise<boolean>;
  
  // Event registration operations
  registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration>;
  getUserEventRegistrations(userId: string): Promise<EventRegistration[]>;
  getEventRegistrations(eventId: number): Promise<EventRegistration[]>;
  cancelEventRegistration(userId: string, eventId: number): Promise<boolean>;
  
  // Mentorship operations
  createMentorProfile(profile: InsertMentorProfile): Promise<MentorProfile>;
  getMentorProfiles(): Promise<MentorProfile[]>;
  getMentorProfile(userId: string): Promise<MentorProfile | undefined>;
  updateMentorProfile(userId: string, updates: Partial<InsertMentorProfile>): Promise<MentorProfile | undefined>;
  
  scheduleMentorshipSession(session: InsertMentorshipSession): Promise<MentorshipSession>;
  getUserMentorshipSessions(userId: string): Promise<MentorshipSession[]>;
  updateMentorshipSession(id: number, updates: Partial<InsertMentorshipSession>): Promise<MentorshipSession | undefined>;
  
  // Notification operations
  createNotification(notification: InsertNotification): Promise<Notification>;
  getUserNotifications(userId: string): Promise<Notification[]>;
  markNotificationAsRead(id: number): Promise<boolean>;
  
  // File upload operations
  createFileUpload(upload: InsertFileUpload): Promise<FileUpload>;
  getFileUpload(id: number): Promise<FileUpload | undefined>;
  
  // Search operations
  searchContent(query: string, category?: string): Promise<any[]>;
  createSearchHistory(search: InsertSearchHistory): Promise<SearchHistory>;
  
  // Newsletter campaign operations
  createNewsletterCampaign(campaign: InsertNewsletterCampaign): Promise<NewsletterCampaign>;
  getNewsletterCampaigns(): Promise<NewsletterCampaign[]>;
}

// Database Storage implementation
export class DatabaseStorage implements IStorage {
  // User operations (Replit Auth compatible)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
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
    return await db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt));
  }
  
  async getContactMessage(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db.select().from(contactMessages).where(eq(contactMessages.id, id));
    return message;
  }
  
  async markContactMessageAsRead(id: number): Promise<ContactMessage | undefined> {
    const [message] = await db
      .update(contactMessages)
      .set({ isRead: true })
      .where(eq(contactMessages.id, id))
      .returning();
    return message;
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
    return await db.select().from(blogPosts).orderBy(desc(blogPosts.createdAt));
  }
  
  async getPublishedBlogPosts(): Promise<BlogPost[]> {
    return await db.select().from(blogPosts)
      .where(eq(blogPosts.isPublished, true))
      .orderBy(desc(blogPosts.publishedAt));
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const [post] = await db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return post;
  }
  
  async updateBlogPost(id: number, updates: Partial<InsertBlogPost>): Promise<BlogPost | undefined> {
    const [post] = await db
      .update(blogPosts)
      .set(updates)
      .where(eq(blogPosts.id, id))
      .returning();
    return post;
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
    return await db.select().from(events).orderBy(desc(events.startDate));
  }
  
  async getPublishedEvents(): Promise<Event[]> {
    return await db.select().from(events)
      .where(eq(events.isPublished, true))
      .orderBy(events.startDate);
  }
  
  async getUpcomingEvents(): Promise<Event[]> {
    const now = new Date();
    return await db.select().from(events)
      .where(and(eq(events.isPublished, true), gte(events.startDate, now)))
      .orderBy(events.startDate);
  }
  
  async getEvent(id: number): Promise<Event | undefined> {
    const [event] = await db.select().from(events).where(eq(events.id, id));
    return event;
  }
  
  async updateEvent(id: number, updates: Partial<InsertEvent>): Promise<Event | undefined> {
    const [event] = await db
      .update(events)
      .set(updates)
      .where(eq(events.id, id))
      .returning();
    return event;
  }
  
  async deleteEvent(id: number): Promise<boolean> {
    const result = await db.delete(events).where(eq(events.id, id)).returning();
    return result.length > 0;
  }
  
  // News article operations
  async createNewsArticle(article: InsertNewsArticle): Promise<NewsArticle> {
    const [newsArticle] = await db
      .insert(newsArticles)
      .values(article)
      .returning();
    return newsArticle;
  }
  
  async getNewsArticles(): Promise<NewsArticle[]> {
    return await db.select().from(newsArticles).orderBy(desc(newsArticles.createdAt));
  }
  
  async getPublishedNewsArticles(): Promise<NewsArticle[]> {
    return await db.select().from(newsArticles)
      .where(eq(newsArticles.isPublished, true))
      .orderBy(desc(newsArticles.publishedAt));
  }
  
  async getNewsArticleBySlug(slug: string): Promise<NewsArticle | undefined> {
    const [article] = await db.select().from(newsArticles).where(eq(newsArticles.slug, slug));
    return article;
  }
  
  async updateNewsArticle(id: number, updates: Partial<InsertNewsArticle>): Promise<NewsArticle | undefined> {
    const [article] = await db
      .update(newsArticles)
      .set(updates)
      .where(eq(newsArticles.id, id))
      .returning();
    return article;
  }
  
  async deleteNewsArticle(id: number): Promise<boolean> {
    const result = await db.delete(newsArticles).where(eq(newsArticles.id, id)).returning();
    return result.length > 0;
  }
  
  // Resource operations
  async createResource(resource: InsertResource): Promise<Resource> {
    const [newResource] = await db
      .insert(resources)
      .values(resource)
      .returning();
    return newResource;
  }
  
  async getResources(): Promise<Resource[]> {
    return await db.select().from(resources).orderBy(desc(resources.createdAt));
  }
  
  async getPublicResources(): Promise<Resource[]> {
    return await db.select().from(resources)
      .where(eq(resources.isPublic, true))
      .orderBy(desc(resources.createdAt));
  }
  
  async getResource(id: number): Promise<Resource | undefined> {
    const [resource] = await db.select().from(resources).where(eq(resources.id, id));
    return resource;
  }
  
  async updateResource(id: number, updates: Partial<InsertResource>): Promise<Resource | undefined> {
    const [resource] = await db
      .update(resources)
      .set(updates)
      .where(eq(resources.id, id))
      .returning();
    return resource;
  }
  
  async deleteResource(id: number): Promise<boolean> {
    const result = await db.delete(resources).where(eq(resources.id, id)).returning();
    return result.length > 0;
  }
  
  // Event registration operations
  async registerForEvent(registration: InsertEventRegistration): Promise<EventRegistration> {
    const [newRegistration] = await db
      .insert(eventRegistrations)
      .values(registration)
      .returning();
    return newRegistration;
  }
  
  async getUserEventRegistrations(userId: string): Promise<EventRegistration[]> {
    return await db.select().from(eventRegistrations)
      .where(eq(eventRegistrations.userId, userId))
      .orderBy(desc(eventRegistrations.registeredAt));
  }
  
  async getEventRegistrations(eventId: number): Promise<EventRegistration[]> {
    return await db.select().from(eventRegistrations)
      .where(eq(eventRegistrations.eventId, eventId))
      .orderBy(desc(eventRegistrations.registeredAt));
  }
  
  async cancelEventRegistration(userId: string, eventId: number): Promise<boolean> {
    const result = await db
      .update(eventRegistrations)
      .set({ status: "cancelled" })
      .where(and(
        eq(eventRegistrations.userId, userId),
        eq(eventRegistrations.eventId, eventId)
      ))
      .returning();
    
    return result.length > 0;
  }
  
  // Mentorship operations
  async createMentorProfile(profile: InsertMentorProfile): Promise<MentorProfile> {
    const [mentorProfile] = await db
      .insert(mentorProfiles)
      .values(profile)
      .returning();
    return mentorProfile;
  }
  
  async getMentorProfiles(): Promise<MentorProfile[]> {
    return await db.select().from(mentorProfiles)
      .where(eq(mentorProfiles.isActive, true))
      .orderBy(desc(mentorProfiles.createdAt));
  }
  
  async getMentorProfile(userId: string): Promise<MentorProfile | undefined> {
    const [profile] = await db.select().from(mentorProfiles)
      .where(eq(mentorProfiles.userId, userId));
    return profile;
  }
  
  async updateMentorProfile(userId: string, updates: Partial<InsertMentorProfile>): Promise<MentorProfile | undefined> {
    const [profile] = await db
      .update(mentorProfiles)
      .set(updates)
      .where(eq(mentorProfiles.userId, userId))
      .returning();
    return profile;
  }
  
  async scheduleMentorshipSession(session: InsertMentorshipSession): Promise<MentorshipSession> {
    const [newSession] = await db
      .insert(mentorshipSessions)
      .values(session)
      .returning();
    return newSession;
  }
  
  async getUserMentorshipSessions(userId: string): Promise<MentorshipSession[]> {
    return await db.select().from(mentorshipSessions)
      .where(or(
        eq(mentorshipSessions.mentorId, userId),
        eq(mentorshipSessions.menteeId, userId)
      ))
      .orderBy(desc(mentorshipSessions.sessionDate));
  }
  
  async updateMentorshipSession(id: number, updates: Partial<InsertMentorshipSession>): Promise<MentorshipSession | undefined> {
    const [session] = await db
      .update(mentorshipSessions)
      .set(updates)
      .where(eq(mentorshipSessions.id, id))
      .returning();
    return session;
  }
  
  // Notification operations
  async createNotification(notification: InsertNotification): Promise<Notification> {
    const [newNotification] = await db
      .insert(notifications)
      .values(notification)
      .returning();
    return newNotification;
  }
  
  async getUserNotifications(userId: string): Promise<Notification[]> {
    return await db.select().from(notifications)
      .where(eq(notifications.userId, userId))
      .orderBy(desc(notifications.createdAt));
  }
  
  async markNotificationAsRead(id: number): Promise<boolean> {
    const result = await db
      .update(notifications)
      .set({ isRead: true })
      .where(eq(notifications.id, id))
      .returning();
    
    return result.length > 0;
  }
  
  // File upload operations
  async createFileUpload(upload: InsertFileUpload): Promise<FileUpload> {
    const [fileUpload] = await db
      .insert(fileUploads)
      .values(upload)
      .returning();
    return fileUpload;
  }
  
  async getFileUpload(id: number): Promise<FileUpload | undefined> {
    const [upload] = await db.select().from(fileUploads).where(eq(fileUploads.id, id));
    return upload;
  }
  
  // Search operations
  async searchContent(query: string, category?: string): Promise<any[]> {
    const searchTerm = `%${query}%`;
    const results = [];
    
    // Search events
    if (!category || category === 'events') {
      const eventResults = await db.select().from(events)
        .where(and(
          eq(events.isPublished, true),
          or(
            ilike(events.title, searchTerm),
            ilike(events.description, searchTerm)
          )
        ));
      results.push(...eventResults.map(e => ({ ...e, type: 'event' })));
    }
    
    // Search news articles
    if (!category || category === 'news') {
      const newsResults = await db.select().from(newsArticles)
        .where(and(
          eq(newsArticles.isPublished, true),
          or(
            ilike(newsArticles.title, searchTerm),
            ilike(newsArticles.content, searchTerm)
          )
        ));
      results.push(...newsResults.map(n => ({ ...n, type: 'news' })));
    }
    
    // Search resources
    if (!category || category === 'resources') {
      const resourceResults = await db.select().from(resources)
        .where(and(
          eq(resources.isPublic, true),
          or(
            ilike(resources.title, searchTerm),
            ilike(resources.description, searchTerm)
          )
        ));
      results.push(...resourceResults.map(r => ({ ...r, type: 'resource' })));
    }
    
    return results;
  }
  
  async createSearchHistory(search: InsertSearchHistory): Promise<SearchHistory> {
    const [searchRecord] = await db
      .insert(searchHistory)
      .values(search)
      .returning();
    return searchRecord;
  }
  
  // Newsletter campaign operations
  async createNewsletterCampaign(campaign: InsertNewsletterCampaign): Promise<NewsletterCampaign> {
    const [newCampaign] = await db
      .insert(newsletterCampaigns)
      .values(campaign)
      .returning();
    return newCampaign;
  }
  
  async getNewsletterCampaigns(): Promise<NewsletterCampaign[]> {
    return await db.select().from(newsletterCampaigns)
      .orderBy(desc(newsletterCampaigns.createdAt));
  }

  // BIEW Registration operations (simplified)
  async createBiewRegistration(registration: InsertBiewRegistration): Promise<BiewRegistration> {
    const [newRegistration] = await db
      .insert(simpleBiewRegistrations)
      .values(registration)
      .returning();
    return newRegistration;
  }

  async getBiewRegistrations(): Promise<BiewRegistration[]> {
    return await db.select().from(simpleBiewRegistrations)
      .orderBy(desc(simpleBiewRegistrations.submittedAt));
  }

  async updateBiewRegistrationStatus(id: number, status: string): Promise<BiewRegistration | undefined> {
    const [updatedRegistration] = await db
      .update(simpleBiewRegistrations)
      .set({ status: status })
      .where(eq(simpleBiewRegistrations.id, id))
      .returning();
    return updatedRegistration;
  }
}

// Export an instance of the DatabaseStorage
export const storage = new DatabaseStorage();