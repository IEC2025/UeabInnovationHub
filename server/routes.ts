import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactMessages, insertContactMessageSchema, insertNewsletterSubscriptionSchema } from "@shared/schema";
import { z } from "zod";
import { emailService } from "./email-service";

export async function registerRoutes(app: Express): Promise<Server> {
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
