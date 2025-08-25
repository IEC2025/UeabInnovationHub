import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, 
  BookOpen, 
  Users, 
  Award, 
  Target, 
  GraduationCap,
  BarChart,
  Globe,
  HandHeart 
} from "lucide-react";
import RevolutionSlider from '@/components/sliders/RevolutionSlider';

const AboutPage = () => {
  // Set document title
  useEffect(() => {
    document.title = "About Us | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <div>
      {/* Revolution Slider */}
      <RevolutionSlider 
        slides={[
          {
            id: 1,
            backgroundImage: "/src/assets/images/BTV08785.JPG",
            duration: 5000,
            layers: [
              {
                type: 'text',
                content: 'About Our Centre',
                style: {
                  position: { x: 10, y: 20 },
                  animation: { type: 'slideInLeft', direction: 'left', delay: 500, duration: 1000, easing: 'easeOut' },
                },
                className: 'text-4xl md:text-6xl font-bold text-white'
              },
              {
                type: 'text',
                content: 'Innovation & Entrepreneurship Centre',
                style: {
                  position: { x: 10, y: 35 },
                  animation: { type: 'slideInRight', direction: 'right', delay: 1000, duration: 1000, easing: 'easeOut' },
                },
                className: 'text-xl text-white/90'
              },
              {
                type: 'button',
                content: 'Learn More',
                style: {
                  position: { x: 10, y: 55 },
                  animation: { type: 'fadeIn', direction: 'up', delay: 1500, duration: 1000, easing: 'easeOut' },
                },
                className: 'bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-full'
              }
            ],
            transition: { type: 'fade', duration: 800 }
          }
        ]}
        height="500px"
        autoPlay={false}
        showNavigation={false}
      />
      
      {/* Page Banner - Hidden now */}
      <div className="bg-primary py-16 md:py-24 relative" style={{display: 'none'}}>
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">About Our Centre</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Learn about our mission, vision, history, and the team behind the Innovation & Entrepreneurship Centre at UEAB.
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

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Our Purpose
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                Mission & Vision
              </h2>
              
              <Card className="mb-8 bg-neutral-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary p-3 rounded-lg text-white">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                      <p className="text-neutral-700">
                        To foster innovation and entrepreneurship by providing resources, mentorship, and opportunities that empower students, faculty, and the wider community to transform ideas into impactful ventures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mb-8 bg-neutral-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-secondary p-3 rounded-lg text-white">
                      <Lightbulb className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                      <p className="text-neutral-700">
                        To be the leading innovation hub in East Africa, recognized for nurturing entrepreneurial talent and developing sustainable solutions that address local and global challenges.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <div className="bg-neutral-100 p-4 rounded-lg mb-4 text-center">
                    <GraduationCap className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <h4 className="font-bold">Education</h4>
                  </div>
                  <div className="bg-neutral-100 p-4 rounded-lg text-center">
                    <Users className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <h4 className="font-bold">Collaboration</h4>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="bg-neutral-100 p-4 rounded-lg mb-4 text-center">
                    <HandHeart className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <h4 className="font-bold">Mentorship</h4>
                  </div>
                  <div className="bg-neutral-100 p-4 rounded-lg text-center">
                    <Globe className="h-8 w-8 mx-auto text-secondary mb-2" />
                    <h4 className="font-bold">Impact</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative">
                <img 
                  src="@assets/generated_images/Kenyan_campus_students_walking_83f72c3e.png" 
                  alt="Students collaborating" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg max-w-xs">
                  <p className="text-primary italic">
                    "Our goal is to create an environment where innovation thrives and entrepreneurs can turn their ideas into reality."
                  </p>
                  <div className="mt-4 font-bold">
                    Mr. Wakoli Albert, Director
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section id="team" className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Meet The People
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Our Leadership Team
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our dedicated team of professionals brings diverse expertise and experience to guide the Innovation & Entrepreneurship Centre in achieving its mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-container">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <img
                src="/src/assets/images/BTV08418.JPG"
                alt="Dr. Jade Abuga"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Mr. Wakoli Albert</h3>
                <p className="text-secondary font-medium mb-3">Director, Innovation & Entrepreneurship Centre</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Leading the innovation and entrepreneurship initiatives at UEAB with a focus on student development and industry partnerships.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:director.iec@ueab.ac.ke" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <img
                src="/src/assets/images/BTV08426.JPG"
                alt="Mr. Andrew Omambia"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Mr. Andrew Omambia</h3>
                <p className="text-secondary font-medium mb-3">Deputy Director</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Supporting innovation strategy and entrepreneurship development within the university community.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:deputydirector.iec@ueab.ac.ke" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <img
                src="/src/assets/images/BTV08793.JPG"
                alt="Mr. Boagoli Arizona"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Mr. Boagoli Arizona</h3>
                <p className="text-secondary font-medium mb-3">Innovation Programs Coordinator</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Coordinating innovation initiatives and programs to foster student entrepreneurship.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:programs.iec@ueab.ac.ke" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <img
                src="/src/assets/images/BTV08537.JPG"
                alt="Prof. Francis Ramesh"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Prof. Francis Ramesh</h3>
                <p className="text-secondary font-medium mb-3">Research & Development Lead</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Overseeing research initiatives and guiding students in developing innovative solutions to real-world problems.
                </p>
                <div className="flex space-x-3">
                  <a href="mailto:research.iec@ueab.ac.ke" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Mr. Albert Wakoli</h3>
                <p className="text-secondary font-medium mb-3">Business Development Manager</p>
                <p className="text-neutral-600 text-sm">
                  Coordinating business relationships and partnerships that enhance the innovation ecosystem.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Ms. Ester Ateka</h3>
                <p className="text-secondary font-medium mb-3">Student Mentorship Coordinator</p>
                <p className="text-neutral-600 text-sm">
                  Providing guidance and support for student entrepreneurs and innovators.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Mrs. Edna Akuru</h3>
                <p className="text-secondary font-medium mb-3">Community Outreach Coordinator</p>
                <p className="text-neutral-600 text-sm">
                  Facilitating connections between the university and local community for innovation initiatives.
                </p>
              </div>
            </div>
          </div>

          {/* Student Team */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Student Leadership</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary">Mr. Meule Wafula</h3>
                  <p className="text-secondary font-medium mb-3">Student Coordinator</p>
                  <p className="text-neutral-600 text-sm">
                    Lead student representative championing innovation and entrepreneurship initiatives within the university.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary">Ms. Dolphine Mwaitsi</h3>
                  <p className="text-secondary font-medium mb-3">Student Projects Lead</p>
                  <p className="text-neutral-600 text-sm">
                    Coordinating student innovation projects and facilitating collaboration among student teams.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary">Ms. Diana Bundi</h3>
                  <p className="text-secondary font-medium mb-3">Student Outreach Coordinator</p>
                  <p className="text-neutral-600 text-sm">
                    Managing student engagement and communication for innovation events and opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Contact Our Team
            </Button>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
                Our Journey
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                The History of Our Centre
              </h2>
              <p className="text-neutral-700">
                From humble beginnings to becoming a leading innovation hub in Kenya.
              </p>
            </div>

            <div className="relative border-l-2 border-primary pl-8 ml-4 space-y-10">
              {/* Timeline Item 1 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 h-6 w-6 bg-primary rounded-full border-4 border-white"></div>
                <div className="text-lg font-bold text-primary mb-1">2010</div>
                <div className="text-sm text-neutral-500 mb-2">The Foundation</div>
                <p className="text-neutral-700">
                  The Innovation & Entrepreneurship Centre was established as a small initiative within the Business School to promote entrepreneurial thinking among students.
                </p>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 h-6 w-6 bg-primary rounded-full border-4 border-white"></div>
                <div className="text-lg font-bold text-primary mb-1">2013</div>
                <div className="text-sm text-neutral-500 mb-2">Growth & Expansion</div>
                <p className="text-neutral-700">
                  With growing interest and support from the university administration, the centre expanded its facilities and programs, including the launch of the first startup incubation program.
                </p>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 h-6 w-6 bg-primary rounded-full border-4 border-white"></div>
                <div className="text-lg font-bold text-primary mb-1">2016</div>
                <div className="text-sm text-neutral-500 mb-2">National Recognition</div>
                <p className="text-neutral-700">
                  The centre received national recognition for its work in promoting innovation and entrepreneurship, winning the "Innovation Hub of the Year" award from the Kenya National Innovation Agency.
                </p>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 h-6 w-6 bg-primary rounded-full border-4 border-white"></div>
                <div className="text-lg font-bold text-primary mb-1">2019</div>
                <div className="text-sm text-neutral-500 mb-2">International Partnerships</div>
                <p className="text-neutral-700">
                  Established partnerships with international organizations and universities, including MIT, Stanford, and the World Bank, to enhance entrepreneurship education and research.
                </p>
              </div>

              {/* Timeline Item 5 */}
              <div className="relative">
                <div className="absolute -left-10 top-0 h-6 w-6 bg-secondary rounded-full border-4 border-white"></div>
                <div className="text-lg font-bold text-primary mb-1">Today</div>
                <div className="text-sm text-neutral-500 mb-2">Leading Innovation Hub</div>
                <p className="text-neutral-700">
                  Today, the Innovation & Entrepreneurship Centre stands as a leading hub for innovation and entrepreneurship in East Africa, supporting hundreds of startups and fostering a culture of innovation throughout the university and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Innovation Community
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you're a student, faculty member, or external partner, there are many ways to get involved with the Innovation & Entrepreneurship Centre.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild className="bg-white text-primary hover:bg-white/90">
              <Link href="/programs">
                Explore Our Programs
              </Link>
            </Button>
            <Button asChild className="bg-secondary hover:bg-secondary/80">
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
