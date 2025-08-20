import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink, Grid3X3, List } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MetaSlide {
  id: number;
  title: string;
  description?: string;
  image: string;
  link?: string;
  caption?: string;
  alt?: string;
}

interface MetaSliderProps {
  slides: MetaSlide[];
  sliderType?: 'flex' | 'responsive' | 'nivo' | 'carousel';
  layout?: 'default' | 'filmstrip' | 'thumbnail' | 'grid';
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  navigation?: boolean;
  pagination?: boolean;
  thumbnails?: boolean;
  captions?: boolean;
  height?: number;
  aspectRatio?: string;
}

const MetaSlider: React.FC<MetaSliderProps> = ({
  slides,
  sliderType = 'flex',
  layout = 'default',
  autoPlay = false,
  autoPlaySpeed = 3000,
  navigation = true,
  pagination = true,
  thumbnails = false,
  captions = true,
  height = 400,
  aspectRatio = '16:9',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [viewMode, setViewMode] = useState<'slider' | 'grid'>('slider');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && !isHovered && viewMode === 'slider' && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, autoPlaySpeed);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentSlide, autoPlay, autoPlaySpeed, isHovered, viewMode]);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isTransitioning && index !== currentSlide) {
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Touch handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && viewMode === 'slider') {
      nextSlide();
    }
    if (isRightSwipe && viewMode === 'slider') {
      prevSlide();
    }

    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Grid view component
  const GridView = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="group relative bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
          onClick={() => {
            setViewMode('slider');
            goToSlide(index);
          }}
        >
          <div className="aspect-square overflow-hidden">
            <img
              src={slide.image}
              alt={slide.alt || slide.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white p-2">
              <h4 className="font-bold text-sm mb-1">{slide.title}</h4>
              {slide.description && (
                <p className="text-xs opacity-90 line-clamp-2">{slide.description}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (!slides.length) return null;

  return (
    <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Meta Slider Header */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-white/20 p-1 rounded">
            <Grid3X3 className="w-4 h-4" />
          </div>
          <span className="font-bold text-sm">MetaSlider</span>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
            {sliderType.toUpperCase()}
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode(viewMode === 'slider' ? 'grid' : 'slider')}
            className="bg-white/20 hover:bg-white/30 p-1 rounded transition-colors"
          >
            {viewMode === 'slider' ? <Grid3X3 className="w-4 h-4" /> : <List className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {viewMode === 'grid' ? (
        <div className="p-4">
          <GridView />
        </div>
      ) : (
        <div 
          className="relative group"
          style={{ height: `${height}px` }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main Slider */}
          <div className="relative w-full h-full overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 z-10'
                    : index === currentSlide - 1 || (currentSlide === 0 && index === slides.length - 1)
                    ? 'opacity-0 -translate-x-full z-0'
                    : 'opacity-0 translate-x-full z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Caption */}
                {captions && (slide.title || slide.caption) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                    <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                    {slide.caption && (
                      <p className="text-sm opacity-90 mb-3">{slide.caption}</p>
                    )}
                    {slide.link && (
                      <Button 
                        size="sm"
                        className="bg-purple-500 hover:bg-purple-600"
                        asChild
                      >
                        <a href={slide.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View More
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          {navigation && slides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={isTransitioning}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button
                onClick={nextSlide}
                disabled={isTransitioning}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/70 disabled:opacity-50 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Pagination Dots */}
          {pagination && slides.length > 1 && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-purple-500 scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Thumbnail Strip */}
      {thumbnails && slides.length > 1 && viewMode === 'slider' && (
        <div className="bg-gray-100 p-3">
          <div className="flex space-x-2 overflow-x-auto">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-2 ring-purple-500 ring-offset-2'
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt || slide.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="bg-gray-50 px-4 py-2 text-xs text-gray-600 flex justify-between items-center">
        <div>
          Image {currentSlide + 1} of {slides.length}
        </div>
        <div className="flex items-center space-x-2">
          <span>Powered by MetaSlider</span>
          <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MetaSlider;