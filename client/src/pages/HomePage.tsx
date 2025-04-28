import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProgramsSection from "@/components/home/ProgramsSection";
import StatsSection from "@/components/home/StatsSection";
import EventsSection from "@/components/home/EventsSection";
import SuccessStoriesSection from "@/components/home/SuccessStoriesSection";
import TeamSection from "@/components/home/TeamSection";
import NewsSection from "@/components/home/NewsSection";
import PartnersSection from "@/components/home/PartnersSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import ContactSection from "@/components/home/ContactSection";
import { useEffect } from "react";

const HomePage = () => {
  // Set document title
  useEffect(() => {
    document.title = "Innovation & Entrepreneurship Centre | UEAB";
  }, []);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <StatsSection />
      <EventsSection />
      <NewsSection />
      <SuccessStoriesSection />
      <TeamSection />
      <PartnersSection />
      <NewsletterSection />
      <ContactSection />
    </>
  );
};

export default HomePage;
