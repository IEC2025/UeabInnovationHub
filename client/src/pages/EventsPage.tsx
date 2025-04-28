import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  ArrowRight,
  Filter,
  Search,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EventsPage = () => {
  // Set document title
  useEffect(() => {
    document.title = "Events | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-primary py-16 md:py-24 relative">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Events & Workshops
          </h1>
          <p className="text-lg max-w-3xl mx-auto">
            Stay informed about our upcoming events, workshops, and networking
            opportunities designed to foster innovation and entrepreneurship.
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

      {/* Search and Filter Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-neutral-50 p-6 rounded-lg shadow-sm">
            <div className="flex flex-col md:flex-row gap-4 items-end">
              <div className="flex-1">
                <div className="text-sm font-medium mb-2">Search Events</div>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-500 h-4 w-4" />
                  <Input
                    placeholder="Search by keyword or topic..."
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="w-full md:w-48">
                <div className="text-sm font-medium mb-2">Event Type</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="workshop">Workshops</SelectItem>
                    <SelectItem value="seminar">Seminars</SelectItem>
                    <SelectItem value="networking">Networking</SelectItem>
                    <SelectItem value="hackathon">Hackathons</SelectItem>
                    <SelectItem value="competition">Competitions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full md:w-48">
                <div className="text-sm font-medium mb-2">Time Frame</div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Upcoming" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="upcoming">Upcoming</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="this-week">This Week</SelectItem>
                    <SelectItem value="this-month">This Month</SelectItem>
                    <SelectItem value="past">Past Events</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-primary hover:bg-primary/90">
                <Filter className="h-4 w-4 mr-2" /> Filter Events
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Featured Events
            </h2>
            <p className="text-neutral-600">
              Don't miss these special opportunities to learn, connect, and grow
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Event 1 - 2nd Innovation and Entrepreneurship Week */}
            <Card className="overflow-hidden card-3d" id="innovation-week-2025">
              <div className="relative h-60">
                <img
                  src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="2nd Innovation and Entrepreneurship Week"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    2nd Innovation and Entrepreneurship Week 2025
                  </h3>
                  <p className="text-white/80">A week of innovation, workshops, and networking</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 text-primary rounded-lg p-3 mr-3">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">September 25-29, 2025</div>
                      <div className="text-sm text-neutral-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> All Day Events
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-secondary/10 text-secondary rounded-lg p-3 mr-3">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Innovation Hub</div>
                      <div className="text-sm text-neutral-500">UEAB Main Campus</div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">
                  Join us for a week-long celebration of innovation and entrepreneurship. 
                  This flagship event brings together students, faculty, industry leaders, 
                  and investors for workshops, panel discussions, startup showcases, and 
                  networking opportunities designed to foster innovation and collaboration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Innovation
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Entrepreneurship
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Networking
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Workshops
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-neutral-500 mr-2" />
                    <span className="text-neutral-500">Registration opening soon</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 rotate-3d">
                    Register Interest
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Featured Event 2 - NACOSTI Conference */}
            <Card className="overflow-hidden card-3d" id="nacosti-conference-2025">
              <div className="relative h-60">
                <img
                  src="https://images.unsplash.com/photo-1591115765373-5207764f72e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="NACOSTI Multisectoral Conference"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-white text-xl font-bold">
                    NACOSTI Multisectoral Conference and Exhibition
                  </h3>
                  <p className="text-white/80">National exhibition showcasing cross-sector innovations</p>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="bg-primary/10 text-primary rounded-lg p-3 mr-3">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">May 19-22, 2025</div>
                      <div className="text-sm text-neutral-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> 8:00 AM - 5:00 PM
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-secondary/10 text-secondary rounded-lg p-3 mr-3">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-medium">Nairobi, Kenya</div>
                      <div className="text-sm text-neutral-500">Location TBA</div>
                    </div>
                  </div>
                </div>
                <p className="text-neutral-600 mb-4">
                  Connect with researchers, innovators, and policymakers from across Kenya
                  at this major national exhibition. UEAB Innovation & Entrepreneurship Centre
                  will be participating and showcasing student innovations. Join us to network
                  with industry leaders and explore collaboration opportunities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Exhibition
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Research
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    Networking
                  </span>
                  <span className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
                    National Event
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-neutral-500 mr-2" />
                    <span className="text-neutral-500">Open to public</span>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 rotate-3d">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section with Tabs */}
      <section className="py-10 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Upcoming Events
            </h2>
            <p className="text-neutral-600">
              Browse our upcoming events by category
            </p>
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="mb-8 bg-white p-1 rounded-lg border inline-flex mx-auto">
              <TabsTrigger
                value="all"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                All Events
              </TabsTrigger>
              <TabsTrigger
                value="workshops"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Workshops
              </TabsTrigger>
              <TabsTrigger
                value="seminars"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Seminars
              </TabsTrigger>
              <TabsTrigger
                value="networking"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Networking
              </TabsTrigger>
              <TabsTrigger
                value="hackathons"
                className="data-[state=active]:bg-primary data-[state=active]:text-white"
              >
                Hackathons
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Event 1 */}
                <EventCard 
                  id="design-thinking-workshop"
                  title="Design Thinking Workshop"
                  type="Workshop"
                  date="September 15, 2023"
                  time="2:00 PM - 5:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Learn how to apply design thinking principles to solve real-world problems and create innovative solutions."
                  tags={["Design Thinking", "Innovation", "Problem Solving"]}
                  attendees="20 spots left"
                />

                {/* Event 2 */}
                <EventCard 
                  id="funding-opportunities"
                  title="Funding Opportunities for Startups"
                  type="Seminar"
                  date="September 22, 2023"
                  time="10:00 AM - 12:00 PM"
                  location="Virtual Event (Zoom)"
                  image="https://images.unsplash.com/photo-1565514020179-026bfa35c1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Discover various funding options available for early-stage startups and how to prepare winning grant applications."
                  tags={["Funding", "Grants", "Startup Finance"]}
                  attendees="Unlimited"
                />

                {/* Event 3 */}
                <EventCard 
                  id="business-model-canvas"
                  title="Business Model Canvas Workshop"
                  type="Workshop"
                  date="October 5, 2023"
                  time="1:00 PM - 4:00 PM"
                  location="Business School, Room 205"
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="A hands-on workshop to help entrepreneurs develop and refine their business models using the Business Model Canvas framework."
                  tags={["Business Model", "Startup", "Strategic Planning"]}
                  attendees="15 spots left"
                />

                {/* Event 4 */}
                <EventCard 
                  id="mentorship-kickoff"
                  title="Mentorship Program Kickoff"
                  type="Networking"
                  date="October 12, 2023"
                  time="3:00 PM - 5:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="The official launch of our fall mentorship program, bringing together mentors and mentees for an introduction and networking session."
                  tags={["Mentorship", "Networking", "Professional Development"]}
                  attendees="By invitation only"
                />

                {/* Event 5 */}
                <EventCard 
                  id="digital-marketing"
                  title="Digital Marketing for Startups"
                  type="Workshop"
                  date="October 18, 2023"
                  time="2:00 PM - 5:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Learn effective digital marketing strategies tailored for startups with limited budgets. Covers social media, content marketing, and analytics."
                  tags={["Digital Marketing", "Startup Growth", "Social Media"]}
                  attendees="25 spots left"
                />

                {/* Event 6 */}
                <EventCard 
                  id="product-development"
                  title="From Idea to Product: Development Workshop"
                  type="Workshop"
                  date="October 25, 2023"
                  time="9:00 AM - 4:00 PM"
                  location="Engineering Building, Lab 3"
                  image="https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="A full-day workshop on product development, from concept validation to prototyping and testing. Includes hands-on activities."
                  tags={["Product Development", "Prototyping", "Innovation"]}
                  attendees="12 spots left"
                />
              </div>
            </TabsContent>

            <TabsContent value="workshops">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Workshop 1 */}
                <EventCard 
                  id="design-thinking-workshop-tab"
                  title="Design Thinking Workshop"
                  type="Workshop"
                  date="September 15, 2023"
                  time="2:00 PM - 5:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Learn how to apply design thinking principles to solve real-world problems and create innovative solutions."
                  tags={["Design Thinking", "Innovation", "Problem Solving"]}
                  attendees="20 spots left"
                />

                {/* Workshop 2 */}
                <EventCard 
                  id="business-model-canvas-tab"
                  title="Business Model Canvas Workshop"
                  type="Workshop"
                  date="October 5, 2023"
                  time="1:00 PM - 4:00 PM"
                  location="Business School, Room 205"
                  image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="A hands-on workshop to help entrepreneurs develop and refine their business models using the Business Model Canvas framework."
                  tags={["Business Model", "Startup", "Strategic Planning"]}
                  attendees="15 spots left"
                />

                {/* Workshop 3 */}
                <EventCard 
                  id="digital-marketing-tab"
                  title="Digital Marketing for Startups"
                  type="Workshop"
                  date="October 18, 2023"
                  time="2:00 PM - 5:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Learn effective digital marketing strategies tailored for startups with limited budgets. Covers social media, content marketing, and analytics."
                  tags={["Digital Marketing", "Startup Growth", "Social Media"]}
                  attendees="25 spots left"
                />
              </div>
            </TabsContent>

            <TabsContent value="seminars">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Seminar 1 */}
                <EventCard 
                  id="funding-opportunities-tab"
                  title="Funding Opportunities for Startups"
                  type="Seminar"
                  date="September 22, 2023"
                  time="10:00 AM - 12:00 PM"
                  location="Virtual Event (Zoom)"
                  image="https://images.unsplash.com/photo-1565514020179-026bfa35c1d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Discover various funding options available for early-stage startups and how to prepare winning grant applications."
                  tags={["Funding", "Grants", "Startup Finance"]}
                  attendees="Unlimited"
                />

                {/* Seminar 2 */}
                <EventCard 
                  id="legal-for-startups"
                  title="Legal Essentials for Startups"
                  type="Seminar"
                  date="November 3, 2023"
                  time="10:00 AM - 12:00 PM"
                  location="Business School, Auditorium"
                  image="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Learn about the essential legal considerations for startups, including company formation, IP protection, and contracts."
                  tags={["Legal", "Startup", "Intellectual Property"]}
                  attendees="40 spots left"
                />
              </div>
            </TabsContent>

            <TabsContent value="networking">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Networking 1 */}
                <EventCard 
                  id="entrepreneur-mixer-tab"
                  title="Entrepreneur Mixer: Connect & Collaborate"
                  type="Networking"
                  date="September 30, 2023"
                  time="4:00 PM - 7:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Connect with fellow entrepreneurs, investors, and industry experts in this networking event designed to build valuable relationships."
                  tags={["Networking", "Collaboration", "Entrepreneurship"]}
                  attendees="50 spots available"
                />

                {/* Networking 2 */}
                <EventCard 
                  id="mentorship-kickoff-tab"
                  title="Mentorship Program Kickoff"
                  type="Networking"
                  date="October 12, 2023"
                  time="3:00 PM - 5:00 PM"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1475506631979-72412c606f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="The official launch of our fall mentorship program, bringing together mentors and mentees for an introduction and networking session."
                  tags={["Mentorship", "Networking", "Professional Development"]}
                  attendees="By invitation only"
                />

                {/* Networking 3 */}
                <EventCard 
                  id="investor-meetup"
                  title="Investor Meetup"
                  type="Networking"
                  date="November 10, 2023"
                  time="5:00 PM - 7:30 PM"
                  location="Eldoret City Hotel"
                  image="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="An exclusive opportunity to meet and pitch to potential investors. Selected startups will have 5 minutes to present their ventures."
                  tags={["Investment", "Pitching", "Networking"]}
                  attendees="Application required"
                />
              </div>
            </TabsContent>

            <TabsContent value="hackathons">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Hackathon 1 */}
                <EventCard 
                  id="agriculture-hackathon"
                  title="AgriTech Hackathon"
                  type="Hackathon"
                  date="November 18-19, 2023"
                  time="9:00 AM - 5:00 PM (both days)"
                  location="Innovation Hub, UEAB Main Campus"
                  image="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="A 48-hour hackathon focused on developing innovative solutions for challenges in agriculture. Open to students and external participants."
                  tags={["AgriTech", "Hackathon", "Innovation"]}
                  attendees="30 spots left"
                />

                {/* Hackathon 2 */}
                <EventCard 
                  id="health-hackathon"
                  title="HealthTech Innovation Challenge"
                  type="Hackathon"
                  date="December 2-3, 2023"
                  time="9:00 AM - 6:00 PM (both days)"
                  location="Medical School, UEAB"
                  image="https://images.unsplash.com/photo-1576089172869-4f5f6f315620?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  description="Develop innovative solutions to healthcare challenges in East Africa. Cash prizes and incubation opportunities for winning teams."
                  tags={["HealthTech", "Hackathon", "Innovation"]}
                  attendees="Registration opening soon"
                />
              </div>
            </TabsContent>
          </Tabs>

          <div className="text-center">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Past Events Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Past Events
            </h2>
            <p className="text-neutral-600">
              Explore highlights from our previous events
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Past Event 1 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Innovation Summit 2022"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 text-white px-4 py-2 rounded-lg font-medium">
                    Event Completed
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-primary mb-1">
                  Innovation Summit 2022
                </h3>
                <p className="text-sm text-neutral-500 mb-2">August 12-13, 2022</p>
                <div className="flex justify-between">
                  <Link href="/events/innovation-summit-2022" className="text-secondary font-medium text-sm hover:text-secondary/80 transition-colors">
                    View Highlights
                  </Link>
                  <Link href="/resources#summit-2022-resources" className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    Access Resources
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Past Event 2 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1526629342323-f96ab18a2cec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Youth Entrepreneurship Bootcamp"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 text-white px-4 py-2 rounded-lg font-medium">
                    Event Completed
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-primary mb-1">
                  Youth Entrepreneurship Bootcamp
                </h3>
                <p className="text-sm text-neutral-500 mb-2">June 5-9, 2023</p>
                <div className="flex justify-between">
                  <Link href="/events/youth-bootcamp-2023" className="text-secondary font-medium text-sm hover:text-secondary/80 transition-colors">
                    View Highlights
                  </Link>
                  <Link href="/resources#bootcamp-2023-resources" className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    Access Resources
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Past Event 3 */}
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-black">
                <img
                  src="https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                  alt="Startup Pitch Competition"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary/90 text-white px-4 py-2 rounded-lg font-medium">
                    Event Completed
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-bold text-primary mb-1">
                  Startup Pitch Competition
                </h3>
                <p className="text-sm text-neutral-500 mb-2">May 20, 2023</p>
                <div className="flex justify-between">
                  <Link href="/events/pitch-competition-2023" className="text-secondary font-medium text-sm hover:text-secondary/80 transition-colors">
                    View Winners
                  </Link>
                  <Link href="/resources#pitch-2023-resources" className="text-primary font-medium text-sm hover:text-primary/80 transition-colors">
                    Access Resources
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Events Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Community Events
            </h2>
            <p className="text-neutral-600">
              Events from our partners and wider innovation ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Community Event 1 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <img
                    src="https://kenia.go.ke/wp-content/uploads/2021/01/cropped-KENIA-Blue-Logo-Only-1.png"
                    alt="KENIA"
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Kenya Innovation Week
                    </h3>
                    <p className="text-sm text-neutral-500 mb-2">
                      December 5-9, 2023 | Nairobi, Kenya
                    </p>
                    <p className="text-neutral-600 text-sm mb-2">
                      A national celebration of innovation, bringing together
                      stakeholders from across the innovation ecosystem to
                      showcase, learn, and collaborate.
                    </p>
                    <a
                      href="https://kenyainnovationweek.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-medium text-sm hover:text-secondary/80 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Event 2 */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <img
                    src="https://strathmore.edu/wp-content/uploads/2018/03/Official-Strathmore-University-Logo-1.png"
                    alt="Strathmore University"
                    className="w-16 h-16 object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-primary mb-1">
                      Strathmore Innovation Showcase
                    </h3>
                    <p className="text-sm text-neutral-500 mb-2">
                      November 15, 2023 | Strathmore University, Nairobi
                    </p>
                    <p className="text-neutral-600 text-sm mb-2">
                      An exhibition of innovative projects and startups from
                      Strathmore University and its partners.
                    </p>
                    <a
                      href="https://ilabafrica.strathmore.edu/events/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary font-medium text-sm hover:text-secondary/80 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Host Your Event Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="text-sm font-semibold text-white/80 uppercase tracking-wider">
                Partner With Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                Host Your Event at Our Centre
              </h2>
              <p className="text-white/80 mb-6">
                Our Innovation Hub offers modern facilities for workshops,
                seminars, meetups, and other events. We can accommodate groups of
                various sizes and provide technical support, catering options,
                and promotional assistance.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-md mr-3">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Spaces</h3>
                    <p className="text-white/80 text-sm">
                      Accommodates groups from 10 to 100 people
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-white/10 p-2 rounded-md mr-3">
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Available All Year</h3>
                    <p className="text-white/80 text-sm">
                      Book your event on weekdays or weekends
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-white text-primary hover:bg-white/90">
                <Link href="/contact">
                  Inquire About Hosting
                </Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Event space at the Innovation Hub"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Stay Informed
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Never Miss an Event
            </h2>
            <p className="text-neutral-700 mb-8">
              Subscribe to our newsletter to receive updates about upcoming
              events, workshops, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Input
                type="email"
                placeholder="Your email address"
                className="max-w-md"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-neutral-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Event Card Component
interface EventCardProps {
  id: string;
  title: string;
  type: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  tags: string[];
  attendees: string;
}

const EventCard = ({
  id,
  title,
  type,
  date,
  time,
  location,
  image,
  description,
  tags,
  attendees,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden" id={id}>
      <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}></div>
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
        <h3 className="text-lg font-bold text-primary mb-1">{title}</h3>
        <div className="flex items-center text-neutral-500 text-sm mb-1">
          <Calendar className="h-3 w-3 mr-1" /> {date}
        </div>
        <div className="flex items-center text-neutral-500 text-sm mb-1">
          <Clock className="h-3 w-3 mr-1" /> {time}
        </div>
        <div className="flex items-center text-neutral-500 text-sm mb-3">
          <MapPin className="h-3 w-3 mr-1" /> {location}
        </div>
        <p className="text-neutral-600 text-sm mb-3">{description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.map((tag, index) => (
            <span key={index} className="bg-neutral-100 text-neutral-800 text-xs py-1 px-2 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center text-xs text-neutral-500">
            <Users className="h-3 w-3 mr-1" /> {attendees}
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-xs h-8">
            Register
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventsPage;
