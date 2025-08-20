import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface RevolutionLayer {
  type: 'text' | 'image' | 'button';
  content: string;
  style: {
    position: { x: number; y: number };
    animation: 'slideInLeft' | 'slideInRight' | 'slideInUp' | 'slideInDown' | 'fadeIn' | 'zoomIn' | 'rotateIn';
    delay: number;
    duration: number;
  };
  className?: string;
}

interface RevolutionSlide {
  id: number;
  backgroundImage: string;
  backgroundVideo?: string;
  layers: RevolutionLayer[];
  duration: number;
}

interface RevolutionSliderProps {
  slides: RevolutionSlide[];
  height?: string;
  autoPlay?: boolean;
  showNavigation?: boolean;
}

const RevolutionSlider: React.FC<RevolutionSliderProps> = ({
  slides,
  height = '500px',
  autoPlay = true,
  showNavigation = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [activeAnimations, setActiveAnimations] = useState<boolean[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Initialize animations for first slide
    setActiveAnimations(new Array(slides[0]?.layers.length || 0).fill(true));
  }, []);

  useEffect(() => {
    if (autoPlay && slides.length > 1) {
      const currentDuration = slides[currentSlide]?.duration || 5000;
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, currentDuration);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, autoPlay]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveAnimations(new Array(slides[currentSlide]?.layers.length || 0).fill(false));
      
      setTimeout(() => {
        const nextIndex = (currentSlide + 1) % slides.length;
        setCurrentSlide(nextIndex);
        setActiveAnimations(new Array(slides[nextIndex]?.layers.length || 0).fill(true));
        setIsTransitioning(false);
      }, 800);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveAnimations(new Array(slides[currentSlide]?.layers.length || 0).fill(false));
      
      setTimeout(() => {
        const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
        setCurrentSlide(prevIndex);
        setActiveAnimations(new Array(slides[prevIndex]?.layers.length || 0).fill(true));
        setIsTransitioning(false);
      }, 800);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setActiveAnimations(new Array(slides[currentSlide]?.layers.length || 0).fill(false));
      
      setTimeout(() => {
        setCurrentSlide(index);
        setActiveAnimations(new Array(slides[index]?.layers.length || 0).fill(true));
        setIsTransitioning(false);
      }, 800);
    }
  };

  const getAnimationClass = (animation: string, isActive: boolean) => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isActive) {
      switch (animation) {
        case 'slideInLeft':
          return `${baseClasses} -translate-x-full opacity-0`;
        case 'slideInRight':
          return `${baseClasses} translate-x-full opacity-0`;
        case 'slideInUp':
          return `${baseClasses} -translate-y-full opacity-0`;
        case 'slideInDown':
          return `${baseClasses} translate-y-full opacity-0`;
        case 'fadeIn':
          return `${baseClasses} opacity-0`;
        case 'zoomIn':
          return `${baseClasses} scale-0 opacity-0`;
        case 'rotateIn':
          return `${baseClasses} rotate-180 scale-0 opacity-0`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100`;
  };

  const renderLayer = (layer: RevolutionLayer, index: number) => {
    const isActive = activeAnimations[index];
    const animationClass = getAnimationClass(layer.style.animation, isActive);
    const delayStyle = { transitionDelay: `${layer.style.delay}ms` };
    
    const baseStyle = {
      position: 'absolute' as const,
      left: `${layer.style.position.x}%`,
      top: `${layer.style.position.y}%`,
      ...delayStyle,
    };

    switch (layer.type) {
      case 'text':
        return (
          <div
            key={index}
            className={`${animationClass} ${layer.className || 'text-white text-4xl font-bold'}`}
            style={baseStyle}
          >
            {layer.content}
          </div>
        );
      
      case 'image':
        return (
          <img
            key={index}
            src={layer.content}
            alt=""
            className={`${animationClass} ${layer.className || 'max-w-xs'}`}
            style={baseStyle}
          />
        );
      
      case 'button':
        return (
          <Button
            key={index}
            className={`${animationClass} ${layer.className || 'bg-primary hover:bg-primary/90'}`}
            style={baseStyle}
          >
            {layer.content}
          </Button>
        );
      
      default:
        return null;
    }
  };

  if (!slides.length) return null;

  return (
    <div className="relative w-full overflow-hidden bg-gray-900 group" style={{ height }}>
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ${
              slideIndex === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background */}
            {slide.backgroundVideo ? (
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={slide.backgroundVideo} type="video/mp4" />
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.backgroundImage})` }}
                />
              </video>
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              />
            )}
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Layers */}
            <div className="relative z-20 w-full h-full">
              {slideIndex === currentSlide &&
                slide.layers.map((layer, layerIndex) => renderLayer(layer, layerIndex))
              }
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {showNavigation && slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white p-4 rounded-full backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-12 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Revolution Brand Badge */}
      <div className="absolute top-4 right-4 z-30 bg-black/50 text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Layers className="w-3 h-3 inline mr-1" />
        Revolution
      </div>
    </div>
  );
};

export default RevolutionSlider;