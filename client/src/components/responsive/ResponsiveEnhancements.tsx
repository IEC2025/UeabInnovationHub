import React, { useState, useEffect, useCallback } from 'react';

// Enhanced device detection with modern responsive techniques
export const useResponsiveEnhancements = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    type: 'desktop' as 'mobile' | 'tablet' | 'desktop',
    width: 1920,
    height: 1080,
    pixelRatio: 1,
    touch: false,
    reducedMotion: false,
    darkMode: false,
    orientation: 'landscape' as 'portrait' | 'landscape'
  });

  const [networkInfo, setNetworkInfo] = useState({
    speed: 'fast' as 'slow' | 'medium' | 'fast',
    saveData: false
  });

  // Advanced device capability detection
  const detectDevice = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    
    const type = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
    const touch = 'ontouchstart' in window;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const orientation = width > height ? 'landscape' : 'portrait';

    setDeviceInfo({
      type,
      width,
      height,
      pixelRatio,
      touch,
      reducedMotion,
      darkMode,
      orientation
    });
  }, []);

  // Network speed detection
  const detectNetwork = useCallback(() => {
    // @ts-ignore - Connection API
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const effectiveType = connection.effectiveType || '4g';
      const saveData = connection.saveData || false;
      const speed = ['slow-2g', '2g'].includes(effectiveType) ? 'slow' :
                   ['3g'].includes(effectiveType) ? 'medium' : 'fast';
      
      setNetworkInfo({ speed, saveData });
    }
  }, []);

  useEffect(() => {
    detectDevice();
    detectNetwork();
    
    const handleResize = () => detectDevice();
    const handleOrientationChange = () => setTimeout(detectDevice, 100);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [detectDevice, detectNetwork]);

  return { deviceInfo, networkInfo };
};

// CSS Custom Properties Generator
export const generateResponsiveCSS = (deviceInfo: any, networkInfo: any) => {
  const { type, width, reducedMotion } = deviceInfo;
  const { speed } = networkInfo;
  
  return {
    '--device-type': type,
    '--viewport-width': `${width}px`,
    '--responsive-scale': type === 'mobile' ? '0.8' : type === 'tablet' ? '0.9' : '1',
    '--responsive-spacing': type === 'mobile' ? '1rem' : type === 'tablet' ? '1.5rem' : '2rem',
    '--animation-duration': reducedMotion ? '0.1s' : speed === 'slow' ? '0.2s' : '0.5s',
    '--blur-amount': speed === 'slow' ? '0px' : '10px',
    '--shadow-level': speed === 'slow' ? 'none' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
  };
};

// Performance-aware intersection observer
export const usePerformantIntersection = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return { ref: setRef, isVisible };
};

// Smart gesture detection
export const useSmartGestures = (callbacks: {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
}) => {
  const [touchStart, setTouchStart] = useState({ x: 0, y: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, y: 0 });

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart.x || !touchEnd.x) return;
    
    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const minSwipeDistance = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (Math.abs(deltaX) > minSwipeDistance) {
        if (deltaX > 0) {
          callbacks.onSwipeLeft?.();
        } else {
          callbacks.onSwipeRight?.();
        }
      }
    } else {
      // Vertical swipe
      if (Math.abs(deltaY) > minSwipeDistance) {
        if (deltaY > 0) {
          callbacks.onSwipeUp?.();
        } else {
          callbacks.onSwipeDown?.();
        }
      }
    }

    setTouchStart({ x: 0, y: 0 });
    setTouchEnd({ x: 0, y: 0 });
  }, [touchStart, touchEnd, callbacks]);

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd
  };
};

// Fluid typography calculator
export const getFluidTypography = (deviceType: string) => {
  const scales = {
    mobile: {
      'text-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1.125rem)',
      'text-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
      'text-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
      'text-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
      'text-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
      'text-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
      'text-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3.5rem)',
      'text-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)'
    },
    tablet: {
      'text-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1.125rem)',
      'text-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
      'text-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
      'text-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
      'text-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
      'text-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
      'text-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3.5rem)',
      'text-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)'
    },
    desktop: {
      'text-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1.125rem)',
      'text-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.25rem)',
      'text-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.5rem)',
      'text-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.75rem)',
      'text-2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2.25rem)',
      'text-3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.75rem)',
      'text-4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3.5rem)',
      'text-5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4.5rem)'
    }
  };

  return scales[deviceType as keyof typeof scales] || scales.desktop;
};

// Advanced responsive wrapper component
interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
  enableGestures?: boolean;
  enableIntersection?: boolean;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onVisible?: () => void;
}

export const ResponsiveWrapper: React.FC<ResponsiveWrapperProps> = ({
  children,
  className = '',
  enableGestures = false,
  enableIntersection = false,
  onSwipeLeft,
  onSwipeRight,
  onVisible
}) => {
  const { deviceInfo, networkInfo } = useResponsiveEnhancements();
  const gestures = useSmartGestures({ onSwipeLeft, onSwipeRight });
  const { ref, isVisible } = usePerformantIntersection();

  useEffect(() => {
    if (isVisible && onVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);

  const dynamicStyles = generateResponsiveCSS(deviceInfo, networkInfo);
  const responsiveClasses = `responsive-container ${className}`;

  return (
    <div
      ref={enableIntersection ? ref : undefined}
      className={responsiveClasses}
      style={dynamicStyles}
      {...(enableGestures ? gestures : {})}
    >
      {children}
      
      {/* Performance indicator for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-black/70 text-white p-2 rounded text-xs z-50">
          <div>Device: {deviceInfo.type}</div>
          <div>Network: {networkInfo.speed}</div>
          <div>Touch: {deviceInfo.touch ? 'Yes' : 'No'}</div>
          {enableIntersection && <div>Visible: {isVisible ? 'Yes' : 'No'}</div>}
        </div>
      )}
    </div>
  );
};