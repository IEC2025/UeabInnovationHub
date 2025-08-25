import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Calendar, MapPin, Users, Building, Award, Download, 
  Clock, ChevronRight, Star, Crown, Medal, Trophy,
  FileText, BookOpen, Target, Lightbulb, Globe,
  ArrowRight, CheckCircle, Sprout
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

// Animated Counter Component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ 
  end, duration = 2, suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [end, duration, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Floating Image Component
const FloatingImage: React.FC<{ src: string; alt: string; className?: string }> = ({ 
  src, alt, className = "" 
}) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

const CeilStyleHomePage: React.FC = () => {
  const controls = useAnimation();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - CEIL Style */}
      <section className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        {/* Logo Section */}
        <div className="relative z-10 pt-8 pb-4">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center"
              >
                <img
                  src="/src/assets/images/iec-logo.png"
                  alt="IEC Logo"
                  className="h-16 w-auto"
                />
              </motion.div>
              <div className="w-px h-16 bg-white/30"></div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center"
              >
                <div className="text-white text-center">
                  <div className="text-sm font-semibold">Hosted by</div>
                  <div className="text-lg font-bold">UEAB Innovation Centre</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 pt-12 pb-20">
          <div className="container mx-auto px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-4"
            >
              <div className="text-white/90 text-lg font-semibold uppercase tracking-wider mb-4">
                Welcome! to BIEW 2025
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              BIEW Summit 2025
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl mb-8 max-w-4xl mx-auto leading-relaxed"
            >
              Blueprints for Tomorrow: Advancing Learning, Innovation & Enterprise through Design Thinking and Cognitive Mastery
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col md:flex-row justify-center items-center gap-6 text-xl mb-12"
            >
              <div className="flex items-center">
                <MapPin className="h-6 w-6 mr-2" />
                Mombasa, Kenya
              </div>
              <div className="flex items-center">
                <Calendar className="h-6 w-6 mr-2" />
                29th September - 2nd October 2025
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Link href="/registration">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Brochure
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Floating Hero Image */}
        <motion.div 
          className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden lg:block"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <FloatingImage
            src="/src/assets/images/innovation-week-group.jpg"
            alt="BIEW 2025"
            className="w-80 h-96 rounded-3xl shadow-2xl"
          />
        </motion.div>
      </section>

      {/* Strategy Pillars Section - CEIL Style */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Innovation Development */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <FloatingImage
                  src="/src/assets/images/innovation-lab.jpg"
                  alt="Innovation Development"
                  className="w-full h-64 rounded-2xl shadow-xl mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="bg-primary text-white text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full inline-block mb-4">
                Strategy
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                Innovation Development
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Foster breakthrough innovations through design thinking, emerging technologies, and collaborative research initiatives that drive sustainable development.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Entrepreneurship */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <FloatingImage
                  src="/src/assets/images/startup-incubation.jpg"
                  alt="Entrepreneurship"
                  className="w-full h-64 rounded-2xl shadow-xl mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="bg-secondary text-white text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full inline-block mb-4">
                Strategy
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                Entrepreneurship
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Empower entrepreneurs with mentorship, funding opportunities, and market access to transform innovative ideas into thriving enterprises.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-secondary text-secondary hover:bg-secondary hover:text-white"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Employment */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="relative mb-8">
                <FloatingImage
                  src="/src/assets/images/career-development.jpg"
                  alt="Employment Creation"
                  className="w-full h-64 rounded-2xl shadow-xl mx-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="bg-primary text-white text-sm font-semibold uppercase tracking-wider px-4 py-2 rounded-full inline-block mb-4">
                Strategy
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                Employment Creation
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Generate sustainable employment opportunities through skills development, industry partnerships, and entrepreneurial ventures.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white"
              >
                Learn More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About BIEW Section with Animated Counters */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
                About BIEW
              </div>
              <h2 className="text-4xl font-bold text-primary mb-6">
                BIEW Summit 2025
              </h2>
              <h4 className="text-xl font-semibold text-gray-700 mb-6">
                Hosted By: Innovation & Entrepreneurship Centre, UEAB
              </h4>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                The 2nd Annual Baraton Innovation & Entrepreneurship Week (BIEW) 2025 brings together 
                visionary leaders, innovative minds, and industry pioneers to explore the theme 
                "Blueprints for Tomorrow: Advancing Learning, Innovation & Enterprise through Design 
                Thinking and Cognitive Mastery." This transformative event is scheduled for September 29 
                - October 2, 2025, in the vibrant Innovation Arena at UEAB Campus.
              </p>
              
              {/* Achievement Counters */}
              <div className="bg-gray-50 rounded-3xl p-8 mb-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">BIEW Achievement in 2024</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter end={350} suffix="+" />
                    </div>
                    <div className="text-gray-600 font-semibold">Attendees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">
                      <AnimatedCounter end={25} suffix="+" />
                    </div>
                    <div className="text-gray-600 font-semibold">Universities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">
                      <AnimatedCounter end={45} suffix="+" />
                    </div>
                    <div className="text-gray-600 font-semibold">Institutions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-secondary mb-2">
                      <AnimatedCounter end={60} suffix="+" />
                    </div>
                    <div className="text-gray-600 font-semibold">Organizations</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <FloatingImage
                src="/src/assets/images/ueab-campus-flags.jpg"
                alt="UEAB Campus"
                className="w-full h-96 rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Goals Section - CEIL Style */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Why Choose Us?
            </div>
            <h2 className="text-4xl font-bold text-primary">BIEW Summit 2025 Goals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                number: "1",
                title: "Foster Innovation Culture",
                description: "Cultivate a robust innovation ecosystem that promotes creative problem-solving and breakthrough thinking across academic and industry partnerships."
              },
              {
                number: "2", 
                title: "Enhance Entrepreneurial Skills",
                description: "Develop comprehensive entrepreneurial capabilities through mentorship programs, practical workshops, and strategic guidance from industry leaders."
              },
              {
                number: "3",
                title: "Strengthen Industry-Academia Links",
                description: "Build sustainable bridges between academic institutions and industry to facilitate knowledge transfer, research commercialization, and practical applications."
              },
              {
                number: "4",
                title: "Create Employment Opportunities", 
                description: "Generate meaningful employment pathways through startup incubation, skills development programs, and innovative venture creation initiatives."
              }
            ].map((goal, index) => (
              <motion.div
                key={goal.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white font-bold text-2xl group-hover:scale-110 transition-transform duration-300">
                    {goal.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{goal.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Event Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Access essential documents to learn more about BIEW 2025 and prepare for the summit.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-white relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4">
                <FileText className="h-12 w-12 text-white/20" />
              </div>
              <BookOpen className="h-16 w-16 mb-6 text-white/90" />
              <h3 className="text-2xl font-bold mb-4">Concept Note</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Comprehensive overview of BIEW 2025 objectives, themes, and expected outcomes.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-primary hover:bg-white/90 group-hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 text-white relative overflow-hidden group"
            >
              <div className="absolute top-4 right-4">
                <Target className="h-12 w-12 text-white/20" />
              </div>
              <Award className="h-16 w-16 mb-6 text-white/90" />
              <h3 className="text-2xl font-bold mb-4">Case for Support</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Detailed rationale for supporting BIEW 2025 and partnership opportunities available.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-secondary hover:bg-white/90 group-hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tickets Section - CEIL Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Tickets
            </div>
            <h2 className="text-4xl font-bold text-primary">Choose Your Best Ticket Plan</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Delegation Pass */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-4">
                  Delegation Pass
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">KSH 25,000</span>
                  <span className="text-gray-500 ml-2">/ delegation</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Full 4-day access to all sessions",
                    "VIP networking sessions", 
                    "Exhibition booth visits",
                    "Meals, refreshments & delegate kit",
                    "Panel discussion participation"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className="w-full bg-secondary text-white hover:bg-secondary/90 group-hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Link href="/registration">
                    Select Plan
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Exhibition Pass */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-secondary to-primary rounded-2xl flex items-center justify-center">
                    <Building className="h-10 w-10 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-primary text-center mb-4">
                  Exhibition Pass
                </h3>
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-secondary">KSH 15,000</span>
                  <span className="text-gray-500 ml-2">/ booth</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {[
                    "Dedicated exhibition space",
                    "Setup & teardown support",
                    "Branding opportunities", 
                    "2 complimentary passes",
                    "Digital marketing inclusion"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className="w-full bg-primary text-white hover:bg-primary/90 group-hover:scale-105 transition-all duration-300"
                  size="lg"
                >
                  <Link href="/registration">
                    Select Plan
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sponsorship Section - CEIL Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Sponsorship
            </div>
            <h2 className="text-4xl font-bold text-primary">Become Part of BIEW Summit 2025</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Title Sponsor */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-3xl p-8 text-white relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <Crown className="h-12 w-12 text-yellow-200" />
              </div>
              <div className="relative z-10">
                <Trophy className="h-16 w-16 mb-6" />
                <div className="flex items-center mb-4">
                  <Crown className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">Title Sponsor</h3>
                </div>
                <div className="text-3xl font-bold mb-6">KES 3,000,000</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Exclusive naming rights</li>
                  <li>• Premium logo placement</li>
                  <li>• Keynote speaking slot</li>
                  <li>• 2 prime exhibition booths</li>
                  <li>• 10 complimentary delegate passes</li>
                  <li>• Recognition as sole Title Sponsor</li>
                </ul>
                <Button 
                  className="w-full bg-white text-yellow-600 hover:bg-yellow-50 font-semibold"
                  onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Title Sponsor Package - BIEW 2025', '_blank')}
                >
                  Become Sponsor
                </Button>
              </div>
            </motion.div>

            {/* Platinum Sponsor */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl p-8 text-white relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <Medal className="h-12 w-12 text-gray-200" />
              </div>
              <div className="relative z-10">
                <Award className="h-16 w-16 mb-6" />
                <div className="flex items-center mb-4">
                  <Medal className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">Platinum Sponsor</h3>
                </div>
                <div className="text-3xl font-bold mb-6">KES 2,000,000</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Prominent logo placement</li>
                  <li>• Panel speaking opportunity</li>
                  <li>• 1 prime exhibition booth</li>
                  <li>• 7 complimentary passes</li>
                  <li>• Opening/closing recognition</li>
                  <li>• Press release inclusion</li>
                </ul>
                <Button 
                  className="w-full bg-white text-gray-600 hover:bg-gray-50 font-semibold"
                  onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Platinum Sponsor Package - BIEW 2025', '_blank')}
                >
                  Become Sponsor
                </Button>
              </div>
            </motion.div>

            {/* Gold Sponsor */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-3xl p-8 text-white relative overflow-hidden group transform hover:scale-105 transition-all duration-300"
            >
              <div className="absolute top-4 right-4">
                <Star className="h-12 w-12 text-yellow-200" />
              </div>
              <div className="relative z-10">
                <Target className="h-16 w-16 mb-6" />
                <div className="flex items-center mb-4">
                  <Star className="h-6 w-6 mr-2" />
                  <h3 className="text-2xl font-bold">Gold Sponsor</h3>
                </div>
                <div className="text-3xl font-bold mb-6">KES 1,000,000</div>
                <ul className="space-y-2 text-sm mb-6">
                  <li>• Logo on website & program</li>
                  <li>• 1 exhibition booth</li>
                  <li>• 5 complimentary passes</li>
                  <li>• Media mentions</li>
                  <li>• Closing ceremony mention</li>
                  <li>• Digital marketing inclusion</li>
                </ul>
                <Button 
                  className="w-full bg-white text-yellow-700 hover:bg-yellow-50 font-semibold"
                  onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Gold Sponsor Package - BIEW 2025', '_blank')}
                >
                  Become Sponsor
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Silver & Bronze Sponsors */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-400 rounded-2xl flex items-center justify-center mr-4">
                  <Medal className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Silver Sponsor</h3>
                  <div className="text-2xl font-bold text-secondary">KES 750,000</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Logo on website and banners</li>
                <li>• 1 standard exhibition booth</li>
                <li>• 3 complimentary passes</li>
                <li>• Program booklet recognition</li>
                <li>• Side session mentions</li>
              </ul>
              <Button 
                className="w-full bg-secondary text-white hover:bg-secondary/90"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Silver Sponsor Package - BIEW 2025', '_blank')}
              >
                Become Sponsor
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-4">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary">Bronze Sponsor</h3>
                  <div className="text-2xl font-bold text-secondary">KES 500,000</div>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Logo on sponsors page</li>
                <li>• 2 complimentary passes</li>
                <li>• Closing remarks recognition</li>
                <li>• Digital acknowledgment</li>
                <li>• Certificate of partnership</li>
              </ul>
              <Button 
                className="w-full bg-primary text-white hover:bg-primary/90"
                onClick={() => window.open('mailto:info@ueab.ac.ke?subject=Bronze Sponsor Package - BIEW 2025', '_blank')}
              >
                Become Sponsor
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Draft Timetable Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Draft Timetable</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Four days of intensive learning, networking, and innovation across multiple tracks and sessions.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-primary to-secondary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Day 1 - Sep 29</th>
                    <th className="px-6 py-4 text-left font-semibold">Day 2 - Sep 30</th>
                    <th className="px-6 py-4 text-left font-semibold">Day 3 - Oct 1</th>
                    <th className="px-6 py-4 text-left font-semibold">Day 4 - Oct 2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">08:00 - 09:00</td>
                    <td className="px-6 py-4">Registration & Welcome Coffee</td>
                    <td className="px-6 py-4">Networking Breakfast</td>
                    <td className="px-6 py-4">Innovation Lab Sessions</td>
                    <td className="px-6 py-4">Final Presentations Setup</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">09:00 - 10:30</td>
                    <td className="px-6 py-4">Opening Ceremony & Keynote</td>
                    <td className="px-6 py-4">Design Thinking Workshop</td>
                    <td className="px-6 py-4">Entrepreneurship Masterclass</td>
                    <td className="px-6 py-4">Innovation Showcase</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">10:30 - 11:00</td>
                    <td className="px-6 py-4 text-gray-500">Tea Break</td>
                    <td className="px-6 py-4 text-gray-500">Coffee Break</td>
                    <td className="px-6 py-4 text-gray-500">Networking Break</td>
                    <td className="px-6 py-4 text-gray-500">Awards Preparation</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">11:00 - 12:30</td>
                    <td className="px-6 py-4">Industry Panel Discussion</td>
                    <td className="px-6 py-4">Cognitive Mastery Sessions</td>
                    <td className="px-6 py-4">Startup Pitch Competition</td>
                    <td className="px-6 py-4">Closing Ceremony & Awards</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">12:30 - 14:00</td>
                    <td className="px-6 py-4 text-gray-500">Lunch & Exhibition</td>
                    <td className="px-6 py-4 text-gray-500">Lunch & Networking</td>
                    <td className="px-6 py-4 text-gray-500">Lunch & Mentoring</td>
                    <td className="px-6 py-4 text-gray-500">Farewell Lunch</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">14:00 - 15:30</td>
                    <td className="px-6 py-4">Innovation Workshop Track A</td>
                    <td className="px-6 py-4">Technology Integration Forum</td>
                    <td className="px-6 py-4">Investment & Funding Panel</td>
                    <td className="px-6 py-4 text-gray-400">Event Conclusion</td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">15:30 - 17:00</td>
                    <td className="px-6 py-4">Innovation Workshop Track B</td>
                    <td className="px-6 py-4">Collaborative Project Sessions</td>
                    <td className="px-6 py-4">Industry Partnerships Forum</td>
                    <td className="px-6 py-4 text-gray-400">-</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Speakers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-secondary text-sm font-semibold uppercase tracking-wider mb-4">
              Speakers
            </div>
            <h2 className="text-4xl font-bold text-primary">Let's Meet with Our Speakers</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              {
                name: "Prof. Tony Omwansa",
                title: "CEO, KeNIA",
                image: "/src/assets/images/speakers/prof-omwansa.jpg",
                badge: "Chief Guest"
              },
              {
                name: "Prof. Msafiri Jackson",
                title: "Vice Chancellor, UEAB",
                image: "/src/assets/images/speakers/prof-jackson.jpg",
                badge: "Host"
              },
              {
                name: "Esther Masese",
                title: "CFO, Safaricom",
                image: "/src/assets/images/speakers/esther-masese.jpg",
                badge: "Keynote"
              },
              {
                name: "Dr. Benard Chitunga",
                title: "Innovation Expert",
                image: "/src/assets/images/speakers/dr-chitunga.jpg",
                badge: "Panelist"
              }
            ].map((speaker, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Globe className="h-20 w-20 text-primary/50" />
                  </div>
                  {speaker.badge && (
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {speaker.badge}
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-primary text-lg mb-2 group-hover:text-secondary transition-colors">
                  {speaker.name}
                </h4>
                <p className="text-gray-600 text-sm mb-2">{speaker.title}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              View More Speakers <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 BIEW all rights reserved. Design by Innovation & Entrepreneurship Centre, UEAB.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CeilStyleHomePage;