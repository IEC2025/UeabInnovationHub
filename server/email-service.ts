// Email notification service
export interface EmailConfig {
  to: string[];
  subject: string;
  text: string;
  html?: string;
}

export class EmailService {
  private isProduction = process.env.NODE_ENV === 'production';

  async sendEmail(config: EmailConfig): Promise<boolean> {
    try {
      if (this.isProduction) {
        // In production, you would integrate with services like:
        // - SendGrid: https://docs.sendgrid.com/api-reference/mail-send/mail-send
        // - Nodemailer with SMTP
        // - AWS SES
        // - Postmark, etc.
        
        console.log('📧 Production email would be sent:', {
          to: config.to,
          subject: config.subject,
          timestamp: new Date().toISOString()
        });
        
        // TODO: Replace with actual email service integration
        // Example with SendGrid:
        // const sgMail = require('@sendgrid/mail');
        // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        // await sgMail.send({
        //   to: config.to,
        //   from: 'iec@ueab.ac.ke',
        //   subject: config.subject,
        //   text: config.text,
        //   html: config.html
        // });
        
      } else {
        // In development, log email details
        console.log('📧 Development Email Notification:', {
          to: config.to,
          subject: config.subject,
          text: config.text,
          html: config.html,
          timestamp: new Date().toISOString()
        });
      }
      
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }

  // Contact form notification
  async sendContactFormNotification(contactData: {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    enquiryType: string;
    message: string;
  }): Promise<boolean> {
    const emailConfig: EmailConfig = {
      to: ['iec@ueab.ac.ke', 'director.iec@ueab.ac.ke'],
      subject: `New Contact Form Submission: ${contactData.subject}`,
      text: `
New contact form submission received:

Name: ${contactData.name}
Email: ${contactData.email}
Phone: ${contactData.phone || 'Not provided'}
Subject: ${contactData.subject}
Enquiry Type: ${contactData.enquiryType}

Message:
${contactData.message}

Submitted at: ${new Date().toLocaleString()}
      `,
      html: `
<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
  <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
    New Contact Form Submission
  </h2>
  
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <h3 style="color: #374151; margin-top: 0;">Contact Details</h3>
    <p><strong>Name:</strong> ${contactData.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
    <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
    <p><strong>Subject:</strong> ${contactData.subject}</p>
    <p><strong>Enquiry Type:</strong> ${contactData.enquiryType}</p>
  </div>
  
  <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
    <h3 style="color: #374151; margin-top: 0;">Message</h3>
    <p style="white-space: pre-wrap;">${contactData.message}</p>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #f59e0b; border-radius: 4px;">
    <p style="margin: 0; color: #92400e;">
      <strong>Action Required:</strong> Please respond to this enquiry within 24 hours.
    </p>
  </div>
  
  <hr style="margin: 30px 0; border: none; height: 1px; background-color: #e5e7eb;">
  
  <p style="color: #6b7280; font-size: 12px;">
    This email was sent automatically from the IEC website contact form.<br>
    Innovation & Entrepreneurship Centre, University of Eastern Africa, Baraton<br>
    Submitted at: ${new Date().toLocaleString()}
  </p>
</div>
      `
    };

    return this.sendEmail(emailConfig);
  }

  // Newsletter subscription notification
  async sendNewsletterSubscriptionNotification(email: string): Promise<boolean> {
    const emailConfig: EmailConfig = {
      to: ['iec@ueab.ac.ke'],
      subject: 'New Newsletter Subscription',
      text: `
New newsletter subscription:

Email: ${email}
Subscribed at: ${new Date().toLocaleString()}
      `,
      html: `
<div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif;">
  <h2 style="color: #1e40af;">New Newsletter Subscription</h2>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subscribed at:</strong> ${new Date().toLocaleString()}</p>
</div>
      `
    };

    return this.sendEmail(emailConfig);
  }
}

export const emailService = new EmailService();