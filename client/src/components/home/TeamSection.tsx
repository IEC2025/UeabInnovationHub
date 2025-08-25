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

  return null;
};

export default TeamSection;