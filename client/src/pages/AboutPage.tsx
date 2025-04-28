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

const AboutPage = () => {
  // Set document title
  useEffect(() => {
    document.title = "About Us | Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <div>
      {/* Page Banner */}
      <div className="bg-primary py-16 md:py-24 relative">
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
                  src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Students collaborating" 
                  className="rounded-lg shadow-lg w-full"
                />
                <div className="absolute inset-0 bg-primary/10 rounded-lg"></div>
                
                <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-lg shadow-lg max-w-xs">
                  <p className="text-primary italic">
                    "Our goal is to create an environment where innovation thrives and entrepreneurs can turn their ideas into reality."
                  </p>
                  <div className="mt-4 font-bold">
                    Dr. Sarah Kimani, Director
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
                alt="Dr. John Ouma"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Dr. John Ouma</h3>
                <p className="text-secondary font-medium mb-3">Director, Innovation & Entrepreneurship Centre</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Experienced academic and entrepreneur with a focus on fostering innovation within higher education institutions.
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
                alt="Prof. Samuel Kiprono"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Prof. Samuel Kiprono</h3>
                <p className="text-secondary font-medium mb-3">Deputy Director</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Professor of Business with expertise in innovation strategy and entrepreneurship development.
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
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Mr. James Mwangi"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Mr. James Mwangi</h3>
                <p className="text-secondary font-medium mb-3">Business Development Manager</p>
                <p className="text-neutral-600 text-sm mb-4">
                  MBA with 10+ years experience in startup acceleration and corporate partnerships across East Africa.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                alt="Ms. Grace Ochieng"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">Ms. Grace Ochieng</h3>
                <p className="text-secondary font-medium mb-3">Innovation Programs Coordinator</p>
                <p className="text-neutral-600 text-sm mb-4">
                  Former startup founder with a background in Computer Science and experience managing innovation programs.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="#" className="text-neutral-400 hover:text-primary transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Meet Our Full Team
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
