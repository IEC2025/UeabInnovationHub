import { useEffect } from "react";
import SmartSlider3 from '@/components/sliders/SmartSlider3';
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Rocket,
  Users,
  GraduationCap,
  Calendar,
  ArrowRight,
  Check,
  BookOpen,
  Lightbulb,
  Target,
  Award,
  LineChart,
} from "lucide-react";

const ProgramsPage = () => {
  // Set document title
  useEffect(() => {
    document.title = "Programs | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <div>
      {/* Smart Slider 3 */}
      <div className="mb-8">
        <SmartSlider3 
          slides={[
            {
              id: 1,
              title: "Startup Incubation Program",
              description: "Comprehensive support for early-stage startups with mentorship, funding opportunities, and workspace access.",
              image: "/src/assets/images/BTV08785.JPG",
              link: "/programs#incubation",
              tags: ["Incubation", "Funding"]
            },
            {
              id: 2,
              title: "Mentorship Network",
              description: "Connect with industry experts and successful entrepreneurs for guidance and strategic advice.",
              image: "/src/assets/images/BTV08537.JPG",
              link: "/programs#mentorship",
              tags: ["Mentorship", "Networking"]
            },
            {
              id: 3,
              title: "Innovation Workshops",
              description: "Hands-on workshops covering design thinking, business modeling, and technology innovation.",
              image: "/src/assets/images/kiw-image3.jpg",
              link: "/programs#workshops",
              tags: ["Workshops", "Training"]
            },
            {
              id: 4,
              title: "Funding Opportunities",
              description: "Access to grants, competitions, and investor networks to fund your innovative ideas.",
              image: "/src/assets/images/BTV08785.JPG",
              link: "/programs#funding",
              tags: ["Funding", "Grants"]
            }
          ]}
          layout="showcase"
          autoPlay={true}
          showThumbnails={true}
          responsiveBreakpoints={{ mobile: 1, tablet: 2, desktop: 3 }}
        />
      </div>
      
      {/* Page Banner - Hidden now */}
      <div className="bg-primary py-16 md:py-24 relative" style={{display: 'none'}}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Programs</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Discover our comprehensive range of programs designed to foster
            innovation, develop entrepreneurial skills, and support startup
            growth.
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

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Program Overview
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
              Empowering Innovation at Every Stage
            </h2>
            <p className="text-neutral-700">
              Our programs are designed to support entrepreneurs and innovators
              at every stage of their journey, from ideation to market entry and
              growth. We focus on building skills, providing resources, and
              creating opportunities for collaboration and networking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-neutral-50">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Ideation</h3>
                </div>
                <p className="text-neutral-600 text-center">
                  Programs to help develop and refine innovative ideas through
                  design thinking and creativity workshops.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">
                    Validation
                  </h3>
                </div>
                <p className="text-neutral-600 text-center">
                  Support for testing assumptions, building prototypes, and
                  gathering market feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-50">
              <CardContent className="pt-6">
                <div className="text-center mb-4">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">Growth</h3>
                </div>
                <p className="text-neutral-600 text-center">
                  Resources to help established startups scale, access funding,
                  and enter new markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Programs Section with Tabs */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              What We Offer
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Key Programs
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Explore our comprehensive range of programs designed to foster
              innovation, develop entrepreneurial skills, and support startup
              growth at every stage.
            </p>
          </div>

          <Tabs defaultValue="incubation" className="max-w-5xl mx-auto">
            <TabsList className="flex justify-center mb-8 bg-white p-1 rounded-lg border">
              <TabsTrigger
                value="incubation"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Startup Incubation
              </TabsTrigger>
              <TabsTrigger
                value="mentorship"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Mentorship
              </TabsTrigger>
              <TabsTrigger
                value="workshops"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Workshops & Training
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Funding Opportunities
              </TabsTrigger>
            </TabsList>

            {/* Startup Incubation */}
            <TabsContent value="incubation" id="incubation">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg shadow-md p-6">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="Startup Incubation"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Startup Incubation Program
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Our flagship incubation program provides early-stage startups
                    with the resources, mentorship, and support needed to develop
                    their ideas into viable businesses. The program runs for 6
                    months and includes access to our co-working space,
                    networking events, and pitching opportunities.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Dedicated workspace</span>: Access to our
                        state-of-the-art co-working facilities
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Business development</span>: Structured guidance
                        on business model refinement
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Expert mentorship</span>: One-on-one sessions with
                        industry professionals
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Investor connections</span>: Opportunities to pitch
                        to potential investors
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg mb-6">
                    <p className="text-primary font-medium">
                      Next cohort application deadline: September 30, 2023
                    </p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Apply for Incubation Program
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Mentorship */}
            <TabsContent value="mentorship" id="mentorship">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg shadow-md p-6">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="Mentorship Program"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Mentorship Program
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    Our mentorship program connects aspiring entrepreneurs with
                    experienced business leaders, industry professionals, and
                    successful startup founders. Mentors provide guidance,
                    support, and practical advice to help mentees navigate
                    challenges and accelerate their growth.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">One-on-one coaching</span>: Personalized guidance
                        tailored to your specific needs
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Industry-specific expertise</span>: Access to
                        mentors from various sectors
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Networking opportunities</span>: Connect with
                        influential industry players
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Career development</span>: Guidance on
                        professional growth and leadership
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-primary/5 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-primary">50+</p>
                      <p className="text-neutral-600 text-sm">Active Mentors</p>
                    </div>
                    <div className="bg-secondary/5 p-4 rounded-lg text-center">
                      <p className="text-2xl font-bold text-secondary">200+</p>
                      <p className="text-neutral-600 text-sm">
                        Successful Mentorships
                      </p>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Apply for Mentorship
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Workshops & Training */}
            <TabsContent value="workshops" id="workshops">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg shadow-md p-6">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="Workshops & Training"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Workshops & Training Programs
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    We offer a variety of workshops, bootcamps, and training
                    sessions designed to develop essential entrepreneurial and
                    innovation skills. Our programs cover topics ranging from
                    business model development to product design, marketing, and
                    financial management.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Practical skill development</span>: Hands-on
                        learning experiences
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Expert-led sessions</span>: Learn from industry
                        leaders and specialists
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Diverse topics</span>: From design thinking to
                        financial modeling
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Flexible formats</span>: One-day workshops to
                        multi-week bootcamps
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="bg-primary/5 p-4 rounded-lg flex items-center">
                      <Calendar className="text-primary mr-3 h-5 w-5" />
                      <div>
                        <p className="font-semibold">Regular Schedule</p>
                        <p className="text-sm text-neutral-600">
                          New workshops every month
                        </p>
                      </div>
                    </div>
                    <div className="bg-secondary/5 p-4 rounded-lg flex items-center">
                      <Users className="text-secondary mr-3 h-5 w-5" />
                      <div>
                        <p className="font-semibold">Small Groups</p>
                        <p className="text-sm text-neutral-600">
                          Interactive learning
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    View Upcoming Workshops
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Funding Opportunities */}
            <TabsContent value="funding" id="funding">
              <div className="flex flex-col md:flex-row gap-8 items-center bg-white rounded-lg shadow-md p-6">
                <div className="md:w-1/2">
                  <img
                    src="https://images.unsplash.com/photo-1565514020179-026bfa35c1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                    alt="Funding Opportunities"
                    className="rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Funding Opportunities
                  </h3>
                  <p className="text-neutral-700 mb-6">
                    We help startups and innovators access various funding
                    opportunities, from seed grants to investor pitching events.
                    Our team provides guidance on funding applications, pitch
                    deck preparation, and connecting with potential investors.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Seed funding</span>: Small grants to kickstart
                        early-stage ideas
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Pitch events</span>: Opportunities to present to
                        angel investors
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Grant writing support</span>: Assistance with
                        funding applications
                      </p>
                    </div>
                    <div className="flex items-start">
                      <Check className="text-green-600 mr-2 mt-1 h-5 w-5 flex-shrink-0" />
                      <p className="text-neutral-600">
                        <span className="font-semibold">Investor networking</span>: Connect with potential
                        financial backers
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg mb-6">
                    <p className="font-semibold text-primary mb-1">
                      Recent Success
                    </p>
                    <p className="text-sm text-neutral-600">
                      Our startups raised over $2M in funding last year through
                      our network and programs
                    </p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90">
                    Explore Funding Options
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Programs Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Additional Opportunities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Specialized Programs
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              In addition to our core programs, we offer specialized initiatives
              designed to address specific needs and opportunities in the
              innovation ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Program 1 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')" }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Women in Entrepreneurship
                </h3>
                <p className="text-neutral-600 mb-4">
                  A dedicated program to support and empower women entrepreneurs
                  through specialized training, mentorship, and networking
                  opportunities.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-secondary/10 text-secondary text-xs py-1 px-2 rounded-full">
                    Quarterly Cohorts
                  </span>
                  <Link href="/programs/women-entrepreneurship">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Program 2 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')" }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Social Innovation Lab
                </h3>
                <p className="text-neutral-600 mb-4">
                  Focused on developing innovative solutions to pressing social
                  challenges in Kenya and East Africa, supporting ventures with
                  social impact.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full">
                    Year-round
                  </span>
                  <Link href="/programs/social-innovation">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Program 3 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')" }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Student Innovation Challenge
                </h3>
                <p className="text-neutral-600 mb-4">
                  An annual competition that encourages UEAB students to develop
                  innovative solutions to real-world problems, with prizes and
                  incubation support.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-secondary/10 text-secondary text-xs py-1 px-2 rounded-full">
                    Annual Event
                  </span>
                  <Link href="/programs/student-challenge">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Program 4 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')" }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Corporate Innovation Partnerships
                </h3>
                <p className="text-neutral-600 mb-4">
                  Collaborate with established companies to develop innovative
                  solutions and foster entrepreneurial thinking within corporate
                  environments.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full">
                    Custom Programs
                  </span>
                  <Link href="/programs/corporate-partnerships">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Program 5 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')" }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Technology Commercialization
                </h3>
                <p className="text-neutral-600 mb-4">
                  Support for researchers and innovators to commercialize their
                  technologies, including IP protection, licensing, and market
                  entry strategies.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-secondary/10 text-secondary text-xs py-1 px-2 rounded-full">
                    Ongoing Support
                  </span>
                  <Link href="/programs/tech-commercialization">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Program 6 */}
            <Card className="overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80')" }}></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3">
                  International Exchange Program
                </h3>
                <p className="text-neutral-600 mb-4">
                  Opportunities for entrepreneurs to gain international exposure
                  through exchange programs with partner innovation hubs around
                  the world.
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-primary/10 text-primary text-xs py-1 px-2 rounded-full">
                    Biannual Cohorts
                  </span>
                  <Link href="/programs/international-exchange">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              What Our Participants Say
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto">
              Hear from entrepreneurs who have participated in our programs and
              transformed their ideas into successful ventures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/jane-mwangi-portrait.png"
                  alt="Jane Mwangi"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Jane Mwangi</h3>
                  <p className="text-white/80 text-sm">
                    Founder, FarmSense Solutions
                  </p>
                </div>
              </div>
              <p className="italic text-white/90 mb-4">
                "The incubation program was a game-changer for my startup. The
                mentorship, resources, and connections helped us refine our
                business model and secure our first round of funding."
              </p>
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/male-author-portrait.png"
                  alt="David Kimani"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">David Kimani</h3>
                  <p className="text-white/80 text-sm">Founder, LearnConnect</p>
                </div>
              </div>
              <p className="italic text-white/90 mb-4">
                "The workshops and mentorship provided by the centre gave me the
                knowledge and confidence to build my EdTech platform. Today,
                we're serving thousands of students across Kenya."
              </p>
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
              <div className="flex items-center mb-4">
                <img
                  src="/src/assets/images/dr-sarah-kimani-portrait.png"
                  alt="Sarah Otieno"
                  className="w-14 h-14 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-bold text-lg">Sarah Otieno</h3>
                  <p className="text-white/80 text-sm">
                    Founder, EcoWaste Solutions
                  </p>
                </div>
              </div>
              <p className="italic text-white/90 mb-4">
                "Being part of the mentorship program connected me with industry
                experts who guided me through the challenges of growing my
                environmental startup. The centre's support was invaluable."
              </p>
              <div className="flex text-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
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
              Common Questions About Our Programs
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Find answers to common questions about our programs, application
              processes, and support services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {/* FAQ Item 1 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Who can apply to your programs?
              </h3>
              <p className="text-neutral-600">
                Our programs are open to UEAB students, faculty, staff, and
                external entrepreneurs and innovators. Specific eligibility
                criteria may vary by program, so we encourage you to check the
                details for each opportunity.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                How much does it cost to participate in your programs?
              </h3>
              <p className="text-neutral-600">
                Many of our programs are offered at no cost to participants,
                especially for UEAB students and staff. Some specialized programs
                and workshops may have nominal fees to cover materials and
                resources. Scholarships and waivers are available for those with
                financial need.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                What kind of support do startups receive in the incubation
                program?
              </h3>
              <p className="text-neutral-600">
                Startups in our incubation program receive workspace, mentorship
                from industry experts, business development support, networking
                opportunities, access to funding sources, legal and accounting
                guidance, and marketing assistance. We tailor our support to the
                specific needs of each venture.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                How often do you accept applications for your programs?
              </h3>
              <p className="text-neutral-600">
                Application cycles vary by program. Our incubation program
                typically accepts applications twice a year, while workshops and
                training sessions run throughout the year. The mentorship program
                has rolling applications. Check our events calendar or subscribe
                to our newsletter for up-to-date information on application
                deadlines.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="py-5">
              <h3 className="text-lg font-semibold text-primary mb-2">
                Do I need to have a fully developed business idea to apply?
              </h3>
              <p className="text-neutral-600">
                Not at all! We support entrepreneurs at all stages of their
                journey. If you're just starting with an idea, our ideation
                workshops and mentorship programs can help you develop and refine
                it. More established ventures can benefit from our growth and
                scaling programs.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <p className="text-neutral-700 mb-4">
              Don't see your question answered here?
            </p>
            <Button asChild>
              <Link href="/contact">
                <a>Contact Us</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Innovation Journey?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join our community of innovators and entrepreneurs to get the support
            you need to turn your ideas into reality.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/contact">
                <a>Apply Now</a>
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              <Link href="/events">
                <a>Upcoming Events</a>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
