import { Link } from "wouter";
import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true,
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

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
    }, 5000);
    
    return () => {
      emblaApi.off("select", onSelect);
      clearInterval(autoScrollInterval);
    };
  }, [emblaApi, onSelect]);
  
  const sloganWords = ["Innovate", "Inspire", "Impact"];
  const [currentWord, setCurrentWord] = useState(0);

  // Slogan animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % sloganWords.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Innovation Hub",
      description: "Where ideas become reality through collaboration and support"
    },
    {
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Entrepreneurship Week",
      description: "Annual celebration of innovation, creativity, and business acumen"
    },
    {
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Student Entrepreneurs", 
      description: "Tomorrow's business leaders developing their skills today"
    },
    {
      image: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      title: "Innovate. Inspire. Impact.",
      description: "Join our community of innovators and entrepreneurs shaping the future"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-primary/20 to-transparent pt-16 pb-8">
      {/* Animated slogan overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden">
        <div ref={parallaxRef} className="relative">
          <h2 className="text-6xl md:text-9xl font-black text-primary/5 whitespace-nowrap rotate-12">
            {sloganWords.map((word, index) => (
              <span 
                key={word} 
                className={`inline-block mx-6 transition-all duration-1000 transform ${
                  index === currentWord 
                    ? 'scale-150 text-primary/10' 
                    : 'scale-100 opacity-25'
                }`}
              >
                {word}
              </span>
            ))}
          </h2>
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-start mb-6">
              <img 
                src="https://ueab.ac.ke/wp-content/uploads/2019/10/WEBLOGO.png" 
                alt="UEAB Logo" 
                className="h-24 w-auto mb-4 md:mb-0 md:mr-4" 
              />
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  Innovation & Entrepreneurship Centre
                </h1>
                <div className="text-secondary font-semibold text-lg mt-1 flex gap-2 justify-center md:justify-start">
                  <span className="relative">
                    <span className="absolute -left-2 top-0 text-primary/20">
                      {sloganWords[currentWord]}
                    </span>
                    <span className="relative text-secondary">
                      {sloganWords[currentWord]}
                    </span>
                  </span>
                  <span>•</span>
                  <span className="relative">
                    <span className="absolute -left-2 top-0 text-primary/20">
                      {sloganWords[(currentWord + 1) % 3]}
                    </span>
                    <span className="relative text-secondary">
                      {sloganWords[(currentWord + 1) % 3]}
                    </span>
                  </span>
                  <span>•</span>
                  <span className="relative">
                    <span className="absolute -left-2 top-0 text-primary/20">
                      {sloganWords[(currentWord + 2) % 3]}
                    </span>
                    <span className="relative text-secondary">
                      {sloganWords[(currentWord + 2) % 3]}
                    </span>
                  </span>
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
                className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center rotate-3d"
              >
                Our Programs
              </Link>
              <Link 
                href="/contact"
                className="bg-white hover:bg-neutral-200 text-primary font-bold py-3 px-6 rounded-md transition duration-300 text-center border border-primary rotate-3d"
              >
                Get Involved
              </Link>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-xl rotate-3d">
              <div className="embla overflow-hidden" ref={emblaRef}>
                <div className="embla__container flex">
                  {slides.map((slide, index) => (
                    <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
                      <div className="relative h-[400px]">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className="h-full w-full object-cover transition-transform duration-700 scale-animation"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                          <h3 className="text-2xl font-bold text-white mb-2">{slide.title}</h3>
                          <p className="text-white/90">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dots navigation */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
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
    </section>
  );
};

export default HeroSection;
