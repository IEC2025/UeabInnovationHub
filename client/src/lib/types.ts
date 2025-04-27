// Contact Form Types
export interface ContactForm {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  enquiryType: string;
  message: string;
}

// Newsletter Subscription Type
export interface NewsletterSubscription {
  email: string;
}

// Event Types
export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
  tags: string[];
  attendees: string;
}

// News Article Types
export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  summary: string;
  publicationDate: string;
  author: string;
  category: string;
  tags: string[];
  imageUrl: string;
  isFeatured: boolean;
}

// Resource Types
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: string;
  format: string;
  fileSize?: string;
  downloadUrl?: string;
  externalUrl?: string;
  category: string;
  tags: string[];
}

// Success Story Types
export interface SuccessStory {
  id: string;
  title: string;
  description: string;
  fullStory: string;
  founderName: string;
  founderImage: string;
  founderTitle: string;
  companyName: string;
  industry: string;
  yearFounded: string;
  achievements: string[];
  imageUrl: string;
}

// Program Types
export interface Program {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  eligibility: string;
  duration: string;
  applicationDeadline?: string;
  startDate?: string;
  category: string;
  imageUrl: string;
}

// Team Member Types
export interface TeamMember {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
  socialMedia?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// Partner Types
export interface Partner {
  id: string;
  name: string;
  description: string;
  logoUrl: string;
  websiteUrl: string;
  partnershipType: string;
}
