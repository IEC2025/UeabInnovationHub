import { Link } from "wouter";
import { useCallback, useEffect, useState, useRef } from "react";
import ResponsiveSliderSystem from '@/components/sliders/ResponsiveSliderSystem';

const HeroSection = () => {
  // Enhanced Responsive Slider data with advanced features
  const responsiveSlides = [
    {
      id: 1,
      title: "Innovation & Entrepreneurship Centre",
      subtitle: "Empowering Future Leaders",
      description: "Transforming ideas into impactful ventures through comprehensive startup incubation, mentorship, and cutting-edge resources at the University of Eastern Africa, Baraton.",
      image: "/src/assets/images/BTV08785.JPG",
      mobileImage: "/src/assets/images/BTV08785.JPG",
      tabletImage: "/src/assets/images/BTV08785.JPG", 
      desktopImage: "/src/assets/images/BTV08785.JPG",
      cta: {
        text: "Explore Programs",
        link: "/programs",
        variant: "primary" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.4)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.8) 0%, rgba(59,130,246,0.6) 100%)"
      },
      contentPosition: "left" as const,
      textAlign: "left" as const
    },
    {
      id: 2,
      title: "Student Innovation Hub",
      subtitle: "Where Ideas Come to Life",
      description: "Join a vibrant community of innovators, access state-of-the-art facilities, and receive guidance from industry experts to turn your entrepreneurial dreams into reality.",
      image: "/src/assets/images/BTV08537.JPG",
      mobileImage: "/src/assets/images/BTV08537.JPG",
      tabletImage: "/src/assets/images/BTV08537.JPG",
      desktopImage: "/src/assets/images/BTV08537.JPG",
      cta: {
        text: "Join Community",
        link: "/about",
        variant: "secondary" as const
      },
      overlay: {
        opacity: 0.5,
        color: "rgba(0,0,0,0.5)",
        gradient: "linear-gradient(135deg, rgba(139,69,19,0.8) 0%, rgba(255,140,0,0.6) 100%)"
      },
      contentPosition: "center" as const,
      textAlign: "center" as const
    },
    {
      id: 3,
      title: "Partnership & Collaboration",
      subtitle: "Building Bridges to Success",
      description: "Connecting students with industry partners, investors, and global networks to accelerate innovation and create sustainable business solutions for Africa and beyond.",
      image: "/src/assets/images/kiw-image3.jpg",
      mobileImage: "/src/assets/images/kiw-image3.jpg",
      tabletImage: "/src/assets/images/kiw-image3.jpg",
      desktopImage: "/src/assets/images/kiw-image3.jpg",
      cta: {
        text: "Learn More",
        link: "/events",
        variant: "outline" as const
      },
      overlay: {
        opacity: 0.6,
        color: "rgba(0,0,0,0.6)",
        gradient: "linear-gradient(135deg, rgba(34,197,94,0.8) 0%, rgba(16,185,129,0.6) 100%)"
      },
      contentPosition: "right" as const,
      textAlign: "right" as const
    }
  ];

  return (
    <div className="relative">
      <ResponsiveSliderSystem 
        slides={responsiveSlides}
        autoPlay={true}
        autoPlayInterval={6000}
        height={{
          mobile: "100vh",
          tablet: "80vh", 
          desktop: "100vh"
        }}
        aspectRatio={{
          mobile: "16/10",
          tablet: "16/9",
          desktop: "21/9"
        }}
        adaptiveLoading={true}
        intersectionThreshold={0.1}
        preloadImages={true}
      />
      
      {/* Curved Bottom Edge */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;