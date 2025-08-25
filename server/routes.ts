import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { z } from "zod";
import { sendEmail } from "./sendgrid";

// BIEW Registration Schema
const biewRegistrationSchema = z.object({
  registrationType: z.string().min(1, "Registration type is required"),
  fullName: z.string().min(1, "Full name is required"),
  organizationName: z.string().min(1, "Organization name is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone number is required"),
  category: z.string().min(1, "Category is required"),
  participantCount: z.string().optional(),
  boothRequirements: z.string().optional(),
  specialRequirements: z.string().optional(),
  paymentPreference: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware
  await setupAuth(app);

  // BIEW Registration endpoint (simplified - no auth required)
  app.post("/api/biew-registration", async (req, res) => {
    try {
      const validatedData = biewRegistrationSchema.parse(req.body);
      
      // Create email content
      const emailSubject = `BIEW 2025 ${validatedData.registrationType} Registration - ${validatedData.fullName}`;
      const registrationFee = validatedData.registrationType === 'delegation' ? 'KSH 25,000' : 'KSH 15,000';
      
      const emailContent = `
        <h2>New BIEW 2025 Registration Submission</h2>
        
        <h3>Registration Type: ${validatedData.registrationType.toUpperCase()}</h3>
        <p><strong>Registration Fee:</strong> ${registrationFee}</p>
        
        <h3>Personal Information</h3>
        <ul>
          <li><strong>Full Name:</strong> ${validatedData.fullName}</li>
          <li><strong>Position:</strong> ${validatedData.position}</li>
          <li><strong>Email:</strong> ${validatedData.email}</li>
          <li><strong>Phone:</strong> ${validatedData.phone}</li>
        </ul>
        
        <h3>Organization Information</h3>
        <ul>
          <li><strong>Organization:</strong> ${validatedData.organizationName}</li>
          <li><strong>Category:</strong> ${validatedData.category}</li>
        </ul>
        
        ${validatedData.participantCount ? `<p><strong>Number of Participants:</strong> ${validatedData.participantCount}</p>` : ''}
        ${validatedData.boothRequirements ? `<p><strong>Booth Requirements:</strong> ${validatedData.boothRequirements}</p>` : ''}
        ${validatedData.paymentPreference ? `<p><strong>Payment Preference:</strong> ${validatedData.paymentPreference}</p>` : ''}
        ${validatedData.additionalInfo ? `<p><strong>Additional Information:</strong> ${validatedData.additionalInfo}</p>` : ''}
        
        <hr>
        <p><em>Please contact this registrant within 24 hours with payment instructions and next steps.</em></p>
        <p><strong>Contact them at:</strong> ${validatedData.email} or ${validatedData.phone}</p>
      `;

      // Send email to IEC team
      const emailSent = await sendEmail({
        to: "iec@ueab.ac.ke",
        from: "noreply@ueab.ac.ke",
        subject: emailSubject,
        html: emailContent,
        text: emailContent.replace(/<[^>]*>/g, '') // Strip HTML for text version
      });

      if (emailSent) {
        res.status(201).json({
          message: "Registration submitted successfully! Our team will contact you within 24 hours.",
          success: true
        });
      } else {
        res.status(500).json({
          message: "Registration submission failed. Please try again or contact us directly at iec@ueab.ac.ke.",
          success: false
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          message: "Validation error",
          errors: error.errors
        });
      }
      
      console.error("Error processing BIEW registration:", error);
      res.status(500).json({
        message: "Failed to submit registration. Please try again later or contact iec@ueab.ac.ke directly."
      });
    }
  });

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

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = req.body;
      
      // Send email notification
      const emailSent = await sendEmail({
        to: "iec@ueab.ac.ke",
        from: "noreply@ueab.ac.ke",
        subject: `Contact Form: ${validatedData.subject}`,
        html: `
          <h3>New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Phone:</strong> ${validatedData.phone || 'Not provided'}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Enquiry Type:</strong> ${validatedData.enquiryType}</p>
          <p><strong>Message:</strong><br>${validatedData.message}</p>
        `,
        text: `New Contact Form Submission\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone || 'Not provided'}\nSubject: ${validatedData.subject}\nEnquiry Type: ${validatedData.enquiryType}\nMessage: ${validatedData.message}`
      });

      if (emailSent) {
        res.status(201).json({
          message: "Message sent successfully"
        });
      } else {
        res.status(500).json({
          message: "Failed to send message. Please try again later."
        });
      }
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({
        message: "Failed to send message. Please try again later."
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = req.body;
      
      // Send email notification
      const emailSent = await sendEmail({
        to: "iec@ueab.ac.ke",
        from: "noreply@ueab.ac.ke",
        subject: "New Newsletter Subscription",
        html: `
          <h3>New Newsletter Subscription</h3>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subscribed At:</strong> ${new Date().toLocaleString()}</p>
        `,
        text: `New Newsletter Subscription\n\nEmail: ${validatedData.email}\nSubscribed At: ${new Date().toLocaleString()}`
      });

      if (emailSent) {
        res.status(201).json({
          message: "Successfully subscribed to newsletter"
        });
      } else {
        res.status(500).json({
          message: "Subscription failed. Please try again later."
        });
      }
    } catch (error) {
      console.error("Error creating newsletter subscription:", error);
      res.status(500).json({
        message: "Subscription failed. Please try again later."
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}