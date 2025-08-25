import React, { useState, useEffect } from 'react';
import { ArrowRight, Users, Building, Award, MapPin, Calendar, CheckCircle, Globe, Lightbulb, Target, Crown, Medal, Star, Sprout, Phone, Mail, User, Download, Clock, FileText, GraduationCap, Briefcase, Camera, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

// Import PDF documents
import conceptNotePdf from '@assets/2025 CONCEPT NOTE (1).pdf';
import caseForSupportPdf from '@assets/IEC CASE FOR SUPPORT (1)_1756109949196.pdf';
import programPdf from '@assets/BIEW EVENT PROGRAM 2nd Edition (1) (1)_1756109949195.pdf';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      const animateCount = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };
      requestAnimationFrame(animateCount);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Floating Shape Component
const FloatingShape = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    className="absolute pointer-events-none"
    animate={{
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay: delay,
      ease: "easeInOut"
    }}
  >
    {children}
  </motion.div>
);

// Form validation schema
const registrationFormSchema = z.object({
  registrationType: z.string().min(1, "Registration type is required"),
  fullName: z.string().min(1, "Full name is required"),
  organizationName: z.string().min(1, "Organization name is required"),
  position: z.string().min(1, "Position is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(1, "Phone number is required"),
  category: z.string().min(1, "Please select a category"),
  participantCount: z.string().optional(),
  boothRequirements: z.string().optional(),
  specialRequirements: z.string().optional(),
  paymentPreference: z.string().optional(),
  additionalInfo: z.string().optional(),
});

type RegistrationFormData = z.infer<typeof registrationFormSchema>;

const RegistrationPage = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState<'overview' | 'delegation' | 'exhibition'>('overview');

  const registrationMutation = useMutation({
    mutationFn: async (data: RegistrationFormData) => {
      const response = await apiRequest('POST', '/api/biew-registration', data);
      return response.json();
    },
    onSuccess: (data, variables) => {
      toast({
        title: "Registration Submitted Successfully!",
        description: `Your ${variables.registrationType} registration has been sent to our team. We'll contact you within 24 hours with next steps.`,
      });
      setCurrentStep('overview');
    },
    onError: (error: Error) => {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again or contact us directly at iec@ueab.ac.ke.",
        variant: "destructive",
      });
    },
  });

  const handleRegistrationClick = (type: 'delegation' | 'exhibition') => {
    setCurrentStep(type);
  };

  // Registration Form Component
  const RegistrationForm = ({ type }: { type: 'delegation' | 'exhibition' }) => {
    const form = useForm<RegistrationFormData>({
      resolver: zodResolver(registrationFormSchema),
      defaultValues: {
        registrationType: type,
        fullName: '',
        organizationName: '',
        position: '',
        email: '',
        phone: '',
        category: '',
        participantCount: '',
        boothRequirements: '',
        specialRequirements: '',
        paymentPreference: '',
        additionalInfo: '',
      },
    });

    const onSubmit = (data: RegistrationFormData) => {
      registrationMutation.mutate(data);
    };

    return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Static Background Elements - No Animation */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-xl absolute top-20 left-10" />
        <div className="w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl absolute top-40 right-20" />
        <div className="w-24 h-24 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl absolute bottom-40 left-20" />
      </div>

      {/* Header */}
      <motion.section 
        className="relative bg-gradient-to-r from-primary via-blue-600 to-secondary text-white py-12 overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.img
                src="/src/assets/images/iec-logo.png"
                alt="IEC Logo"
                className="h-16"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h1 className="text-3xl font-bold">{type === 'delegation' ? 'Delegation' : 'Exhibition'} Registration</h1>
                <p className="text-blue-100">BIEW 2025 - Submit your registration below</p>
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              onClick={() => setCurrentStep('overview')}
            >
              ← Back to Overview
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <Form {...form}>
            <motion.form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mr-4">
                  {type === 'delegation' ? <Users className="h-6 w-6 text-white" /> : <Building className="h-6 w-6 text-white" />}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">
                    {type === 'delegation' ? 'Delegation Registration' : 'Exhibition Registration'} Form
                  </h2>
                  <p className="text-gray-600">
                    {type === 'delegation' 
                      ? 'Join as a delegate to access all sessions and networking opportunities (KSH 25,000)' 
                      : 'Showcase your innovations and connect with potential partners (KSH 15,000)'
                    }
                  </p>
                </div>
              </div>
              
              {/* Personal Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <User className="h-5 w-5 mr-2 text-primary" />
                  Personal Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            data-testid="input-full-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Position/Title *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            data-testid="input-position"
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
                        <FormLabel>Email Address *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Organization Information */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-primary" />
                  Organization Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="organizationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Institution/Organization *</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            data-testid="input-organization"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-category">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="university">University/Academic Institution</SelectItem>
                            <SelectItem value="startup">Startup/SME</SelectItem>
                            <SelectItem value="corporate">Corporate Organization</SelectItem>
                            <SelectItem value="government">Government Agency</SelectItem>
                            <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              {/* Type-specific fields */}
              {type === 'delegation' && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-primary" />
                    Delegation Details
                  </h3>
                  <FormField
                    control={form.control}
                    name="participantCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Participants</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-participants">
                              <SelectValue placeholder="Select number of participants" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="1">1 participant</SelectItem>
                            <SelectItem value="2-5">2-5 participants</SelectItem>
                            <SelectItem value="6-10">6-10 participants</SelectItem>
                            <SelectItem value="11-20">11-20 participants</SelectItem>
                            <SelectItem value="21+">21+ participants</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {type === 'exhibition' && (
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Exhibition Details
                  </h3>
                  <FormField
                    control={form.control}
                    name="boothRequirements"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Booth Requirements & Setup Details</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={4}
                            placeholder="Describe your booth setup requirements, display needs, power requirements, etc."
                            data-testid="textarea-booth-requirements"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}


              {/* Additional Information */}
              <FormField
                control={form.control}
                name="additionalInfo"
                render={({ field }) => (
                  <FormItem className="mb-8">
                    <FormLabel>Additional Information or Special Requirements</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={3}
                        placeholder="Any dietary restrictions, accessibility needs, questions, or other information you'd like us to know..."
                        data-testid="textarea-additional-info"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={registrationMutation.isPending}
                  data-testid="button-submit-registration"
                >
                  {registrationMutation.isPending ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Registration...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Registration
                    </>
                  )}
                </Button>
              </motion.div>
              
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>📧 Your registration will be sent directly to our team at <strong>iec@ueab.ac.ke</strong></p>
                <p>We'll contact you within 24 hours with payment instructions and next steps.</p>
              </div>
            </div>
          </motion.form>
          </Form>
        </div>
      </section>
    </div>
  );
  }

  if (currentStep === 'delegation') {
    return <RegistrationForm type="delegation" />;
  }

  if (currentStep === 'exhibition') {
    return <RegistrationForm type="exhibition" />;
  }

  // Main Overview Page
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Static Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="w-64 h-64 bg-gradient-to-br from-blue-400/5 to-indigo-400/5 rounded-full blur-3xl absolute -top-32 -left-32" />
        <div className="w-96 h-96 bg-gradient-to-br from-purple-400/5 to-pink-400/5 rounded-full blur-3xl absolute -top-48 -right-48" />
        <div className="w-80 h-80 bg-gradient-to-br from-green-400/5 to-blue-400/5 rounded-full blur-3xl absolute -bottom-40 -left-40" />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative py-24 bg-gradient-to-br from-primary via-blue-600 to-secondary text-white overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        
        {/* Floating Elements */}
        <FloatingShape delay={1}>
          <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white/30 rounded-full"></div>
        </FloatingShape>
        <FloatingShape delay={4}>
          <div className="absolute bottom-20 left-20 w-12 h-12 bg-white/20 rounded-lg rotate-45"></div>
        </FloatingShape>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div 
              className="flex justify-center mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/src/assets/images/iec-logo.png"
                alt="IEC Logo"
                className="h-24 drop-shadow-2xl"
              />
            </motion.div>
            
            <motion.div 
              className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              🎉 Welcome to BIEW 2025
            </motion.div>
            
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-8 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              2nd Annual Baraton Innovation & 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                {" "}Entrepreneurship Week
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl mb-6 opacity-90 max-w-4xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              "Blueprints for Tomorrow: Advancing Learning, Innovation & Enterprise through Design Thinking and Cognitive Mastery"
            </motion.p>
            
            <motion.div 
              className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg mb-12"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <Calendar className="h-6 w-6 mr-3" />
                September 29 - October 2, 2025
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
                <MapPin className="h-6 w-6 mr-3" />
                Innovation Arena, UEAB Campus
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
                data-testid="button-register-now"
              >
                Register Now
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white px-8 py-4 text-lg font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
                onClick={() => document.getElementById('program-section')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Program
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Animated Stats Section */}
      <motion.section 
        className="py-16 bg-gradient-to-r from-gray-50 to-blue-50 relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                <AnimatedCounter end={1500} suffix="+" />
              </div>
              <div className="text-gray-600 font-semibold">Expected Attendees</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <div className="text-gray-600 font-semibold">Universities</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                <AnimatedCounter end={200} suffix="+" />
              </div>
              <div className="text-gray-600 font-semibold">Organizations</div>
            </motion.div>
            
            <motion.div 
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-white/20"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <div className="text-gray-600 font-semibold">Innovation Projects</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Distinguished Speakers */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              🎤 Distinguished Speakers
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">Let's Meet with Our Speakers</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                name: "Dr. Tony Omwansa", 
                title: "CEO, KeNIA", 
                role: "CHIEF GUEST", 
                icon: Crown, 
                gradient: "from-yellow-400 to-orange-500",
image: "/src/assets/images/dr-tony-omwansa.jpeg"
              },
              { 
                name: "Prof. Msafiri Jackson", 
                title: "Vice Chancellor, UEAB", 
                role: "HOST", 
                icon: Users, 
                gradient: "from-blue-500 to-indigo-500",
image: "/src/assets/images/prof-msafiri-jackson.jpeg"
              },
              { 
                name: "Ms. Esther Masese", 
                title: "CFO, Safaricom", 
                role: "KEYNOTE", 
                icon: Building, 
                gradient: "from-green-500 to-teal-500",
image: "/src/assets/images/ms-esther-masese.jpeg"
              },
              { 
                name: "Dr. Benard Chitunga", 
                title: "Chancellor, Cooperative University of Kenya", 
                role: "SPEAKER", 
                icon: Award, 
                gradient: "from-purple-500 to-pink-500",
image: "/src/assets/images/dr-benard-chitunga.jpeg"
              }
            ].map((speaker, index) => (
              <motion.div 
                key={index}
                className="flip-card h-80 cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                data-testid={`speaker-card-${index}`}
              >
                <div className="flip-card-inner h-full relative">
                  {/* Front of card - Photo only */}
                  <div className="flip-card-front absolute inset-0">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="w-full h-full object-cover object-center rounded-none"
                      style={{ borderRadius: '0px' }}
                      data-testid={`speaker-image-${index}`}
                      onError={(e) => {
                        console.log('Image failed to load:', speaker.image);
                        e.currentTarget.src = '/src/assets/images/BTV08418.JPG';
                      }}
                    />
                  </div>
                  
                  {/* Back of card - Name and info */}
                  <div className={`flip-card-back absolute inset-0 bg-gradient-to-br ${speaker.gradient} text-white flex flex-col justify-center items-center p-6 text-center`}>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-bold mb-4 animate-fade-in-up">
                      {speaker.role}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 animate-fade-in-up animation-delay-200" data-testid={`speaker-name-${index}`}>
                      {speaker.name}
                    </h3>
                    <p className="text-lg font-medium opacity-90 animate-fade-in-up animation-delay-400" data-testid={`speaker-title-${index}`}>
                      {speaker.title}
                    </p>
                    
                    {/* Icon */}
                    <div className="mt-4 animate-fade-in-up animation-delay-600">
                      <speaker.icon className="h-12 w-12 text-white/80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration-section" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              🎫 Registration
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">Choose Your Registration Plan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join us for the most comprehensive innovation and entrepreneurship gathering in East Africa. 
              Submit your registration form and our team will contact you with payment details within 24 hours.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Delegation Registration */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern opacity-20"></div>
                  <Users className="h-24 w-24 text-white/90 relative z-10" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                    PREMIUM
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-4">Delegation Registration</h3>
                  <div className="flex items-baseline mb-6">
                    <div className="flip-card-price h-16 cursor-pointer">
                      <div className="flip-card-inner h-full relative">
                        <div className="flip-card-front absolute inset-0 flex items-center">
                          <span className="text-5xl font-bold text-green-600">KSH 10,000</span>
                        </div>
                        <div className="flip-card-back absolute inset-0 flex items-center bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg">
                          <span className="text-3xl font-bold">$75 USD</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500 ml-2">per delegation</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Full 4-day access to all sessions",
                      "VIP networking opportunities", 
                      "Premium delegate kit & materials",
                      "Access to all exhibition booths",
                      "Meals & refreshments included",
                      "Panel discussion participation",
                      "Certificate of participation",
                      "Post-event resources access"
                    ].map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {idx < 2 ? <strong>{feature}</strong> : feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      onClick={() => handleRegistrationClick('delegation')}
                      data-testid="button-register-delegation"
                    >
                      <span className="group-hover:mr-1 transition-all">
                        Register as Delegate
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Exhibition Registration */}
            <motion.div 
              className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group hover:shadow-3xl transition-all duration-500"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative">
                <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-pattern opacity-20"></div>
                  <Building className="h-24 w-24 text-white/90 relative z-10" />
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-semibold">
                    SHOWCASE
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-primary mb-4">Exhibition Registration</h3>
                  <div className="flex items-baseline mb-6">
                    <div className="flip-card-price h-16 cursor-pointer">
                      <div className="flip-card-inner h-full relative">
                        <div className="flip-card-front absolute inset-0 flex items-center">
                          <span className="text-5xl font-bold text-green-600">KSH 100,000</span>
                        </div>
                        <div className="flip-card-back absolute inset-0 flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg">
                          <span className="text-3xl font-bold">$750 USD</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-gray-500 ml-2">per booth</span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      "Dedicated exhibition space",
                      "Professional setup support",
                      "Prime location branding opportunities",
                      "2 complimentary delegate passes",
                      "Digital marketing inclusion",
                      "Lead generation support",
                      "Networking session access",
                      "Post-event exhibition report"
                    ].map((feature, idx) => (
                      <motion.li 
                        key={idx}
                        className="flex items-start group"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                          {idx < 2 ? <strong>{feature}</strong> : feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                      onClick={() => handleRegistrationClick('exhibition')}
                      data-testid="button-register-exhibition"
                    >
                      <span className="group-hover:mr-1 transition-all">
                        Register for Exhibition
                      </span>
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Email Contact Info */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-100 rounded-3xl p-8 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Simple Registration Process</h3>
              <p className="text-gray-600 mb-6">
                Fill out the registration form above and we'll send your details directly to our team at <strong>iec@ueab.ac.ke</strong>. 
                Our staff will contact you within 24 hours with payment instructions and next steps.
              </p>
              <div className="text-sm text-gray-500">
                Questions? Contact us directly at <strong>iec@ueab.ac.ke</strong> or call our office.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Downloadable Documents */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              📋 Event Resources
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">Download Event Documents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access important event documents to better understand BIEW 2025 and prepare for your participation.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div 
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 group hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Concept Note</h3>
                  <p className="text-gray-600">Detailed overview of BIEW 2025 objectives and themes</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 rounded-xl group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = conceptNotePdf;
                  link.download = '2025 CONCEPT NOTE.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                data-testid="button-download-concept"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Concept Note
              </Button>
            </motion.div>
            
            <motion.div 
              className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100 group hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 transition-transform duration-500">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-2">Case for Support</h3>
                  <p className="text-gray-600">Comprehensive sponsorship and partnership information</p>
                </div>
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-xl group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = caseForSupportPdf;
                  link.download = 'IEC CASE FOR SUPPORT.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                data-testid="button-download-case"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Case for Support
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Draft Timetable */}
      <section id="program-section" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              📅 Event Schedule
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">Draft Timetable</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's a preview of what to expect during the 4-day innovation and entrepreneurship week.
            </p>
          </motion.div>
          
          <div className="max-w-6xl mx-auto">
            <motion.div 
              className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold">Day</th>
                      <th className="px-6 py-4 text-left font-bold">Date</th>
                      <th className="px-6 py-4 text-left font-bold">Time</th>
                      <th className="px-6 py-4 text-left font-bold">Activity</th>
                      <th className="px-6 py-4 text-left font-bold">Venue</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { day: "Day 1", date: "Sep 29", time: "08:00 - 09:00", activity: "Registration & Welcome Coffee", venue: "Innovation Arena Lobby" },
                      { day: "", date: "", time: "09:00 - 10:30", activity: "Opening Ceremony & Keynote", venue: "Main Auditorium" },
                      { day: "", date: "", time: "11:00 - 12:30", activity: "Panel: Innovation Ecosystem in East Africa", venue: "Main Auditorium" },
                      { day: "", date: "", time: "14:00 - 17:00", activity: "Innovation Exhibition Opens", venue: "Exhibition Hall" },
                      
                      { day: "Day 2", date: "Sep 30", time: "09:00 - 10:30", activity: "Design Thinking Masterclass", venue: "Workshop Room A" },
                      { day: "", date: "", time: "11:00 - 12:30", activity: "Startup Pitch Competition", venue: "Main Auditorium" },
                      { day: "", date: "", time: "14:00 - 15:30", activity: "Corporate Innovation Sessions", venue: "Conference Room B" },
                      { day: "", date: "", time: "16:00 - 17:30", activity: "Networking & Mentorship Hub", venue: "Innovation Arena" },
                      
                      { day: "Day 3", date: "Oct 1", time: "09:00 - 10:30", activity: "Cognitive Mastery Workshop", venue: "Workshop Room A" },
                      { day: "", date: "", time: "11:00 - 12:30", activity: "Tech Innovation Showcase", venue: "Exhibition Hall" },
                      { day: "", date: "", time: "14:00 - 15:30", activity: "Entrepreneurship Bootcamp", venue: "Conference Room B" },
                      { day: "", date: "", time: "16:00 - 17:00", activity: "Innovation Awards Ceremony", venue: "Main Auditorium" },
                      
                      { day: "Day 4", date: "Oct 2", time: "09:00 - 10:30", activity: "Future of Innovation Panel", venue: "Main Auditorium" },
                      { day: "", date: "", time: "11:00 - 12:30", activity: "Partnership & Collaboration Forum", venue: "Conference Room A" },
                      { day: "", date: "", time: "14:00 - 15:00", activity: "Closing Ceremony", venue: "Main Auditorium" },
                      { day: "", date: "", time: "15:00 - 16:00", activity: "Farewell Lunch", venue: "Innovation Arena" }
                    ].map((item, index) => (
                      <motion.tr 
                        key={index}
                        className="hover:bg-blue-50 transition-colors duration-200"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <td className="px-6 py-4 font-semibold text-primary">{item.day}</td>
                        <td className="px-6 py-4 text-gray-600">{item.date}</td>
                        <td className="px-6 py-4 text-gray-600 font-mono text-sm">{item.time}</td>
                        <td className="px-6 py-4 font-medium text-gray-800">{item.activity}</td>
                        <td className="px-6 py-4 text-gray-600">{item.venue}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
            
            <motion.div 
              className="text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-600 text-sm mb-4">
                * This is a draft timetable and is subject to changes. Final program will be shared with registered participants.
              </p>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = programPdf;
                  link.download = 'BIEW EVENT PROGRAM 2025.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                data-testid="button-download-program"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Full Program
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <FloatingShape delay={2}>
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-primary/20 rounded-full"></div>
        </FloatingShape>
        <FloatingShape delay={5}>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-secondary/10 rounded-lg rotate-45"></div>
        </FloatingShape>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider mb-4">
              🤝 Partnership Opportunities
            </div>
            <h2 className="text-5xl font-bold text-primary mb-6">Sponsorship Packages</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to drive innovation and entrepreneurship across Africa. Choose the sponsorship package that aligns with your organization's goals and make a lasting impact.
            </p>
          </motion.div>
          
          {/* Title Sponsor - Featured */}
          <motion.div 
            className="max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 p-1 rounded-3xl">
              <div className="bg-white rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-300/20 to-orange-300/20 rounded-full -mr-16 -mt-16"></div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-4">
                        <Crown className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-gray-800">🏆 Title Sponsor</h3>
                        <p className="text-gray-600">Exclusive naming rights and premium visibility</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-green-600">KSH 3,000,000</div>
                      <div className="text-sm text-gray-500">Exclusive Package</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <ul className="space-y-3">
                      {[
                        "Exclusive naming rights to the event",
                        "Premium logo placement on all materials",
                        "Keynote speaking opportunity",
                        "2 prime exhibition booths"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {[
                        "10 complimentary delegate passes",
                        "VIP hospitality and networking",
                        "Extensive media coverage",
                        "Recognition as sole Title Sponsor"
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                          <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button
                    className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold py-4 text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                    onClick={() => window.open('mailto:iec@ueab.ac.ke?subject=Title Sponsor Package - BIEW 2025', '_blank')}
                    data-testid="button-sponsor-title"
                  >
                    Become Title Sponsor
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Other Sponsorship Packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "🥇 Platinum Sponsor", 
                price: "KSH 2,000,000", 
                gradient: "from-gray-300 to-gray-500",
                bgGradient: "from-gray-50 to-gray-100",
                icon: Medal,
                features: [
                  "Prominent logo placement",
                  "Panel speaking opportunity", 
                  "1 prime exhibition booth",
                  "7 complimentary passes",
                  "Opening/closing recognition",
                  "Press release inclusion"
                ]
              },
              { 
                title: "🥈 Gold Sponsor", 
                price: "KSH 1,000,000", 
                gradient: "from-yellow-400 to-yellow-600",
                bgGradient: "from-yellow-50 to-orange-50",
                icon: Star,
                features: [
                  "Logo on website & program",
                  "1 exhibition booth",
                  "5 complimentary passes", 
                  "Media mentions",
                  "Closing ceremony mention",
                  "Digital marketing inclusion"
                ]
              },
              { 
                title: "🥉 Silver Sponsor", 
                price: "KSH 750,000", 
                gradient: "from-blue-400 to-indigo-500",
                bgGradient: "from-blue-50 to-indigo-50",
                icon: Award,
                features: [
                  "Logo on website and banners",
                  "1 standard exhibition booth",
                  "3 complimentary passes",
                  "Program booklet recognition", 
                  "Side session mentions"
                ]
              },
              { 
                title: "🌱 Bronze Sponsor", 
                price: "KSH 500,000", 
                gradient: "from-green-400 to-teal-500",
                bgGradient: "from-green-50 to-teal-50",
                icon: Sprout,
                features: [
                  "Logo on sponsors page",
                  "2 complimentary passes",
                  "Closing remarks recognition",
                  "Digital acknowledgment",
                  "Certificate of partnership"
                ]
              }
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                className={`bg-gradient-to-br ${pkg.bgGradient} rounded-2xl p-6 shadow-lg border border-white/50 group hover:shadow-2xl transition-all duration-500`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-500`}>
                    <pkg.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  <div className="text-2xl font-bold text-green-600 mb-1">{pkg.price}</div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  className={`w-full bg-gradient-to-r ${pkg.gradient} text-white font-semibold py-2 rounded-xl hover:shadow-lg transition-all duration-300`}
                  onClick={() => window.open(`mailto:iec@ueab.ac.ke?subject=${pkg.title.split(' ')[1]} Sponsor Package - BIEW 2025`, '_blank')}
                  data-testid={`button-sponsor-${pkg.title.split(' ')[1].toLowerCase()}`}
                >
                  Get Package
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-primary via-blue-600 to-secondary text-white relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-grid-pattern"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative">
          <motion.h2 
            className="text-5xl font-bold mb-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Transform Africa's Innovation Landscape?
          </motion.h2>
          <motion.p 
            className="text-xl mb-12 max-w-3xl mx-auto opacity-90"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join us for the most comprehensive innovation and entrepreneurship gathering in East Africa. 
            Submit your registration form and our team will contact you within 24 hours with next steps.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { icon: MapPin, title: "Venue", desc: "Innovation Arena\nUEAB Main Campus\nEldoret, Kenya" },
              { icon: Calendar, title: "Duration", desc: "September 29 - October 2, 2025\n4 Days of Innovation\nFull Schedule Available" },
              { icon: Phone, title: "Contact", desc: "iec@ueab.ac.ke\nDirector: Mr. Albert Wakoli\nInnovation & Entrepreneurship Centre" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                className="text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 + idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm whitespace-pre-line">{item.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="space-y-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-4 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
                  onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
                  data-testid="button-register-final"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-sm border-white/30 text-white px-10 py-4 text-lg font-semibold rounded-2xl hover:bg-white/20 transition-all duration-300"
                  onClick={() => window.open('mailto:iec@ueab.ac.ke?subject=BIEW 2025 Inquiry', '_blank')}
                  data-testid="button-contact-final"
                >
                  Contact Us
                </Button>
              </motion.div>
            </div>
            
            <div className="text-sm text-white/70 mt-8">
              <motion.a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSftPLH7DM49ihEbADqU3kIVhuSJ94IMPO-ptZVhFO9E5awfLQ/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-yellow-300 hover:text-yellow-200 underline transition-colors duration-300"
                data-testid="link-innovation-submission"
                whileHover={{ scale: 1.05 }}
              >
                <Lightbulb className="h-4 w-4 mr-2" />
                Have an innovation to showcase? Submit your innovation here
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.img
              src="/src/assets/images/iec-logo.png"
              alt="IEC Logo"
              className="h-16 mx-auto mb-6 opacity-80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.8, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
            <p className="text-gray-400 text-lg mb-4">
              © 2025 BIEW - All rights reserved
            </p>
            <p className="text-gray-500 text-sm">
              Designed by Innovation & Entrepreneurship Centre, University of Eastern Africa, Baraton
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegistrationPage;