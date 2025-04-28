import { Link } from "wouter";
import { Linkedin, Mail, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Dr. John Ouma",
      title: "Director, Innovation & Entrepreneurship Centre",
      bio: "Experienced academic and entrepreneur with a focus on fostering innovation within higher education institutions.",
      imageUrl: "/src/assets/images/BTV08418.JPG",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        email: "director.iec@ueab.ac.ke"
      }
    },
    {
      id: 2,
      name: "Prof. Samuel Kiprono",
      title: "Deputy Director",
      bio: "Professor of Business with expertise in innovation strategy and entrepreneurship development.",
      imageUrl: "/src/assets/images/BTV08426.JPG",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        email: "deputydirector.iec@ueab.ac.ke"
      }
    },
    {
      id: 3,
      name: "Ms. Faith Chepngetich",
      title: "Innovation Programs Coordinator",
      bio: "Experienced program manager with a background in Technology and Innovation Management.",
      imageUrl: "/src/assets/images/BTV08793.JPG",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        email: "programs.iec@ueab.ac.ke"
      }
    },
    {
      id: 4,
      name: "Mr. David Kiprop",
      title: "Business Development Officer",
      bio: "Entrepreneurship coach with experience in startup incubation and business mentorship.",
      imageUrl: "/src/assets/images/BTV08240.JPG",
      socialMedia: {
        linkedin: "#",
        twitter: "#",
        email: "business.iec@ueab.ac.ke"
      }
    }
  ];

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <Card key={member.id} className="overflow-hidden shadow-md transition-transform duration-300 card-3d">
              <div className="aspect-square relative">
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full flex justify-center space-x-3">
                    {member.socialMedia.linkedin && (
                      <a href={member.socialMedia.linkedin} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors">
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {member.socialMedia.twitter && (
                      <a href={member.socialMedia.twitter} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors">
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {member.socialMedia.email && (
                      <a href={`mailto:${member.socialMedia.email}`} className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-primary/80 transition-colors">
                        <Mail className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-5">
                <h3 className="text-lg font-bold text-primary">{member.name}</h3>
                <p className="text-secondary font-medium mb-2">{member.title}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/about#team">Meet Our Full Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;