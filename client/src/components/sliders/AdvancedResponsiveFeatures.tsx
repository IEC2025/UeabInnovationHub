import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play, Volume2, VolumeX } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Advanced touch gesture recognition
interface TouchGesture {
  startX: number;
  startY: number;
  currentX: number;
  currentY: number;
  deltaX: number;
  deltaY: number;
  velocity: number;
  isSwipe: boolean;
  direction: 'left' | 'right' | 'up' | 'down' | null;
}

// Performance monitoring
interface PerformanceMetrics {
  fps: number;
  renderTime: number;
  memoryUsage: number;
  networkSpeed: 'slow' | 'medium' | 'fast';
  deviceCapabilities: 'low' | 'medium' | 'high';
}

// Enhanced slide interface with parallax and interactive elements
interface AdvancedSlide {
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
  parallaxLayers?: {
    foreground?: string;
    midground?: string;
    background?: string;
  };
  interactiveHotspots?: {
    id: string;
    x: number;
    y: number;
    title: string;
    description: string;
    action?: () => void;
  }[];
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
  accessibilityLabel?: string;
}

interface AdvancedResponsiveFeaturesProps {
  slides: AdvancedSlide[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  enableParallax?: boolean;
  enableGestures?: boolean;
  enableKeyboardNav?: boolean;
  enablePerformanceMonitoring?: boolean;
  adaptiveQuality?: boolean;
  height?: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
  onSlideChange?: (index: number) => void;
  onPerformanceUpdate?: (metrics: PerformanceMetrics) => void;
}

const AdvancedResponsiveFeatures: React.FC<AdvancedResponsiveFeaturesProps> = ({
  slides,
  autoPlay = true,
  autoPlayInterval = 5000,
  enableParallax = true,
  enableGestures = true,
  enableKeyboardNav = true,
  enablePerformanceMonitoring = false,
  adaptiveQuality = true,
  height = {
    mobile: '100vh',
    tablet: '80vh',
    desktop: '100vh'
  },
  onSlideChange,
  onPerformanceUpdate
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  const [touchGesture, setTouchGesture] = useState<TouchGesture | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    renderTime: 0,
    memoryUsage: 0,
    networkSpeed: 'fast',
    deviceCapabilities: 'high'
  });
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [loadedAssets, setLoadedAssets] = useState<Set<number>>(new Set());
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const performanceRef = useRef<number>(0);
  const frameCountRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  // Advanced device and capability detection
  const detectDeviceCapabilities = useCallback(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    
    let capabilities: 'low' | 'medium' | 'high' = 'medium';
    
    if (gl && hardwareConcurrency >= 8 && memory >= 8) {
      capabilities = 'high';
    } else if (hardwareConcurrency < 4 || memory < 4) {
      capabilities = 'low';
    }

    const width = window.innerWidth;
    const deviceType = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
    
    setDeviceType(deviceType);
    setPerformanceMetrics(prev => ({ ...prev, deviceCapabilities: capabilities }));
  }, []);

  // Network speed detection
  const detectNetworkSpeed = useCallback(() => {
    // @ts-ignore - Navigator connection API
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      const effectiveType = connection.effectiveType;
      const speed = ['slow-2g', '2g'].includes(effectiveType) ? 'slow' :
                   ['3g'].includes(effectiveType) ? 'medium' : 'fast';
      setPerformanceMetrics(prev => ({ ...prev, networkSpeed: speed }));
    }
  }, []);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (!enablePerformanceMonitoring) return;

    const now = performance.now();
    frameCountRef.current++;

    if (now - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
      frameCountRef.current = 0;
      lastTimeRef.current = now;

      // @ts-ignore - Memory API
      const memory = (performance as any).memory;
      const memoryUsage = memory ? memory.usedJSHeapSize / memory.jsHeapSizeLimit : 0;

      const newMetrics = {
        ...performanceMetrics,
        fps,
        renderTime: now - performanceRef.current,
        memoryUsage
      };

      setPerformanceMetrics(newMetrics);
      onPerformanceUpdate?.(newMetrics);
    }

    performanceRef.current = performance.now();
    requestAnimationFrame(monitorPerformance);
  }, [enablePerformanceMonitoring, performanceMetrics, onPerformanceUpdate]);

  // Advanced touch gesture recognition
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!enableGestures) return;

    const touch = e.touches[0];
    setTouchGesture({
      startX: touch.clientX,
      startY: touch.clientY,
      currentX: touch.clientX,
      currentY: touch.clientY,
      deltaX: 0,
      deltaY: 0,
      velocity: 0,
      isSwipe: false,
      direction: null
    });
  }, [enableGestures]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!enableGestures || !touchGesture) return;

    const touch = e.touches[0];
    const deltaX = touch.clientX - touchGesture.startX;
    const deltaY = touch.clientY - touchGesture.startY;
    const velocity = Math.abs(deltaX) / (performance.now() - lastTimeRef.current);

    setTouchGesture(prev => prev ? {
      ...prev,
      currentX: touch.clientX,
      currentY: touch.clientY,
      deltaX,
      deltaY,
      velocity,
      isSwipe: Math.abs(deltaX) > 50 && Math.abs(deltaX) > Math.abs(deltaY),
      direction: Math.abs(deltaX) > Math.abs(deltaY) 
        ? (deltaX > 0 ? 'right' : 'left')
        : (deltaY > 0 ? 'down' : 'up')
    } : null);
  }, [enableGestures, touchGesture]);

  const handleTouchEnd = useCallback(() => {
    if (!enableGestures || !touchGesture) return;

    if (touchGesture.isSwipe && Math.abs(touchGesture.deltaX) > 100) {
      if (touchGesture.direction === 'left') {
        nextSlide();
      } else if (touchGesture.direction === 'right') {
        prevSlide();
      }
    }

    setTouchGesture(null);
  }, [enableGestures, touchGesture]);

  // Parallax scroll effect
  const handleScroll = useCallback(() => {
    if (!enableParallax) return;
    
    const scrollY = window.scrollY;
    const rate = scrollY * -0.5;
    setParallaxOffset(rate);
  }, [enableParallax]);

  // Keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!enableKeyboardNav) return;

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
  }, [enableKeyboardNav]);

  // Intersection Observer for performance
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) {
          setIsPlaying(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sliderRef.current) {
      observerRef.current.observe(sliderRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Initialize advanced features
  useEffect(() => {
    detectDeviceCapabilities();
    detectNetworkSpeed();
    
    if (enablePerformanceMonitoring) {
      monitorPerformance();
    }

    if (enableParallax) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    if (enableKeyboardNav) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [detectDeviceCapabilities, detectNetworkSpeed, monitorPerformance, handleScroll, handleKeyDown]);

  // Smart asset preloading
  useEffect(() => {
    if (adaptiveQuality && performanceMetrics.networkSpeed === 'fast') {
      slides.forEach((slide, index) => {
        if (!loadedAssets.has(index)) {
          const img = new Image();
          img.onload = () => {
            setLoadedAssets(prev => new Set(prev).add(index));
          };
          img.src = getOptimalImage(slide);
        }
      });
    }
  }, [slides, adaptiveQuality, performanceMetrics.networkSpeed, loadedAssets]);

  // Auto-play with advanced controls
  useEffect(() => {
    if (isPlaying && isVisible && slides.length > 1) {
      const interval = performanceMetrics.fps < 30 ? autoPlayInterval * 1.5 : autoPlayInterval;
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, interval);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, isVisible, slides.length, autoPlayInterval, performanceMetrics.fps]);

  const getOptimalImage = useCallback((slide: AdvancedSlide): string => {
    const quality = performanceMetrics.deviceCapabilities;
    const network = performanceMetrics.networkSpeed;

    if (network === 'slow' || quality === 'low') {
      return slide.image;
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
  }, [deviceType, performanceMetrics]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(newIndex);
    onSlideChange?.(newIndex);
  }, [currentSlide, slides.length, onSlideChange]);

  const prevSlide = useCallback(() => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(newIndex);
    onSlideChange?.(newIndex);
  }, [currentSlide, slides.length, onSlideChange]);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    onSlideChange?.(index);
  }, [onSlideChange]);

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  if (!slides.length) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      ref={sliderRef}
      className="relative w-full overflow-hidden group touch-slider"
      style={{
        height: `var(--slider-height-${deviceType})`,
        '--slider-height-mobile': height.mobile,
        '--slider-height-tablet': height.tablet,
        '--slider-height-desktop': height.desktop,
      } as React.CSSProperties}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
    >
      {/* Parallax Background Layers */}
      {enableParallax && currentSlideData.parallaxLayers && (
        <div className="absolute inset-0">
          {currentSlideData.parallaxLayers.background && (
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${currentSlideData.parallaxLayers.background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${parallaxOffset * 0.3}px) scale(1.1)`,
              }}
            />
          )}
          {currentSlideData.parallaxLayers.midground && (
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${currentSlideData.parallaxLayers.midground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `translateY(${parallaxOffset * 0.6}px) scale(1.05)`,
              }}
            />
          )}
        </div>
      )}

      {/* Main Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            index === currentSlide
              ? 'opacity-100 scale-100 z-10'
              : 'opacity-0 scale-105 z-0'
          }`}
          aria-hidden={index !== currentSlide}
        >
          {/* Background Media */}
          {slide.video && !isMuted && performanceMetrics.deviceCapabilities !== 'low' ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              poster={getOptimalImage(slide)}
              style={{
                transform: enableParallax ? `translateY(${parallaxOffset * 0.9}px)` : 'none',
              }}
            >
              <source src={slide.video} type="video/mp4" />
              <img src={getOptimalImage(slide)} alt="" className="w-full h-full object-cover" />
            </video>
          ) : (
            <img
              src={getOptimalImage(slide)}
              alt={slide.accessibilityLabel || slide.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                loadedAssets.has(index) ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transform: enableParallax ? `translateY(${parallaxOffset * 0.9}px) scale(1.1)` : 'none',
              }}
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

          {/* Interactive Hotspots */}
          {slide.interactiveHotspots?.map((hotspot) => (
            <button
              key={hotspot.id}
              className="absolute w-6 h-6 bg-white/80 hover:bg-white rounded-full border-2 border-primary transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 z-20"
              style={{
                left: `${hotspot.x}%`,
                top: `${hotspot.y}%`,
              }}
              onClick={hotspot.action}
              aria-label={hotspot.title}
              title={hotspot.description}
            >
              <div className="w-2 h-2 bg-primary rounded-full mx-auto mt-1"></div>
            </button>
          ))}

          {/* Content with enhanced animations */}
          <div className={`absolute inset-0 flex items-center z-20 ${
            slide.contentPosition === 'center' ? 'justify-center' :
            slide.contentPosition === 'right' ? 'justify-end' : 'justify-start'
          }`}>
            <div className={`container mx-auto px-4 ${
              slide.textAlign === 'center' ? 'text-center' :
              slide.textAlign === 'right' ? 'text-right' : 'text-left'
            }`}>
              <div className="max-w-4xl">
                {/* Enhanced content with staggered animations */}
                {slide.subtitle && (
                  <div className="mb-4 overflow-hidden">
                    <div 
                      className={`fluid-text-lg font-medium text-white/90 uppercase tracking-wide transform transition-all duration-1000 delay-200 ${
                        index === currentSlide 
                          ? 'translate-y-0 opacity-100' 
                          : 'translate-y-8 opacity-0'
                      }`}
                    >
                      {slide.subtitle}
                    </div>
                  </div>
                )}
                
                <div className="mb-6 overflow-hidden">
                  <h1 
                    className={`fluid-text-5xl font-bold text-white leading-tight transform transition-all duration-1000 delay-400 ${
                      index === currentSlide 
                        ? 'translate-x-0 opacity-100' 
                        : '-translate-x-12 opacity-0'
                    }`}
                  >
                    {slide.title}
                  </h1>
                </div>
                
                <div className="mb-8 overflow-hidden">
                  <p 
                    className={`fluid-text-xl text-white/90 leading-relaxed max-w-3xl transform transition-all duration-1000 delay-600 ${
                      index === currentSlide 
                        ? 'translate-y-0 opacity-100' 
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

      {/* Enhanced Controls */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Media Controls */}
      <div className="absolute bottom-4 right-4 z-30 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {autoPlay && (
          <button
            onClick={togglePlayPause}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        )}
        
        {currentSlideData.video && (
          <button
            onClick={toggleMute}
            className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        )}
      </div>

      {/* Enhanced Pagination */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-white ${
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

      {/* Performance Monitor (Development only) */}
      {enablePerformanceMonitoring && process.env.NODE_ENV === 'development' && (
        <div className="absolute top-4 left-4 z-30 bg-black/70 text-white p-2 rounded text-xs backdrop-blur-sm font-mono">
          <div>FPS: {performanceMetrics.fps}</div>
          <div>Device: {deviceType}</div>
          <div>Network: {performanceMetrics.networkSpeed}</div>
          <div>Quality: {performanceMetrics.deviceCapabilities}</div>
          <div>Memory: {Math.round(performanceMetrics.memoryUsage * 100)}%</div>
        </div>
      )}

      {/* Screen Reader Announcements */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {currentSlide + 1} of {slides.length}: {currentSlideData.title}
      </div>
    </div>
  );
};

export default AdvancedResponsiveFeatures;