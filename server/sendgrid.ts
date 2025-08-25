import { MailService } from '@sendgrid/mail';

const mailService = new MailService();

// Initialize SendGrid with API key if available
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    // If no SendGrid API key, log email content for development
    if (!process.env.SENDGRID_API_KEY) {
      console.log('\n=== EMAIL WOULD BE SENT ===');
      console.log(`To: ${params.to}`);
      console.log(`From: ${params.from}`);
      console.log(`Subject: ${params.subject}`);
      console.log(`Content: ${params.text || params.html}`);
      console.log('===========================\n');
      return true; // Return success for development
    }

    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text || '',
      html: params.html || '',
    });
    
    console.log(`Email sent successfully to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    
    // Log email content even if sending fails
    console.log('\n=== EMAIL FAILED TO SEND ===');
    console.log(`To: ${params.to}`);
    console.log(`From: ${params.from}`);
    console.log(`Subject: ${params.subject}`);
    console.log(`Content: ${params.text || params.html}`);
    console.log('==============================\n');
    
    return false;
  }
}