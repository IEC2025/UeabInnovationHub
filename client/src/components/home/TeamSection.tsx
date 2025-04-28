import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. Jade Abuga",
      title: "Director, Innovation & Entrepreneurship Centre",
      bio: "Leading the innovation and entrepreneurship initiatives at UEAB with a focus on student development and industry partnerships.",
      imageUrl: "/src/assets/images/BTV08418.JPG",
      socialMedia: {
        email: "director.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 2,
      name: "Mr. Andrew Omambia",
      title: "Deputy Director",
      bio: "Supporting innovation strategy and entrepreneurship development within the university community.",
      imageUrl: "/src/assets/images/BTV08426.JPG",
      socialMedia: {
        email: "deputydirector.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 3,
      name: "Mr. Boagoli Arizona",
      title: "Innovation Programs Coordinator",
      bio: "Coordinating innovation initiatives and programs to foster student entrepreneurship.",
      imageUrl: "/src/assets/images/BTV08793.JPG",
      socialMedia: {
        email: "programs.iec@ueab.ac.ke",
        linkedin: "#"
      }
    },
    {
      id: 4,
      name: "Prof. Francis Ramesh",
      title: "Research & Development Lead",
      bio: "Overseeing research initiatives and guiding students in developing innovative solutions to real-world problems.",
      imageUrl: "/src/assets/images/BTV08537.JPG",
      socialMedia: {
        email: "research.iec@ueab.ac.ke",
        linkedin: "#"
      }
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-sm font-semibold text-secondary uppercase tracking-wider">
            Meet Our Team
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
            Leadership Team
          </h2>
          <p className="text-neutral-700 max-w-3xl mx-auto">
            Our dedicated team brings diverse expertise to guide the Innovation & Entrepreneurship Centre in fostering creativity and entrepreneurship.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 perspective-container mb-10">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 card-3d"
            >
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary">{member.name}</h3>
                <p className="text-secondary font-medium mb-3">{member.title}</p>
                <p className="text-neutral-600 text-sm mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-3">
                  {member.socialMedia.email && (
                    <a href={`mailto:${member.socialMedia.email}`} className="text-neutral-400 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </a>
                  )}
                  {member.socialMedia.linkedin && (
                    <a href={member.socialMedia.linkedin} className="text-neutral-400 hover:text-primary transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
              <h3 className="text-xl font-bold text-primary">Mrs. Esther Ateka</h3>
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