import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SlideData {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  mobileImage?: string;
  tabletImage?: string;
  desktopImage?: string;
  video?: string;
  cta?: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary' | 'outline';
  };
  overlay?: {
    opacity: number;
    color: string;
    gradient?: string;
    blendMode?: 'normal' | 'multiply' | 'screen' | 'overlay' | 'soft-light' | 'hard-light' | 'color-dodge' | 'color-burn' | 'darken' | 'lighten' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    colorFilter?: {
      hue?: number;
      saturation?: number;
      brightness?: number;
      contrast?: number;
      sepia?: number;
      blur?: number;
    };
  };
  animation?: {
    type: 'fade' | 'slide' | 'zoom' | 'parallax';
    direction?: 'left' | 'right' | 'up' | 'down';
    duration?: number;
  };
  contentPosition?: 'left' | 'center' | 'right';
  textAlign?: 'left' | 'center' | 'right';
}

interface FullPageAnimatedSliderProps {
  slides: SlideData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showControls?: boolean;
  showPagination?: boolean;
  enableKeyboard?: boolean;
  enableTouch?: boolean;
  enableParallax?: boolean;
  className?: string;
}

const FullPageAnimatedSlider: React.FC<FullPageAnimatedSliderProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 6000,
  showControls = true,
  showPagination = true,
  enableKeyboard = true,
  enableTouch = true,
  enableParallax = true,
  className = ''
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Device detection
  useEffect(() => {
    const detectDevice = () => {
      const width = window.innerWidth;
      setDeviceType(width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop');
    };

    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => window.removeEventListener('resize', detectDevice);
  }, []);

  // Parallax scroll effect
  useEffect(() => {
    if (!enableParallax) return;

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableParallax]);

  // Auto-play functionality
  useEffect(() => {
    if (isPlaying && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, autoPlayInterval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, slides.length, autoPlayInterval]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'ArrowRight':
          e.preventDefault();
          nextSlide();
          break;
        case ' ':
          e.preventDefault();
          togglePlayPause();
          break;
        case 'Escape':
          setIsPlaying(false);
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [enableKeyboard]);

  // Touch navigation
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enableTouch) return;
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, [enableTouch]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!enableTouch) return;
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  }, [enableTouch]);

  const handleTouchEnd = useCallback(() => {
    if (!enableTouch || !touchStart.x || !touchEnd.x) return;

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const minSwipeDistance = 50;

    // Horizontal swipe detection
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > minSwipeDistance) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    setTouchStart({ x: 0, y: 0 });
    setTouchEnd({ x: 0, y: 0 });
  }, [enableTouch, touchStart, touchEnd]);

  // Slide navigation functions
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  // Get optimal image for device
  const getOptimalImage = useCallback((slide: SlideData): string => {
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
  }, [deviceType]);

  // Get animation styles
  const getAnimationStyles = (slide: SlideData, index: number, isActive: boolean) => {
    const animation = slide.animation || { type: 'fade', duration: 1000 };
    const parallaxOffset = enableParallax ? scrollY * 0.5 : 0;

    const baseStyles: React.CSSProperties = {
      transform: `translateY(${parallaxOffset}px)`,
      transition: `all ${animation.duration || 1000}ms cubic-bezier(0.4, 0, 0.2, 1)`,
    };

    if (!isActive) {
      switch (animation.type) {
        case 'slide':
          return {
            ...baseStyles,
            transform: `translateX(${animation.direction === 'left' ? '-100%' : '100%'}) translateY(${parallaxOffset}px)`,
            opacity: 0,
          };
        case 'zoom':
          return {
            ...baseStyles,
            transform: `scale(0.8) translateY(${parallaxOffset}px)`,
            opacity: 0,
          };
        case 'parallax':
          return {
            ...baseStyles,
            transform: `translateY(${parallaxOffset * 0.3}px) scale(1.1)`,
            opacity: 0,
          };
        default: // fade
          return {
            ...baseStyles,
            opacity: 0,
          };
      }
    }

    return {
      ...baseStyles,
      transform: `translateX(0) scale(1) translateY(${parallaxOffset}px)`,
      opacity: 1,
    };
  };

  if (!slides.length) return null;

  return (
    <div 
      ref={sliderRef}
      className={`relative w-full h-full overflow-hidden group ${className}`}
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Full page image slider"
      aria-live="polite"
    >
      {/* Dynamic CSS Variables */}
      <style>{`
        .fullpage-slider {
          --slide-transition: all 1000ms cubic-bezier(0.4, 0, 0.2, 1);
          --parallax-speed: 0.5;
          --blur-amount: ${deviceType === 'mobile' ? '5px' : '10px'};
        }

        @media (max-width: 768px) {
          .slide-title { font-size: clamp(2rem, 8vw, 3rem); }
          .slide-subtitle { font-size: clamp(1rem, 4vw, 1.5rem); }
          .slide-description { font-size: clamp(0.875rem, 3vw, 1rem); }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .slide-title { font-size: clamp(2.5rem, 6vw, 4rem); }
          .slide-subtitle { font-size: clamp(1.25rem, 3vw, 2rem); }
          .slide-description { font-size: clamp(1rem, 2vw, 1.25rem); }
        }

        @media (min-width: 1025px) {
          .slide-title { font-size: clamp(3rem, 5vw, 5rem); }
          .slide-subtitle { font-size: clamp(1.5rem, 2.5vw, 2.5rem); }
          .slide-description { font-size: clamp(1.125rem, 1.5vw, 1.5rem); }
        }

        .slide-content-enter {
          animation: slideContentEnter 1200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes slideContentEnter {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .enhanced-backdrop {
          backdrop-filter: blur(var(--blur-amount));
          background: rgba(0, 0, 0, 0.1);
        }

        @supports not (backdrop-filter: blur(10px)) {
          .enhanced-backdrop {
            background: rgba(0, 0, 0, 0.3);
          }
        }
      `}</style>

      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          ref={el => slidesRef.current[index] = el}
          className={`absolute inset-0 w-full h-full fullpage-slider ${
            index === currentSlide ? 'z-20' : 'z-10'
          }`}
          style={getAnimationStyles(slide, index, index === currentSlide)}
          aria-hidden={index !== currentSlide}
        >
          {/* Background Media with Enhanced Color Effects */}
          {slide.video && !isMuted && deviceType !== 'mobile' ? (
            <video
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster={getOptimalImage(slide)}
              style={{
                transform: enableParallax ? `translateY(${scrollY * 0.3}px) scale(1.05)` : 'none',
              }}
            >
              <source src={slide.video} type="video/mp4" />
              <img 
                src={getOptimalImage(slide)} 
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </video>
          ) : (
            <img
              src={getOptimalImage(slide)}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
              style={{
                transform: enableParallax ? `translateY(${scrollY * 0.3}px) scale(1.05)` : 'scale(1.02)',
              }}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
          )}

          {/* Black Edge Vignette Effect */}
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at center, transparent 20%, transparent 40%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.8) 100%)`,
            }}
          />

          {/* Clean Professional Overlay */}
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
          <div className={`absolute inset-0 flex items-center z-30 ${
            slide.contentPosition === 'center' ? 'justify-center' :
            slide.contentPosition === 'right' ? 'justify-end' : 'justify-start'
          }`}>
            <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${
              slide.textAlign === 'center' ? 'text-center' :
              slide.textAlign === 'right' ? 'text-right' : 'text-left'
            }`}>
              <div className="max-w-4xl">
                {/* Content with staggered animations */}
                {slide.subtitle && (
                  <div className="mb-4 overflow-hidden">
                    <div 
                      className={`slide-subtitle font-medium text-white/90 uppercase tracking-wider transform transition-all duration-1000 delay-200 ${
                        index === currentSlide 
                          ? 'translate-y-0 opacity-100 slide-content-enter' 
                          : 'translate-y-8 opacity-0'
                      }`}
                    >
                      {slide.subtitle}
                    </div>
                  </div>
                )}
                
                <div className="mb-6 overflow-hidden">
                  <h1 
                    className={`slide-title font-bold text-white leading-tight transform transition-all duration-1000 delay-400 ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100 slide-content-enter' 
                        : slide.contentPosition === 'left' ? '-translate-x-12 opacity-0' : 'translate-x-12 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h1>
                </div>
                
                <div className="mb-8 overflow-hidden">
                  <p 
                    className={`slide-description text-white/90 leading-relaxed transform transition-all duration-1000 delay-600 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100 slide-content-enter' 
                        : 'translate-y-8 opacity-0'
                    }`}
                  >
                    {slide.description}
                  </p>
                </div>
                
                {slide.cta && (
                  <div className="overflow-hidden">
                    <div
                      className={`transform transition-all duration-1000 delay-800 ${
                        index === currentSlide 
                          ? 'translate-y-0 opacity-100 scale-100 slide-content-enter' 
                          : 'translate-y-8 opacity-0 scale-95'
                      }`}
                    >
                      <Button 
                        size="lg" 
                        className={`${
                          slide.cta.variant === 'secondary' ? 'bg-secondary hover:bg-secondary/90' :
                          slide.cta.variant === 'outline' ? 'border-white text-white hover:bg-white hover:text-primary bg-transparent' :
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

      {/* Navigation Controls */}
      {showControls && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-3 md:p-4 rounded-full enhanced-backdrop transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 bg-black/30 hover:bg-black/50 text-white p-3 md:p-4 rounded-full enhanced-backdrop transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        </>
      )}

      {/* Media Controls */}
      <div className="absolute bottom-4 md:bottom-8 right-4 md:right-8 z-40 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className="bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full enhanced-backdrop transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        )}
        
        {slides[currentSlide]?.video && (
          <button
            onClick={toggleMute}
            className="bg-black/30 hover:bg-black/50 text-white p-2 md:p-3 rounded-full enhanced-backdrop transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      {showPagination && slides.length > 1 && (
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-40 flex space-x-2 md:space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
                deviceType === 'mobile' 
                  ? 'w-2 h-2' 
                  : 'w-3 h-3 md:w-4 md:h-4'
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

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-40">
        <div
          className="h-full bg-white transition-all duration-1000 ease-out"
          style={{
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
          }}
        />
      </div>

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {slides[currentSlide]?.title}
      </div>
    </div>
  );
};

export default FullPageAnimatedSlider;