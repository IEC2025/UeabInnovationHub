import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Advanced responsive breakpoint system
const BREAKPOINTS = {
  xs: 320,
  sm: 640, 
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920
} as const;

// Fluid typography system
const FLUID_TYPOGRAPHY = {
  'text-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 1rem)',
  'text-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1.125rem)',
  'text-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
  'text-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
  'text-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
  'text-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
  'text-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
  'text-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3.5rem)',
  'text-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)',
  'text-6xl': 'clamp(3.75rem, 3rem + 3.75vw, 6rem)'
};

interface ResponsiveSlide {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  mobileImage?: string;
  tabletImage?: string;
  desktopImage?: string;
  video?: string;
  mobileVideo?: string;
  cta?: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  overlay?: {
    opacity: number;
    color: string;
    gradient?: string;
  };
  contentPosition?: 'left' | 'center' | 'right';
  textAlign?: 'left' | 'center' | 'right';
}

interface ResponsiveSliderProps {
  slides: ResponsiveSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  height?: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  aspectRatio?: {
    mobile: string;
    tablet: string; 
    desktop: string;
  };
  adaptiveLoading?: boolean;
  intersectionThreshold?: number;
  preloadImages?: boolean;
}

const ResponsiveSliderSystem: React.FC<ResponsiveSliderProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  height = {
    mobile: '50vh',
    tablet: '60vh', 
    desktop: '70vh'
  },
  aspectRatio = {
    mobile: '16/9',
    tablet: '16/9',
    desktop: '21/9'
  },
  adaptiveLoading = true,
  intersectionThreshold = 0.1,
  preloadImages = true
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isVisible, setIsVisible] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [connectionSpeed, setConnectionSpeed] = useState<'slow' | 'fast'>('fast');
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Advanced device detection
  const detectDevice = useCallback(() => {
    const width = window.innerWidth;
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent);
    
    if (width < BREAKPOINTS.md || isMobile) {
      setDeviceType('mobile');
    } else if (width < BREAKPOINTS.lg) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  // Connection speed detection
  const detectConnectionSpeed = useCallback(() => {
    // @ts-ignore - Navigator connection API
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      const speed = connection.effectiveType;
      setConnectionSpeed(['slow-2g', '2g', '3g'].includes(speed) ? 'slow' : 'fast');
    }
  }, []);

  // Intersection Observer for performance
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsPlaying(false);
        }
      },
      { threshold: intersectionThreshold }
    );

    if (sliderRef.current) {
      observerRef.current.observe(sliderRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [intersectionThreshold]);

  // Device and connection detection
  useEffect(() => {
    detectDevice();
    detectConnectionSpeed();
    
    const handleResize = () => detectDevice();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [detectDevice, detectConnectionSpeed]);

  // Image preloading
  useEffect(() => {
    if (preloadImages && connectionSpeed === 'fast') {
      slides.forEach((slide, index) => {
        if (!loadedImages.has(index)) {
          const img = new Image();
          img.onload = () => {
            setLoadedImages(prev => new Set(prev).add(index));
          };
          img.src = getOptimalImage(slide);
        }
      });
    }
  }, [slides, preloadImages, connectionSpeed, loadedImages]);

  // Auto-play with visibility check
  useEffect(() => {
    if (isPlaying && isVisible && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isVisible, slides.length, autoPlayInterval]);

  // Get optimal image based on device and connection
  const getOptimalImage = useCallback((slide: ResponsiveSlide): string => {
    if (connectionSpeed === 'slow') {
      return slide.image; // Use smaller default image for slow connections
    }

    switch (deviceType) {
      case 'mobile':
        return slide.mobileImage || slide.image;
      case 'tablet':
        return slide.tabletImage || slide.image;
      case 'desktop':
        return slide.desktopImage || slide.image;
      default:
        return slide.image;
    }
  }, [deviceType, connectionSpeed]);

  // Touch handling with gesture recognition
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    
    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getCurrentSlide = () => slides[currentSlide];

  const getDynamicStyles = () => ({
    '--slider-height-mobile': height.mobile,
    '--slider-height-tablet': height.tablet,
    '--slider-height-desktop': height.desktop,
    '--aspect-ratio-mobile': aspectRatio.mobile,
    '--aspect-ratio-tablet': aspectRatio.tablet,
    '--aspect-ratio-desktop': aspectRatio.desktop,
    '--current-slide': currentSlide,
    '--total-slides': slides.length,
    '--progress': `${((currentSlide + 1) / slides.length) * 100}%`,
  } as React.CSSProperties);

  if (!slides.length) return null;

  const currentSlideData = getCurrentSlide();

  return (
    <div 
      ref={sliderRef}
      className="relative w-full overflow-hidden group"
      style={{
        ...getDynamicStyles(),
        height: `var(--slider-height-${deviceType})`,
        aspectRatio: `var(--aspect-ratio-${deviceType})`,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* CSS Custom Properties for dynamic theming */}
      <style>{`
        .responsive-slider-container {
          container-type: inline-size;
        }
        
        @container (max-width: 768px) {
          .slider-title { font-size: ${FLUID_TYPOGRAPHY['text-3xl']}; }
          .slider-subtitle { font-size: ${FLUID_TYPOGRAPHY['text-lg']}; }
          .slider-description { font-size: ${FLUID_TYPOGRAPHY['text-sm']}; }
        }
        
        @container (min-width: 769px) and (max-width: 1024px) {
          .slider-title { font-size: ${FLUID_TYPOGRAPHY['text-4xl']}; }
          .slider-subtitle { font-size: ${FLUID_TYPOGRAPHY['text-xl']}; }
          .slider-description { font-size: ${FLUID_TYPOGRAPHY['text-base']}; }
        }
        
        @container (min-width: 1025px) {
          .slider-title { font-size: ${FLUID_TYPOGRAPHY['text-5xl']}; }
          .slider-subtitle { font-size: ${FLUID_TYPOGRAPHY['text-2xl']}; }
          .slider-description { font-size: ${FLUID_TYPOGRAPHY['text-lg']}; }
        }

        .adaptive-image {
          object-fit: cover;
          will-change: transform;
          transform: translateZ(0);
        }

        .slide-content {
          will-change: transform, opacity;
          backface-visibility: hidden;
        }
      `}</style>

      <div className="responsive-slider-container relative w-full h-full">
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-out ${
              index === currentSlide
                ? 'opacity-100 scale-100 z-10'
                : 'opacity-0 scale-105 z-0'
            }`}
          >
            {/* Background Media */}
            {adaptiveLoading && connectionSpeed === 'fast' && slide.video && deviceType !== 'mobile' ? (
              <video
                className="adaptive-image w-full h-full"
                autoPlay
                muted
                loop
                playsInline
                poster={getOptimalImage(slide)}
              >
                <source src={slide.video} type="video/mp4" />
                <img src={getOptimalImage(slide)} alt="" className="adaptive-image w-full h-full" />
              </video>
            ) : (
              <img
                src={getOptimalImage(slide)}
                alt={slide.title}
                className={`adaptive-image w-full h-full transition-transform duration-700 hover:scale-110 ${
                  loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
                }`}
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            )}

            {/* Dynamic Overlay */}
            {slide.overlay && (
              <div
                className="absolute inset-0"
                style={{
                  background: slide.overlay.gradient || slide.overlay.color,
                  opacity: slide.overlay.opacity,
                }}
              />
            )}

            {/* Content */}
            <div className={`slide-content absolute inset-0 flex items-center z-20 ${
              slide.contentPosition === 'center' ? 'justify-center' :
              slide.contentPosition === 'right' ? 'justify-end' : 'justify-start'
            }`}>
              <div className={`container mx-auto px-4 ${
                slide.textAlign === 'center' ? 'text-center' :
                slide.textAlign === 'right' ? 'text-right' : 'text-left'
              }`}>
                <div className="max-w-4xl">
                  {/* Subtitle */}
                  {slide.subtitle && (
                    <div className="mb-4 overflow-hidden">
                      <div 
                        className={`slider-subtitle font-medium text-white/90 uppercase tracking-wide transform transition-all duration-1000 delay-200 ${
                          index === currentSlide 
                            ? 'translate-y-0 opacity-100' 
                            : 'translate-y-8 opacity-0'
                        }`}
                      >
                        {slide.subtitle}
                      </div>
                    </div>
                  )}
                  
                  {/* Title */}
                  <div className="mb-6 overflow-hidden">
                    <h1 
                      className={`slider-title font-bold text-white leading-tight transform transition-all duration-1000 delay-400 ${
                        index === currentSlide 
                          ? 'translate-x-0 opacity-100' 
                          : '-translate-x-12 opacity-0'
                      }`}
                    >
                      {slide.title}
                    </h1>
                  </div>
                  
                  {/* Description */}
                  <div className="mb-8 overflow-hidden">
                    <p 
                      className={`slider-description text-white/90 leading-relaxed max-w-3xl transform transition-all duration-1000 delay-600 ${
                        index === currentSlide 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-0'
                      }`}
                    >
                      {slide.description}
                    </p>
                  </div>
                  
                  {/* CTA Button */}
                  {slide.cta && (
                    <div className="overflow-hidden">
                      <div
                        className={`transform transition-all duration-1000 delay-800 ${
                          index === currentSlide 
                            ? 'translate-y-0 opacity-100 scale-100' 
                            : 'translate-y-8 opacity-0 scale-95'
                        }`}
                      >
                        <Button 
                          size="lg" 
                          className={`${
                            slide.cta.variant === 'secondary' ? 'bg-secondary hover:bg-secondary/90' :
                            slide.cta.variant === 'outline' ? 'border-white text-white hover:bg-white hover:text-primary' :
                            'bg-primary hover:bg-primary/90'
                          } text-white px-8 py-4 font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300`}
                          asChild
                        >
                          <a href={slide.cta.link}>
                            {slide.cta.text}
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Navigation Controls */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Play/Pause Control */}
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className="absolute bottom-4 right-4 z-30 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        )}

        {/* Adaptive Pagination */}
        {slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  deviceType === 'mobile' 
                    ? 'w-2 h-2' 
                    : 'w-3 h-3'
                } ${
                  index === currentSlide
                    ? 'bg-white scale-125 shadow-lg'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Progress Indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{
              width: `${((currentSlide + 1) / slides.length) * 100}%`,
            }}
          />
        </div>

        {/* Device Indicator (Development only) */}
        {process.env.NODE_ENV === 'development' && (
          <div className="absolute top-4 left-4 z-30 bg-black/50 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
            {deviceType} • {connectionSpeed} • {loadedImages.size}/{slides.length} loaded
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponsiveSliderSystem;