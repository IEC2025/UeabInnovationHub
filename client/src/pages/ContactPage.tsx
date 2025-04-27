import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters" }),
  enquiryType: z.string({ required_error: "Please select an enquiry type" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "Contact Us | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      enquiryType: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      await apiRequest("POST", "/api/contact", data);
      
      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-primary py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Get in touch with the Innovation & Entrepreneurship Centre at UEAB. 
            We're here to answer your questions and help you connect with our programs.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Contact Information
                </h2>
                <p className="text-neutral-600">
                  Have questions or looking to collaborate? We'd love to hear from you. 
                  Reach out to our team using the form or through any of the contact methods below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 shadow-sm">
                    <MapPin className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Visit Us</h4>
                    <p className="text-neutral-600">
                      Innovation & Entrepreneurship Centre<br />
                      University of Eastern Africa, Baraton<br />
                      P.O. Box 2500 - 30100<br />
                      Eldoret, Kenya
                    </p>
                    <a 
                      href="https://maps.google.com/?q=University+of+Eastern+Africa+Baraton" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary font-medium text-sm mt-2 inline-flex items-center hover:text-secondary/80 transition-colors"
                    >
                      View on Map <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 shadow-sm">
                    <Phone className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-neutral-600">
                      <a 
                        href="tel:+254123456789" 
                        className="hover:text-secondary transition-colors"
                      >
                        +254 123 456 789
                      </a>
                      <br />
                      <a 
                        href="tel:+254123456780" 
                        className="hover:text-secondary transition-colors"
                      >
                        +254 123 456 780
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 shadow-sm">
                    <Mail className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-neutral-600">
                      <a 
                        href="mailto:iec@ueab.ac.ke" 
                        className="hover:text-secondary transition-colors"
                      >
                        iec@ueab.ac.ke
                      </a>
                      <br />
                      <a 
                        href="mailto:info@iec.ueab.ac.ke" 
                        className="hover:text-secondary transition-colors"
                      >
                        info@iec.ueab.ac.ke
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-lg mr-4 shadow-sm">
                    <Clock className="text-primary h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Opening Hours</h4>
                    <p className="text-neutral-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-bold text-lg mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full text-primary border border-neutral-200 hover:text-white hover:bg-primary transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <FaFacebookF className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full text-primary border border-neutral-200 hover:text-white hover:bg-primary transition-colors duration-300"
                    aria-label="Twitter"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full text-primary border border-neutral-200 hover:text-white hover:bg-primary transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-white p-3 rounded-full text-primary border border-neutral-200 hover:text-white hover:bg-primary transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-primary mb-6">
                    Send Us a Message
                  </h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name*</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Your full name"
                                  disabled={isSubmitting}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address*</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  type="email"
                                  placeholder="Your email address"
                                  disabled={isSubmitting}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number (Optional)</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  placeholder="Your phone number"
                                  disabled={isSubmitting}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="enquiryType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Enquiry Type*</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                                disabled={isSubmitting}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select an enquiry type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="general">General Inquiry</SelectItem>
                                  <SelectItem value="programs">Programs & Services</SelectItem>
                                  <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                                  <SelectItem value="events">Events & Workshops</SelectItem>
                                  <SelectItem value="feedback">Feedback</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject*</FormLabel>
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="Subject of your message"
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message*</FormLabel>
                            <FormControl>
                              <Textarea
                                {...field}
                                placeholder="Your message"
                                rows={5}
                                disabled={isSubmitting}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button
                        type="submit"
                        className="bg-primary hover:bg-primary/90 w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Our Location
            </h2>
            <p className="text-neutral-600 max-w-3xl mx-auto">
              Visit us at our campus location. The Innovation & Entrepreneurship Centre 
              is located on the main campus of the University of Eastern Africa, Baraton.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.6826766716694!2d35.0696299!3d0.4828885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1781ef99ab3b9e37%3A0x6613bc59b49aded9!2sUniversity%20of%20Eastern%20Africa%20Baraton!5e0!3m2!1sen!2sus!4v1692642400000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Common Questions
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Find answers to commonly asked questions about the Innovation & 
              Entrepreneurship Centre and our programs.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {/* FAQ Item 1 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Who can participate in your programs?
              </h3>
              <p className="text-neutral-600">
                Our programs are primarily designed for UEAB students and faculty, 
                but many are also open to alumni and the wider community. Specific 
                eligibility criteria may vary by program, so we encourage you to 
                check the details for each opportunity on our Programs page.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                How can I get involved with the Innovation Centre?
              </h3>
              <p className="text-neutral-600">
                There are many ways to get involved, including participating in our 
                workshops and events, applying for our incubation or mentorship programs, 
                volunteering, or partnering with us. Check our Events page for upcoming 
                activities or contact us directly to discuss partnership opportunities.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Do you provide funding for startups?
              </h3>
              <p className="text-neutral-600">
                While we don't directly fund startups, we do help connect entrepreneurs 
                with funding opportunities through our network of investors, grants, and 
                competitions. We also provide guidance on preparing funding applications 
                and pitches as part of our incubation and mentorship programs.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Can I book your facilities for an event?
              </h3>
              <p className="text-neutral-600">
                Yes, our facilities are available for booking by university departments, 
                student groups, and external organizations for innovation-related events. 
                Please contact us with details about your event, including the date, time, 
                number of attendees, and any specific requirements you may have.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                How can I stay updated about your activities?
              </h3>
              <p className="text-neutral-600">
                You can stay updated by subscribing to our newsletter, following us on 
                social media, regularly checking our website's News section, or joining 
                our mailing list. We also post announcements on campus bulletin boards 
                and through university communication channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We Value Your Feedback
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Your feedback helps us improve our services and better serve the UEAB community. 
            Share your thoughts, suggestions, or experiences with us.
          </p>
          <Button asChild className="bg-white text-primary hover:bg-white/90">
            <a href="mailto:feedback@iec.ueab.ac.ke">
              Send Feedback
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
