import { Link } from "wouter";
import { useCallback, useEffect, useState, useRef, Suspense, lazy } from "react";
import { CountdownTimer } from '@/components/ui/countdown-timer';

// Lazy load the heavy FullPageAnimatedSlider component
const FullPageAnimatedSlider = lazy(() => import('@/components/sliders/FullPageAnimatedSlider'));

const HeroSection = () => {
  // Full-page animated slider data with advanced features
  const fullPageSlides = [
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
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "parallax" as const,
        direction: "up" as const,
        duration: 1200
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
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "slide" as const,
        direction: "right" as const,
        duration: 1000
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
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "zoom" as const,
        direction: "up" as const,
        duration: 1400
      },
      contentPosition: "right" as const,
      textAlign: "right" as const
    },
    {
      id: 4,
      title: "Research & Development",
      subtitle: "Pioneering Innovation",
      description: "Leading cutting-edge research in technology, sustainability, and social innovation to address Africa's most pressing challenges while creating global impact.",
      image: "/src/assets/images/BTV08785.JPG",
      mobileImage: "/src/assets/images/BTV08785.JPG",
      tabletImage: "/src/assets/images/BTV08785.JPG",
      desktopImage: "/src/assets/images/BTV08785.JPG",
      cta: {
        text: "Discover Research",
        link: "/research",
        variant: "primary" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "fade" as const,
        duration: 1100
      },
      contentPosition: "center" as const,
      textAlign: "center" as const
    },
    {
      id: 5,
      title: "Innovation Week & Entrepreneurship Week 2025",
      subtitle: "September 28 - October 3, 2025",
      description: "Join us for an exciting week of innovation, entrepreneurship competitions, workshops, networking sessions, and groundbreaking presentations. Don't miss this opportunity to showcase your ideas and connect with industry leaders!",
      image: "/src/assets/images/ueab-campus-flags.jpg",
      mobileImage: "/src/assets/images/ueab-campus-flags.jpg",
      tabletImage: "/src/assets/images/ueab-campus-flags.jpg",
      desktopImage: "/src/assets/images/ueab-campus-flags.jpg",
      cta: {
        text: "Register Now",
        link: "/events/innovation-week-2025",
        variant: "primary" as const
      },
      overlay: {
        opacity: 0.5,
        color: "rgba(0,0,0,0.3)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.7) 0%, rgba(59,130,246,0.5) 50%, rgba(147,51,234,0.8) 100%)"
      },
      animation: {
        type: "parallax" as const,
        direction: "up" as const,
        duration: 1500
      },
      contentPosition: "center" as const,
      textAlign: "center" as const,
      specialContent: "countdown" as const
    },
    {
      id: 6,
      title: "Global Impact Network",
      subtitle: "Connecting Worldwide",
      description: "Building a global ecosystem of entrepreneurs, mentors, and investors to amplify the impact of African innovation on the world stage.",
      image: "/src/assets/images/BTV08537.JPG",
      mobileImage: "/src/assets/images/BTV08537.JPG",
      tabletImage: "/src/assets/images/BTV08537.JPG",
      desktopImage: "/src/assets/images/BTV08537.JPG",
      cta: {
        text: "Join Network",
        link: "/network",
        variant: "outline" as const
      },
      overlay: {
        opacity: 0.4,
        color: "rgba(0,0,0,0.2)",
        gradient: "linear-gradient(135deg, rgba(30,64,175,0.6) 0%, rgba(59,130,246,0.4) 50%, rgba(30,64,175,0.7) 100%)"
      },
      animation: {
        type: "slide" as const,
        direction: "left" as const,
        duration: 1300
      },
      contentPosition: "left" as const,
      textAlign: "left" as const
    }
  ];

  return (
    <Suspense fallback={
      <div className="h-screen bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-6"></div>
          <p className="text-xl">Loading hero section...</p>
        </div>
      </div>
    }>
      <FullPageAnimatedSlider 
        slides={fullPageSlides}
        autoPlay={true}
        autoPlayInterval={7000}
        showControls={true}
        showPagination={true}
        enableKeyboard={true}
        enableTouch={true}
        enableParallax={true}
        className="fullpage-hero-slider"
      />
    </Suspense>
  );
};

export default HeroSection;