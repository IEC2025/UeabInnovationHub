import { 
  pgTable, 
  text, 
  serial, 
  integer, 
  boolean, 
  timestamp, 
  varchar,
  jsonb,
  index,
  decimal
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Session storage table for Replit Auth
export const sessions = pgTable(
  "sessions",
  {
    sid: varchar("sid").primaryKey(),
    sess: jsonb("sess").notNull(),
    expire: timestamp("expire").notNull(),
  },
  (table) => [index("IDX_session_expire").on(table.expire)],
);

// Enhanced Users table for Replit Auth  
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique(),
  firstName: varchar("first_name"),
  lastName: varchar("last_name"),
  profileImageUrl: varchar("profile_image_url"),
  role: text("role").default("user"),
  bio: text("bio"),
  skills: text("skills").array(),
  interests: text("interests").array(),
  linkedinUrl: text("linkedin_url"),
  githubUrl: text("github_url"),
  websiteUrl: text("website_url"),
  yearOfStudy: integer("year_of_study"),
  major: text("major"),
  isActive: boolean("is_active").default(true),
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  email: true,
  firstName: true,
  lastName: true,
  bio: true,
  skills: true,
  interests: true,
  linkedinUrl: true,
  githubUrl: true,
  websiteUrl: true,
  yearOfStudy: true,
  major: true,
});

export const upsertUserSchema = createInsertSchema(users).pick({
  id: true,
  email: true,
  firstName: true,
  lastName: true,
  profileImageUrl: true,
});

// Contact Messages table
export const contactMessages = pgTable("contact_messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject").notNull(),
  enquiryType: text("enquiry_type").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
  isRead: boolean("is_read").default(false),
});

export const insertContactMessageSchema = createInsertSchema(contactMessages).pick({
  name: true,
  email: true,
  phone: true,
  subject: true,
  enquiryType: true,
  message: true,
});

// Newsletter Subscriptions table
export const newsletterSubscriptions = pgTable("newsletter_subscriptions", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  subscriptionDate: timestamp("subscription_date").defaultNow(),
  isActive: boolean("is_active").default(true),
});

// Blog Posts table
export const blogPosts = pgTable("blog_posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  imageUrl: text("image_url"),
  authorName: text("author_name").notNull(),
  authorImage: text("author_image"),
  category: text("category").notNull(),
  tags: text("tags").array(),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Events table
export const events = pgTable("events", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  location: text("location").notNull(),
  eventType: text("event_type").notNull(),
  imageUrl: text("image_url"),
  registrationUrl: text("registration_url"),
  maxAttendees: integer("max_attendees"),
  currentAttendees: integer("current_attendees").default(0),
  isPublished: boolean("is_published").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Event Registrations table
export const eventRegistrations = pgTable("event_registrations", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id").notNull(),
  userId: varchar("user_id").notNull(),
  status: text("status").default("registered"), // registered, attended, cancelled
  registeredAt: timestamp("registered_at").defaultNow(),
  attendedAt: timestamp("attended_at"),
});

// News Articles table
export const newsArticles = pgTable("news_articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  content: text("content").notNull(),
  excerpt: text("excerpt").notNull(),
  imageUrl: text("image_url"),
  authorId: varchar("author_id").notNull(),
  category: text("category").notNull(),
  tags: text("tags").array(),
  isPublished: boolean("is_published").default(false),
  publishedAt: timestamp("published_at"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Resources table
export const resources = pgTable("resources", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  fileUrl: text("file_url"),
  fileType: text("file_type"), // pdf, doc, video, link
  category: text("category").notNull(),
  tags: text("tags").array(),
  authorId: varchar("author_id").notNull(),
  isPublic: boolean("is_public").default(true),
  downloadCount: integer("download_count").default(0),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Mentorship Program tables
export const mentorProfiles = pgTable("mentor_profiles", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull().unique(),
  expertise: text("expertise").array(),
  availability: text("availability"),
  maxMentees: integer("max_mentees").default(5),
  currentMentees: integer("current_mentees").default(0),
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
});

export const mentorshipSessions = pgTable("mentorship_sessions", {
  id: serial("id").primaryKey(),
  mentorId: varchar("mentor_id").notNull(),
  menteeId: varchar("mentee_id").notNull(),
  sessionDate: timestamp("session_date").notNull(),
  duration: integer("duration").default(60), // minutes
  notes: text("notes"),
  status: text("status").default("scheduled"), // scheduled, completed, cancelled
  createdAt: timestamp("created_at").defaultNow(),
});

// Notifications table
export const notifications = pgTable("notifications", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id").notNull(),
  title: text("title").notNull(),
  message: text("message").notNull(),
  type: text("type").notNull(), // event, mentorship, general
  isRead: boolean("is_read").default(false),
  actionUrl: text("action_url"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Newsletter Campaigns table
export const newsletterCampaigns = pgTable("newsletter_campaigns", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  subject: text("subject").notNull(),
  content: text("content").notNull(),
  segment: text("segment").default("all"), // all, students, mentors, alumni
  sentAt: timestamp("sent_at"),
  createdAt: timestamp("created_at").defaultNow(),
});

// File Uploads table
export const fileUploads = pgTable("file_uploads", {
  id: serial("id").primaryKey(),
  filename: text("filename").notNull(),
  originalName: text("original_name").notNull(),
  mimeType: text("mime_type").notNull(),
  size: integer("size").notNull(),
  uploadedBy: varchar("uploaded_by").notNull(),
  purpose: text("purpose"), // profile_image, resource, event_image, etc.
  createdAt: timestamp("created_at").defaultNow(),
});

// Search History table for analytics
export const searchHistory = pgTable("search_history", {
  id: serial("id").primaryKey(),
  userId: varchar("user_id"),
  query: text("query").notNull(),
  category: text("category"), // events, resources, news, mentors
  resultsCount: integer("results_count"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertNewsletterSubscriptionSchema = createInsertSchema(newsletterSubscriptions).pick({
  email: true,
});

export const insertBlogPostSchema = createInsertSchema(blogPosts).pick({
  title: true,
  slug: true,
  content: true,
  excerpt: true,
  imageUrl: true,
  authorName: true,
  authorImage: true,
  category: true,
  tags: true,
  isPublished: true,
  publishedAt: true,
});

export const insertEventSchema = createInsertSchema(events).pick({
  title: true,
  description: true,
  startDate: true,
  endDate: true,
  location: true,
  eventType: true,
  imageUrl: true,
  registrationUrl: true,
  maxAttendees: true,
  isPublished: true,
});

// Define all insert schemas
export const insertEventRegistrationSchema = createInsertSchema(eventRegistrations).omit({
  id: true,
  registeredAt: true,
  attendedAt: true,
});

export const insertNewsArticleSchema = createInsertSchema(newsArticles).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertResourceSchema = createInsertSchema(resources).omit({
  id: true,
  downloadCount: true,
  createdAt: true,
  updatedAt: true,
});

export const insertMentorProfileSchema = createInsertSchema(mentorProfiles).omit({
  id: true,
  currentMentees: true,
  createdAt: true,
});

export const insertMentorshipSessionSchema = createInsertSchema(mentorshipSessions).omit({
  id: true,
  createdAt: true,
});

export const insertNotificationSchema = createInsertSchema(notifications).omit({
  id: true,
  createdAt: true,
});

export const insertNewsletterCampaignSchema = createInsertSchema(newsletterCampaigns).omit({
  id: true,
  sentAt: true,
  createdAt: true,
});

export const insertFileUploadSchema = createInsertSchema(fileUploads).omit({
  id: true,
  createdAt: true,
});

export const insertSearchHistorySchema = createInsertSchema(searchHistory).omit({
  id: true,
  createdAt: true,
});

// Define database relations
export const usersRelations = relations(users, ({ many }) => ({
  newsArticles: many(newsArticles),
  resources: many(resources),
  mentorProfile: many(mentorProfiles),
  notifications: many(notifications),
  eventRegistrations: many(eventRegistrations),
  mentorSessions: many(mentorshipSessions, { relationName: "mentorSessions" }),
  menteeSessions: many(mentorshipSessions, { relationName: "menteeSessions" }),
  fileUploads: many(fileUploads),
}));

export const eventsRelations = relations(events, ({ many }) => ({
  registrations: many(eventRegistrations),
}));

export const eventRegistrationsRelations = relations(eventRegistrations, ({ one }) => ({
  event: one(events, {
    fields: [eventRegistrations.eventId],
    references: [events.id],
  }),
  user: one(users, {
    fields: [eventRegistrations.userId],
    references: [users.id],
  }),
}));

export const newsArticlesRelations = relations(newsArticles, ({ one }) => ({
  author: one(users, {
    fields: [newsArticles.authorId],
    references: [users.id],
  }),
}));

export const resourcesRelations = relations(resources, ({ one }) => ({
  author: one(users, {
    fields: [resources.authorId],
    references: [users.id],
  }),
}));

export const mentorProfilesRelations = relations(mentorProfiles, ({ one, many }) => ({
  user: one(users, {
    fields: [mentorProfiles.userId],
    references: [users.id],
  }),
  sessions: many(mentorshipSessions),
}));

export const mentorshipSessionsRelations = relations(mentorshipSessions, ({ one }) => ({
  mentor: one(users, {
    fields: [mentorshipSessions.mentorId],
    references: [users.id],
    relationName: "mentorSessions",
  }),
  mentee: one(users, {
    fields: [mentorshipSessions.menteeId],
    references: [users.id],
    relationName: "menteeSessions",
  }),
}));

export const notificationsRelations = relations(notifications, ({ one }) => ({
  user: one(users, {
    fields: [notifications.userId],
    references: [users.id],
  }),
}));

export const fileUploadsRelations = relations(fileUploads, ({ one }) => ({
  user: one(users, {
    fields: [fileUploads.uploadedBy],
    references: [users.id],
  }),
}));

// Type exports
export type UpsertUser = z.infer<typeof upsertUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContactMessage = z.infer<typeof insertContactMessageSchema>;
export type ContactMessage = typeof contactMessages.$inferSelect;

export type InsertNewsletterSubscription = z.infer<typeof insertNewsletterSubscriptionSchema>;
export type NewsletterSubscription = typeof newsletterSubscriptions.$inferSelect;

export type InsertBlogPost = z.infer<typeof insertBlogPostSchema>;
export type BlogPost = typeof blogPosts.$inferSelect;

export type InsertEvent = z.infer<typeof insertEventSchema>;
export type Event = typeof events.$inferSelect;

export type InsertEventRegistration = z.infer<typeof insertEventRegistrationSchema>;
export type EventRegistration = typeof eventRegistrations.$inferSelect;

export type InsertNewsArticle = z.infer<typeof insertNewsArticleSchema>;
export type NewsArticle = typeof newsArticles.$inferSelect;

export type InsertResource = z.infer<typeof insertResourceSchema>;
export type Resource = typeof resources.$inferSelect;

export type InsertMentorProfile = z.infer<typeof insertMentorProfileSchema>;
export type MentorProfile = typeof mentorProfiles.$inferSelect;

export type InsertMentorshipSession = z.infer<typeof insertMentorshipSessionSchema>;
export type MentorshipSession = typeof mentorshipSessions.$inferSelect;

export type InsertNotification = z.infer<typeof insertNotificationSchema>;
export type Notification = typeof notifications.$inferSelect;

export type InsertNewsletterCampaign = z.infer<typeof insertNewsletterCampaignSchema>;
export type NewsletterCampaign = typeof newsletterCampaigns.$inferSelect;

export type InsertFileUpload = z.infer<typeof insertFileUploadSchema>;
export type FileUpload = typeof fileUploads.$inferSelect;

export type InsertSearchHistory = z.infer<typeof insertSearchHistorySchema>;
export type SearchHistory = typeof searchHistory.$inferSelect;

// Simplified BIEW registrations (no userId - public forms)
export const simpleBiewRegistrations = pgTable("simple_biew_registrations", {
  id: serial("id").primaryKey(),
  registrationType: varchar("registration_type").notNull(),
  fullName: text("full_name").notNull(),
  organizationName: text("organization_name").notNull(),
  position: text("position").notNull(),
  email: varchar("email").notNull(),
  phone: varchar("phone").notNull(),
  category: varchar("category").notNull(),
  participantCount: varchar("participant_count"),
  boothRequirements: text("booth_requirements"),
  additionalInfo: text("additional_info"),
  submittedAt: timestamp("submitted_at").defaultNow(),
  status: varchar("status").default("pending"),
});

export const insertBiewRegistrationSchema = createInsertSchema(simpleBiewRegistrations).omit({
  id: true,
  submittedAt: true,
  status: true,
});

export type InsertBiewRegistration = z.infer<typeof insertBiewRegistrationSchema>;
export type BiewRegistration = typeof simpleBiewRegistrations.$inferSelect;
