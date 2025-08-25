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
  HandHeart,
  Calendar,
  DollarSign,
  Megaphone,
  Wrench,
  Rocket
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
            backgroundImage: "/src/assets/images/456214878_980492593875523_3420111680875412655_n_1756133729214.jpg",
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
                  src="@assets/generated_images/African_university_leadership_meeting_1531ef94.png" 
                  alt="African leadership team at UEAB" 
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

      {/* Innovation & Entrepreneurship Key Pillars Section */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
              Our Foundation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
              Innovation & Entrepreneurship Key Pillars
            </h2>
            <p className="text-neutral-700 max-w-3xl mx-auto">
              Our centre is built on five fundamental pillars that guide our mission to foster innovation and entrepreneurship excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Pillar 1: Innovation and Entrepreneurship Events */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Pillar 01</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Innovation and Entrepreneurship Events</h3>
                <p className="text-neutral-600 mb-6">
                  This pillar focuses on all aspects of organizing and planning innovation and entrepreneurship activities, providing practical platforms for innovators to showcase their ideas.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Training sessions and workshops</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Product launches and demonstrations</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Baraton Innovation and Entrepreneurship Weeks</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">External exposure opportunities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2: Mentorship and Training */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pillar 02</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Mentorship and Training</h3>
                <p className="text-neutral-600 mb-6">
                  This pillar emphasizes the relationship between academia and innovation projects, guiding participants from early-stage ideation to certification.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Capacity building through workshops and webinars</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Mentorship sessions for students and faculty</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Ethical review of strategies</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3: Innovation and Entrepreneurial Projects */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center shadow-lg">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm font-semibold text-secondary uppercase tracking-wider">Pillar 03</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Innovation and Entrepreneurial Projects</h3>
                <p className="text-neutral-600 mb-6">
                  Projects developed through mentorship programs produce tangible outputs, covering the full process from research to commercialization.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Minimum Viable Products (MVPs)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Prototypes and pilot deployments</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Intellectual property support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Grant applications and proposal writing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 4: Resource Mobilization and Linkages */}
            <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-xl flex items-center justify-center shadow-lg">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pillar 04</span>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">Resource Mobilization and Linkages</h3>
                <p className="text-neutral-600 mb-6">
                  This pillar focuses on securing and managing human, technical, and financial resources through strategic partnerships and sustainable funding.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Industry partnerships and linkages</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Government and agency support</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Grants and corporate funding</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-neutral-700">Monitoring and evaluation systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pillar 5: Media and Marketing - Full Width */}
          <div className="mt-8 max-w-4xl mx-auto">
            <div className="group relative bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Megaphone className="w-6 h-6 text-primary" />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-4">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-sm font-semibold text-white/80 uppercase tracking-wider">Pillar 05</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Media and Marketing</h3>
                  <p className="text-white/90 mb-6">
                    This pillar ensures visibility and engagement through digital and multimedia content creation, amplifying our innovation initiatives across broader networks.
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Social media campaigns and digital presence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Branding of events and products</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Videography and photography</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90">Strategic marketing initiatives</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Connection Elements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-white rounded-full shadow-lg border border-neutral-100">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="text-neutral-700 font-medium">Building Innovation Excellence Together</span>
              <div className="w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
            </div>
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
              <div className="mt-8">
                <img 
                  src="@assets/generated_images/African_students_innovation_presentation_9ca1053e.png" 
                  alt="African students presenting innovation projects at UEAB" 
                  className="rounded-lg shadow-lg w-full max-w-2xl mx-auto"
                />
              </div>
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
      <section className="py-16 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <img 
            src="@assets/generated_images/African_entrepreneurs_startup_workspace_eb0f122f.png" 
            alt="African entrepreneurs working in startup workspace" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Innovation Community
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
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
