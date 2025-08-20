import { Link } from "wouter";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MasterSlider from '@/components/sliders/MasterSlider';

const HeroSection = () => {
  // Master Slider data
  const masterSlides = [
    {
      id: 1,
      title: "Innovation & Entrepreneurship Centre",
      subtitle: "Empowering Future Leaders",
      description: "Transforming ideas into impactful ventures through comprehensive startup incubation, mentorship, and cutting-edge resources at the University of Eastern Africa, Baraton.",
      image: "/src/assets/images/BTV08785.JPG",
      buttonText: "Explore Programs",
      buttonLink: "/programs",
      overlay: true
    },
    {
      id: 2,
      title: "Student Innovation Hub",
      subtitle: "Where Ideas Come to Life",
      description: "Join a vibrant community of innovators, access state-of-the-art facilities, and receive guidance from industry experts to turn your entrepreneurial dreams into reality.",
      image: "/src/assets/images/BTV08537.JPG",
      buttonText: "Join Community",
      buttonLink: "/about",
      overlay: true
    },
    {
      id: 3,
      title: "Partnership & Collaboration",
      subtitle: "Building Bridges to Success",
      description: "Connecting students with industry partners, investors, and global networks to accelerate innovation and create sustainable business solutions for Africa and beyond.",
      image: "/src/assets/images/kiw-image3.jpg",
      buttonText: "Learn More",
      buttonLink: "/events",
      overlay: true
    }
  ];

  return (
    <div className="relative">
      <MasterSlider 
        slides={masterSlides}
        autoPlay={true}
        autoPlayInterval={6000}
        showControls={true}
        showBullets={true}
        transitionDuration={1000}
      />
      
      {/* Curved Bottom Edge */}
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
  );
};

export default HeroSection;