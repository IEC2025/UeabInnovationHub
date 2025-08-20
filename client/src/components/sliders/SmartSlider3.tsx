import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Smartphone, Tablet, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SmartSlide {
  id: number;
  title: string;
  description: string;
  image: string;
  thumbnail?: string;
  link?: string;
  tags?: string[];
}

interface SmartSlider3Props {
  slides: SmartSlide[];
  layout?: 'slider' | 'carousel' | 'showcase';
  autoPlay?: boolean;
  autoPlayInterval?: number;
  showThumbnails?: boolean;
  responsiveBreakpoints?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

const SmartSlider3: React.FC<SmartSlider3Props> = ({
  slides,
  layout = 'showcase',
  autoPlay = false,
  autoPlayInterval = 4000,
  showThumbnails = true,
  responsiveBreakpoints = { mobile: 1, tablet: 2, desktop: 3 },
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Responsive handling
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewportWidth(width);
      
      if (width < 640) {
        setVisibleSlides(responsiveBreakpoints.mobile);
      } else if (width < 1024) {
        setVisibleSlides(responsiveBreakpoints.tablet);
      } else {
        setVisibleSlides(responsiveBreakpoints.desktop);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [responsiveBreakpoints]);

  // Auto-play
  useEffect(() => {
    if (autoPlay && slides.length > visibleSlides) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlayInterval);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, autoPlay, autoPlayInterval, visibleSlides]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        const maxSlide = slides.length - visibleSlides;
        return prev >= maxSlide ? 0 : prev + 1;
      });
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => {
        const maxSlide = slides.length - visibleSlides;
        return prev <= 0 ? maxSlide : prev - 1;
      });
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const maxSlideIndex = Math.max(0, slides.length - visibleSlides);

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <div className="bg-blue-500 text-white p-2 rounded-lg">
            <Smartphone className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-gray-800">Smart Slider 3</h3>
          <div className="hidden md:flex items-center space-x-1 text-xs text-gray-500">
            <Monitor className="w-3 h-3" />
            <span>Responsive</span>
          </div>
        </div>
        
        {/* Device Indicators */}
        <div className="flex items-center space-x-1 text-xs text-gray-400">
          <div className={`flex items-center space-x-1 ${viewportWidth < 640 ? 'text-blue-500' : ''}`}>
            <Smartphone className="w-3 h-3" />
            <span>{responsiveBreakpoints.mobile}</span>
          </div>
          <div className={`flex items-center space-x-1 ${viewportWidth >= 640 && viewportWidth < 1024 ? 'text-blue-500' : ''}`}>
            <Tablet className="w-3 h-3" />
            <span>{responsiveBreakpoints.tablet}</span>
          </div>
          <div className={`flex items-center space-x-1 ${viewportWidth >= 1024 ? 'text-blue-500' : ''}`}>
            <Monitor className="w-3 h-3" />
            <span>{responsiveBreakpoints.desktop}</span>
          </div>
        </div>
      </div>

      {/* Main Slider */}
      <div className="relative group">
        {/* Slider Container */}
        <div className="overflow-hidden rounded-lg" ref={sliderRef}>
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`flex-shrink-0 px-2`}
                style={{ width: `${100 / visibleSlides}%` }}
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Tags */}
                    {slide.tags && slide.tags.length > 0 && (
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                        {slide.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <h4 className="font-bold text-gray-800 mb-2 text-lg leading-tight">
                      {slide.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {slide.description}
                    </p>
                    
                    {slide.link && (
                      <Button 
                        size="sm"
                        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4"
                        asChild
                      >
                        <a href={slide.link}>Learn More</a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        {slides.length > visibleSlides && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning || currentSlide === 0}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-50 text-gray-700 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextSlide}
              disabled={isTransitioning || currentSlide >= maxSlideIndex}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white disabled:opacity-50 text-gray-700 p-2 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {showThumbnails && slides.length > 1 && (
        <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(Math.min(index, maxSlideIndex))}
              disabled={isTransitioning}
              className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all duration-300 ${
                Math.floor(index / visibleSlides) === Math.floor(currentSlide / visibleSlides)
                  ? 'ring-2 ring-blue-500 ring-offset-2'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={slide.thumbnail || slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Progress Indicators */}
      <div className="flex justify-center items-center mt-4 space-x-2">
        {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-blue-500 w-6'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-4 text-center text-xs text-gray-500">
        Showing {Math.min(currentSlide + visibleSlides, slides.length)} of {slides.length} • 
        Responsive Design • Touch Enabled
      </div>
    </div>
  );
};

export default SmartSlider3;