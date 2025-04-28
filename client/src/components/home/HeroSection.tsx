import { Link } from "wouter";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true });
  const [currentSlide, setCurrentSlide] = useState(0);

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
  
  const slides = [
    {
      image: "/images/kiw-award1.png",
      title: "Kenya Innovation Week 2024",
      description: "UEAB students participating in Kenya's premier innovation event"
    },
    {
      image: "/images/kiw-award2.png",
      title: "Networking & Collaboration",
      description: "Building partnerships with industry leaders and innovators"
    },
    {
      image: "/images/kiw-award3.png",
      title: "Innovation & Entrepreneurship", 
      description: "University of Eastern Africa, Baraton's commitment to fostering innovation"
    },
    {
      image: "/images/innovation-banner.png",
      title: "Innovate. Inspire. Impact.",
      description: "Join our community of innovators and entrepreneurs shaping the future."
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-primary/20 to-transparent pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Hero Text */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-6">
              <img src="/images/iec-logo.png" alt="IEC Logo" className="h-20 w-auto mr-4" />
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                  Innovation & Entrepreneurship Centre
                </h1>
                <p className="text-secondary font-semibold text-lg mt-1">
                  Innovate. Inspire. Impact.
                </p>
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
                className="bg-secondary hover:bg-secondary/80 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-center"
              >
                Our Programs
              </Link>
              <Link 
                href="/contact"
                className="bg-white hover:bg-neutral-200 text-primary font-bold py-3 px-6 rounded-md transition duration-300 text-center border border-primary"
              >
                Get Involved
              </Link>
            </div>
          </div>
          
          {/* Carousel */}
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
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
