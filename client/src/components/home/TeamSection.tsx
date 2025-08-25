import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Tony Omwansa",
      title: "Director, Innovation & Entrepreneurship Centre",
      bio: "Leading the innovation and entrepreneurship initiatives with a focus on student development and industry partnerships.",
      imageUrl: "/src/assets/images/dr-tony-omwansa.jpeg",
      socialMedia: {
        email: "director.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Dr. Sarah Kimani",
      title: "Deputy Director",
      bio: "Supporting innovation strategy and entrepreneurship development within the university community.",
      imageUrl: "/src/assets/images/dr-sarah-kimani-portrait.png",
      socialMedia: {
        email: "deputydirector.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Prof. Msafiri Jackson",
      title: "Research & Development Lead",
      bio: "Overseeing research initiatives and guiding students in developing innovative solutions to real-world problems.",
      imageUrl: "/src/assets/images/prof-msafiri-jackson.jpeg",
      socialMedia: {
        email: "research.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Jane Mwangi",
      title: "Innovation Programs Coordinator",
      bio: "Coordinating innovation initiatives and programs to foster student entrepreneurship.",
      imageUrl: "/src/assets/images/jane-mwangi-portrait.png",
      socialMedia: {
        email: "programs.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 5,
      name: "Dr. Bernard Chitunga",
      title: "Chancellor, Cooperative University of Kenya",
      bio: "Leading academic excellence and fostering innovation in cooperative education and research initiatives.",
      imageUrl: "/src/assets/images/dr-benard-chitunga.jpeg",
      socialMedia: {
        email: "chancellor@cuk.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 6,
      name: "Ms. Esther Masese",
      title: "Student Mentorship Coordinator",
      bio: "Providing guidance and support for student entrepreneurs and innovators.",
      imageUrl: "/src/assets/images/ms-esther-masese.jpeg",
      socialMedia: {
        email: "mentorship.iec@ueab.ac.ke",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Meet Our Speakers
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Leadership & Expert Speakers
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Our distinguished speakers bring diverse expertise to guide innovation and entrepreneurship initiatives, fostering creativity and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="flip-card h-80 cursor-pointer"
              data-testid={`speaker-card-${member.id}`}
            >
              <div className="flip-card-inner h-full relative">
                {/* Front of card - Photo only */}
                <div className="flip-card-front absolute inset-0">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                    data-testid={`speaker-image-${member.id}`}
                  />
                </div>
                
                {/* Back of card - Name and info */}
                <div className="flip-card-back absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white flex flex-col justify-center items-center p-6 text-center">
                  <h3 className="text-xl font-bold mb-3 animate-fade-in-up" data-testid={`speaker-name-${member.id}`}>
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium mb-4 opacity-90 animate-fade-in-up animation-delay-200" data-testid={`speaker-title-${member.id}`}>
                    {member.title}
                  </p>
                  <p className="text-xs opacity-80 mb-4 animate-fade-in-up animation-delay-400">
                    {member.bio}
                  </p>
                  
                  {/* Social media icons */}
                  <div className="flex space-x-4 animate-fade-in-up animation-delay-600">
                    {member.socialMedia.email && (
                      <a 
                        href={`mailto:${member.socialMedia.email}`} 
                        className="text-white/80 hover:text-white transition-colors transform hover:scale-110"
                        data-testid={`speaker-email-${member.id}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                          <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                      </a>
                    )}
                    {member.socialMedia.linkedin && (
                      <a 
                        href={member.socialMedia.linkedin} 
                        className="text-white/80 hover:text-white transition-colors transform hover:scale-110"
                        data-testid={`speaker-linkedin-${member.id}`}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional team members */}
        <div className="bg-white rounded-lg p-8 shadow-md">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Additional Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="text-lg font-bold text-primary mb-2">Mr. Albert Wakoli</h4>
              <p className="text-secondary font-medium mb-2">Business Development Manager</p>
              <p className="text-neutral-600 text-sm">
                Coordinating business relationships and partnerships that enhance the innovation ecosystem.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-bold text-primary mb-2">Mrs. Esther Ateka</h4>
              <p className="text-secondary font-medium mb-2">Student Mentorship Coordinator</p>
              <p className="text-neutral-600 text-sm">
                Providing guidance and support for student entrepreneurs and innovators.
              </p>
            </div>
            
            <div className="text-center">
              <h4 className="text-lg font-bold text-primary mb-2">Mrs. Edna Akuru</h4>
              <p className="text-secondary font-medium mb-2">Community Outreach Coordinator</p>
              <p className="text-neutral-600 text-sm">
                Facilitating connections between the university and local community for innovation initiatives.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/about#team">
              View Full Team <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;