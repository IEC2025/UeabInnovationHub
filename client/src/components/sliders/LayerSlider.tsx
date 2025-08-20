import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, Layers2, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayerElement {
  id: string;
  type: 'text' | 'image' | 'shape' | 'video';
  content: string;
  style: {
    position: { x: number; y: number; z: number };
    size: { width: number; height: number };
    transform: {
      rotate: number;
      scale: number;
      skew: { x: number; y: number };
    };
    animation: {
      type: 'slide' | 'fade' | 'zoom' | 'rotate' | 'bounce' | 'elastic' | 'flip3d';
      direction?: 'left' | 'right' | 'up' | 'down';
      duration: number;
      delay: number;
      easing: 'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'bounce';
    };
    appearance: {
      opacity: number;
      backgroundColor?: string;
      color?: string;
      fontSize?: number;
      fontWeight?: string;
      borderRadius?: number;
      border?: string;
      shadow?: string;
    };
  };
  timeline: {
    startTime: number;
    endTime: number;
  };
}

interface LayerSlide {
  id: number;
  name: string;
  backgroundImage: string;
  backgroundVideo?: string;
  duration: number;
  elements: LayerElement[];
  transition: {
    type: 'fade' | 'slide' | 'curtain' | 'cube' | 'wave';
    duration: number;
  };
}

interface LayerSliderProps {
  slides: LayerSlide[];
  width?: string;
  height?: string;
  autoStart?: boolean;
  showTimeline?: boolean;
  showControls?: boolean;
}

const LayerSlider: React.FC<LayerSliderProps> = ({
  slides,
  width = '100%',
  height = '600px',
  autoStart = true,
  showTimeline = true,
  showControls = true,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoStart);
  const [currentTime, setCurrentTime] = useState(0);
  const [slideProgress, setSlideProgress] = useState(0);
  const [activeElements, setActiveElements] = useState<string[]>([]);
  const timelineRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    if (isPlaying) {
      startTimeline();
    } else {
      stopTimeline();
    }

    return () => {
      stopTimeline();
    };
  }, [isPlaying, currentSlide]);

  const startTimeline = () => {
    const slide = slides[currentSlide];
    if (!slide) return;

    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / slide.duration, 1);
      
      setCurrentTime(elapsed);
      setSlideProgress(progress);
      
      // Update active elements based on timeline
      const activeElementIds = slide.elements
        .filter(element => 
          elapsed >= element.timeline.startTime && 
          elapsed <= element.timeline.endTime
        )
        .map(element => element.id);
      
      setActiveElements(activeElementIds);

      if (progress < 1 && isPlaying) {
        animationRef.current = requestAnimationFrame(animate);
      } else if (progress >= 1) {
        // Auto advance to next slide
        setTimeout(() => {
          nextSlide();
        }, 500);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const stopTimeline = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setCurrentTime(0);
    setSlideProgress(0);
    setActiveElements([]);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setCurrentTime(0);
    setSlideProgress(0);
    setActiveElements([]);
  };

  const resetSlide = () => {
    setCurrentTime(0);
    setSlideProgress(0);
    setActiveElements([]);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const getElementStyle = (element: LayerElement): React.CSSProperties => {
    const isActive = activeElements.includes(element.id);
    const { style } = element;
    
    let transform = `
      translate(${style.position.x}px, ${style.position.y}px)
      rotate(${style.transform.rotate}deg)
      scale(${style.transform.scale})
      skew(${style.transform.skew.x}deg, ${style.transform.skew.y}deg)
    `;

    // Animation transforms
    if (!isActive) {
      switch (style.animation.type) {
        case 'slide':
          const slideOffset = style.animation.direction === 'left' ? '-100px' :
                            style.animation.direction === 'right' ? '100px' :
                            style.animation.direction === 'up' ? '0, -100px' :
                            style.animation.direction === 'down' ? '0, 100px' : '0';
          transform += ` translate(${slideOffset})`;
          break;
        case 'zoom':
          transform += ' scale(0)';
          break;
        case 'rotate':
          transform += ' rotate(180deg)';
          break;
        case 'flip3d':
          transform += ' rotateY(180deg)';
          break;
      }
    }

    return {
      position: 'absolute',
      left: 0,
      top: 0,
      width: style.size.width,
      height: style.size.height,
      transform,
      opacity: isActive ? style.appearance.opacity : 0,
      backgroundColor: style.appearance.backgroundColor,
      color: style.appearance.color,
      fontSize: style.appearance.fontSize,
      fontWeight: style.appearance.fontWeight,
      borderRadius: style.appearance.borderRadius,
      border: style.appearance.border,
      boxShadow: style.appearance.shadow,
      zIndex: style.position.z,
      transition: `all ${style.animation.duration}ms ${style.animation.easing} ${style.animation.delay}ms`,
      transformOrigin: 'center center',
      willChange: 'transform, opacity',
    };
  };

  const renderElement = (element: LayerElement) => {
    const elementStyle = getElementStyle(element);

    switch (element.type) {
      case 'text':
        return (
          <div
            key={element.id}
            style={elementStyle}
            className="flex items-center justify-center text-center pointer-events-none select-none"
          >
            {element.content}
          </div>
        );
      
      case 'image':
        return (
          <img
            key={element.id}
            src={element.content}
            alt=""
            style={elementStyle}
            className="object-cover pointer-events-none select-none"
          />
        );
      
      case 'shape':
        return (
          <div
            key={element.id}
            style={elementStyle}
            className="pointer-events-none select-none"
          />
        );
      
      case 'video':
        return (
          <video
            key={element.id}
            src={element.content}
            style={elementStyle}
            className="object-cover pointer-events-none"
            autoPlay
            muted
            loop
            playsInline
          />
        );
      
      default:
        return null;
    }
  };

  if (!slides.length) return null;

  const currentSlideData = slides[currentSlide];

  return (
    <div 
      className="relative bg-gray-900 overflow-hidden rounded-lg shadow-2xl"
      style={{ width, height }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {currentSlideData.backgroundVideo ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={currentSlideData.backgroundVideo} type="video/mp4" />
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${currentSlideData.backgroundImage})` }}
            />
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlideData.backgroundImage})` }}
          />
        )}
      </div>

      {/* Layer Elements */}
      <div className="relative w-full h-full">
        {currentSlideData.elements.map(renderElement)}
      </div>

      {/* Controls */}
      {showControls && (
        <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-black/50 rounded-lg p-2 backdrop-blur-sm">
          <button
            onClick={togglePlayPause}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
          
          <button
            onClick={resetSlide}
            className="text-white hover:text-yellow-400 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
          </button>
          
          <div className="text-white text-sm px-2">
            {Math.round(slideProgress * 100)}%
          </div>
        </div>
      )}

      {/* Timeline */}
      {showTimeline && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-lg p-2 backdrop-blur-sm">
          <div className="flex items-center space-x-2 text-white text-sm">
            <Timer className="w-4 h-4" />
            <div className="w-32 h-2 bg-gray-600 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-400 transition-all duration-100"
                style={{ width: `${slideProgress * 100}%` }}
              />
            </div>
            <span>{Math.round(currentTime / 1000)}s</span>
          </div>
        </div>
      )}

      {/* Slide Navigation */}
      <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-2 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <Layers2 className="w-4 h-4 text-white" />
          <span className="text-white text-sm">
            {currentSlide + 1} / {slides.length}
          </span>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setCurrentTime(0);
              setSlideProgress(0);
              setActiveElements([]);
            }}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-400'
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default LayerSlider;