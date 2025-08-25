import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema, insertNewsletterSubscriptionSchema, insertBiewRegistrationSchema } from "@shared/schema";
import { z } from "zod";
import { emailService } from "./email-service";
import { setupAuth, isAuthenticated } from "./replitAuth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // Auth routes
  app.get('/api/auth/user', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
    }
  });

  // BIEW Registration endpoints
  app.post('/api/biew-registration', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      // Calculate amount based on registration type
      const amount = req.body.registrationType === 'delegation' ? 25000 : 15000;
      
      const registrationData = {
        ...req.body,
        userId,
        amount
      };
      
      const validatedData = insertBiewRegistrationSchema.parse(registrationData);
      const registration = await storage.createBiewRegistration(validatedData);
      
      res.status(201).json({
        message: "Registration submitted successfully",
        data: registration
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Error creating BIEW registration:", error);
      res.status(500).json({
        message: "Failed to submit registration. Please try again later."
      });
    }
  });
  
  app.get('/api/biew-registrations', isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const registrations = await storage.getBiewRegistrationsByUser(userId);
      res.json(registrations);
    } catch (error) {
      console.error("Error fetching BIEW registrations:", error);
      res.status(500).json({ message: "Failed to fetch registrations" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      // Send email notification
      await emailService.sendContactFormNotification(validatedData);
      
      res.status(201).json({
        message: "Message sent successfully",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Error creating contact message:", error);
      res.status(500).json({
        message: "Failed to send message. Please try again later."
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      const subscription = await storage.createNewsletterSubscription(validatedData);
      
      // Send email notification
      await emailService.sendNewsletterSubscriptionNotification(validatedData.email);
      
      res.status(201).json({
        message: "Successfully subscribed to newsletter",
        data: subscription
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      // Handle duplicate email subscription
      if (error instanceof Error && error.message.includes("unique")) {
        return res.status(400).json({
          message: "This email is already subscribed to our newsletter"
        });
      }
      
      console.error("Error creating newsletter subscription:", error);
      res.status(500).json({
        message: "Failed to subscribe. Please try again later."
      });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);

  return httpServer;
}