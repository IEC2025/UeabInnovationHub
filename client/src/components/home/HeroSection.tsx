import { Link } from "wouter";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const HeroSection = () => {
  // Images and logos
  const images = {
    ueabLogo: "https://ueab.ac.ke/wp-content/uploads/2019/10/WEBLOGO.png",
    iecLogo: "/src/assets/images/iec-logo.png",
    kiwSign: "/src/assets/images/kiw-sign.jpg",
    ueabFlags: "/src/assets/images/ueab-flags.jpg",
    ukPavilion: "/src/assets/images/uk-pavilion.jpg",
    kiwImage: "/src/assets/images/kiw-image3.jpg"
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const sloganRef = useRef<HTMLDivElement>(null);

  // Mouse-triggered 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sloganRef.current) return;
      
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30; // -15 to 15
      const yPos = (clientY / window.innerHeight - 0.5) * 15; // -7.5 to 7.5
      
      sloganRef.current.style.transform = `translate3d(${xPos}px, ${yPos}px, 0) rotateX(${yPos * 0.2}deg) rotateY(${-xPos * 0.2}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollTop = window.scrollY;
        const parallaxEl = parallaxRef.current;
        const parallaxAmount = scrollTop * 0.4;
        parallaxEl.style.transform = `translateY(${parallaxAmount}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on("select", onSelect);
    
    // Auto-scroll carousel
    const autoScrollInterval = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 6000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoScrollInterval);
    };
  }, [emblaApi, onSelect]);
  
  const sloganWords = ["Innovate", "Inspire", "Impact"];
  const sloganFull = "Innovate, Inspire, Impact";
  const [currentWord, setCurrentWord] = useState(0);

  // Slogan animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % sloganWords.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Define slides using the images object
  const slides = [
    {
      image: images.kiwSign,
      title: "Kenya Innovation Week",
      description: "Where ideas become reality through collaboration and support",
      tag: "Featured Event"
    },
    {
      image: images.ueabFlags,
      title: "Innovation & Entrepreneurship Center",
      description: "University of Eastern Africa, Baraton",
      tag: "Our Center"
    },
    {
      image: images.ukPavilion,
      title: "Student Innovators",
      description: "Award-winning students at Kenya Innovation Week 2024", 
      tag: "Success Stories"
    },
    {
      image: images.kiwImage,
      title: sloganFull,
      description: "Join our community of innovators and entrepreneurs shaping the future",
      tag: "Our Mission"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-primary/20 to-transparent pt-16 pb-8 overflow-hidden">
      {/* Large 3D Slogan Overlay - Animated with Mouse Movement */}
      <div 
        ref={sloganRef}
        className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden transition-transform duration-300 ease-out"
        style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
      >
        <h2 className="text-8xl md:text-[10rem] font-black text-primary/5 whitespace-nowrap rotate-12 slogan-animation">
          {sloganWords.map((word, index) => (
            <span 
              key={word} 
              className={`inline-block mx-6 transition-all duration-1000 transform ${
                index === currentWord 
                  ? 'scale-150 text-primary/15' 
                  : 'scale-100 opacity-20'
              }`}
              style={{ textShadow: index === currentWord ? '0 10px 30px rgba(0,0,0,0.1)' : 'none' }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Hero Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start mb-6">
              <div className="flex items-center justify-center md:justify-start flex-wrap md:flex-nowrap gap-4 mb-4">
                <img 
                  src={images.ueabLogo} 
                  alt="UEAB Logo" 
                  className="h-16 w-auto rotate-scale-effect" 
                />
                <img 
                  src={images.iecLogo} 
                  alt="IEC Logo" 
                  className="h-16 w-auto rotate-scale-effect" 
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  Innovation & Entrepreneurship Centre
                </h1>
                <div className="text-secondary font-semibold text-xl mt-4 flex gap-2 justify-center md:justify-start">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                    <span className="relative font-bold tracking-wider">{sloganFull}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-lg text-neutral-700 mb-8">
              Fostering innovation, entrepreneurship, and creativity among
              students and faculty at the University of Eastern Africa, Baraton.
              Building tomorrow's leaders through collaboration, education, and support.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link 
                href="/programs"
                className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center rotate-3d shadow-lg"
              >
                Our Programs
              </Link>
              <Link 
                href="/contact"
                className="bg-white hover:bg-neutral-100 text-primary font-bold py-3 px-6 rounded-md transition duration-300 text-center border border-primary rotate-3d shadow-lg"
              >
                Get Involved
              </Link>
            </div>
          </div>
          
          {/* Advanced Parallax Carousel */}
          <div className="w-full md:w-1/2 perspective-container">
            <div className="overflow-hidden rounded-2xl shadow-xl rotate-3d card-3d">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {slides.map((slide, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                      <div className="relative h-[500px] parallax-slide">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="h-full w-full object-cover artistic-transition"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                          {slide.tag && (
                            <span className="px-3 py-1 bg-secondary/90 text-white text-sm font-semibold rounded-full mb-4 self-start">
                              {slide.tag}
                            </span>
                          )}
                          <div className="parallax-layer parallax-layer-1">
                            <h3 className="text-3xl font-bold text-white mb-2">{slide.title}</h3>
                            <p className="text-white/90 text-lg">{slide.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Enhanced dots navigation */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index 
                        ? 'bg-white w-8' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
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
    </section>
  );
};

export default HeroSection;
