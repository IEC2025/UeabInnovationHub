import { useState, useEffect, useCallback } from 'react';

// Advanced responsive breakpoint system
export const ADVANCED_BREAKPOINTS = {
  xs: 320,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1920,
  '4xl': 2560,
  '5xl': 3840
} as const;

// Container query breakpoints
export const CONTAINER_BREAKPOINTS = {
  'container-xs': '20rem',
  'container-sm': '24rem', 
  'container-md': '28rem',
  'container-lg': '32rem',
  'container-xl': '36rem',
  'container-2xl': '42rem',
  'container-3xl': '48rem'
} as const;

// Fluid spacing system
export const FLUID_SPACING = {
  'space-xs': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.5rem)',
  'space-sm': 'clamp(0.5rem, 0.4rem + 0.5vw, 1rem)',
  'space-md': 'clamp(1rem, 0.8rem + 1vw, 2rem)',
  'space-lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 3rem)',
  'space-xl': 'clamp(2rem, 1.6rem + 2vw, 4rem)',
  'space-2xl': 'clamp(2.5rem, 2rem + 2.5vw, 5rem)',
  'space-3xl': 'clamp(3rem, 2.4rem + 3vw, 6rem)'
} as const;

// Device capability detection
export interface DeviceCapabilities {
  type: 'mobile' | 'tablet' | 'desktop' | 'tv';
  performance: 'low' | 'medium' | 'high';
  memory: number;
  cores: number;
  gpu: 'integrated' | 'dedicated' | 'unknown';
  touch: boolean;
  hover: boolean;
  pointerPrecision: 'coarse' | 'fine';
  reducedMotion: boolean;
  highContrast: boolean;
  darkMode: boolean;
  orientation: 'portrait' | 'landscape';
  viewportWidth: number;
  viewportHeight: number;
  pixelRatio: number;
}

// Network conditions
export interface NetworkConditions {
  type: '2g' | '3g' | '4g' | '5g' | 'wifi' | 'unknown';
  speed: 'slow' | 'medium' | 'fast';
  latency: 'high' | 'medium' | 'low';
  saveData: boolean;
  effectiveType: string;
  downlink: number;
  rtt: number;
}

// Advanced device detection hook
export const useAdvancedDeviceDetection = () => {
  const [deviceCapabilities, setDeviceCapabilities] = useState<DeviceCapabilities>({
    type: 'desktop',
    performance: 'medium',
    memory: 4,
    cores: 4,
    gpu: 'unknown',
    touch: false,
    hover: true,
    pointerPrecision: 'fine',
    reducedMotion: false,
    highContrast: false,
    darkMode: false,
    orientation: 'landscape',
    viewportWidth: 1920,
    viewportHeight: 1080,
    pixelRatio: 1
  });

  const detectCapabilities = useCallback(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const pixelRatio = window.devicePixelRatio || 1;
    
    // Device type detection
    const type = width < 768 ? 'mobile' : 
                 width < 1024 ? 'tablet' : 
                 width > 3840 ? 'tv' : 'desktop';

    // Performance detection
    const hardwareConcurrency = navigator.hardwareConcurrency || 4;
    const memory = (navigator as any).deviceMemory || 4;
    
    let performance: 'low' | 'medium' | 'high' = 'medium';
    if (hardwareConcurrency >= 8 && memory >= 8) {
      performance = 'high';
    } else if (hardwareConcurrency <= 2 || memory <= 2) {
      performance = 'low';
    }

    // GPU detection
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    let gpu: 'integrated' | 'dedicated' | 'unknown' = 'unknown';
    
    if (gl) {
      const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
      if (debugInfo) {
        const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
        gpu = renderer.toLowerCase().includes('nvidia') || 
              renderer.toLowerCase().includes('amd') ? 'dedicated' : 'integrated';
      }
    }

    // Media queries
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const hover = window.matchMedia('(hover: hover)').matches;
    const pointerPrecision = window.matchMedia('(pointer: fine)').matches ? 'fine' : 'coarse';
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const highContrast = window.matchMedia('(prefers-contrast: high)').matches;
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const orientation = width > height ? 'landscape' : 'portrait';

    setDeviceCapabilities({
      type,
      performance,
      memory,
      cores: hardwareConcurrency,
      gpu,
      touch,
      hover,
      pointerPrecision,
      reducedMotion,
      highContrast,
      darkMode,
      orientation,
      viewportWidth: width,
      viewportHeight: height,
      pixelRatio
    });
  }, []);

  useEffect(() => {
    detectCapabilities();
    
    const handleResize = () => detectCapabilities();
    const handleOrientationChange = () => setTimeout(detectCapabilities, 100);
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, [detectCapabilities]);

  return deviceCapabilities;
};

// Network conditions detection hook
export const useNetworkConditions = () => {
  const [networkConditions, setNetworkConditions] = useState<NetworkConditions>({
    type: 'wifi',
    speed: 'fast',
    latency: 'low',
    saveData: false,
    effectiveType: '4g',
    downlink: 10,
    rtt: 50
  });

  useEffect(() => {
    // @ts-ignore - Navigator connection API
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const updateNetworkInfo = () => {
        const effectiveType = connection.effectiveType || '4g';
        const downlink = connection.downlink || 10;
        const rtt = connection.rtt || 50;
        const saveData = connection.saveData || false;
        
        const speed = ['slow-2g', '2g'].includes(effectiveType) ? 'slow' :
                     ['3g'].includes(effectiveType) ? 'medium' : 'fast';
        
        const latency = rtt > 300 ? 'high' : rtt > 150 ? 'medium' : 'low';
        
        const type = effectiveType.includes('2g') ? '2g' :
                    effectiveType.includes('3g') ? '3g' :
                    effectiveType.includes('4g') ? '4g' : '5g';

        setNetworkConditions({
          type,
          speed,
          latency,
          saveData,
          effectiveType,
          downlink,
          rtt
        });
      };

      updateNetworkInfo();
      connection.addEventListener('change', updateNetworkInfo);
      
      return () => {
        connection.removeEventListener('change', updateNetworkInfo);
      };
    }
  }, []);

  return networkConditions;
};

// Intersection Observer hook with advanced options
export const useAdvancedIntersectionObserver = (
  options: IntersectionObserverInit & {
    onEnter?: () => void;
    onExit?: () => void;
    onProgress?: (progress: number) => void;
    threshold?: number | number[];
  } = {}
) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const [ref, setRef] = useState<Element | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting, intersectionRatio } = entry;
        
        setIsIntersecting(isIntersecting);
        setIntersectionRatio(intersectionRatio);
        
        if (isIntersecting && !prevIntersecting) {
          options.onEnter?.();
        } else if (!isIntersecting && prevIntersecting) {
          options.onExit?.();
        }
        
        options.onProgress?.(intersectionRatio);
      },
      {
        threshold: options.threshold || [0, 0.25, 0.5, 0.75, 1],
        rootMargin: options.rootMargin || '0px',
        root: options.root || null
      }
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return { ref: setRef, isIntersecting, intersectionRatio };
};

// Performance monitoring hook
export const usePerformanceMonitoring = () => {
  const [performanceData, setPerformanceData] = useState({
    fps: 60,
    frameTime: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measurePerformance = () => {
      const now = performance.now();
      frameCount++;

      if (now - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (now - lastTime));
        frameCount = 0;
        lastTime = now;

        // @ts-ignore - Memory API
        const memory = (performance as any).memory;
        const memoryUsage = memory ? 
          (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100 : 0;

        setPerformanceData(prev => ({
          ...prev,
          fps,
          frameTime: now - lastTime,
          memoryUsage
        }));
      }

      animationId = requestAnimationFrame(measurePerformance);
    };

    animationId = requestAnimationFrame(measurePerformance);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return performanceData;
};

// Adaptive loading hook
export const useAdaptiveLoading = () => {
  const deviceCapabilities = useAdvancedDeviceDetection();
  const networkConditions = useNetworkConditions();

  const shouldLoadHighQuality = useCallback(() => {
    return deviceCapabilities.performance === 'high' && 
           networkConditions.speed === 'fast' && 
           !networkConditions.saveData;
  }, [deviceCapabilities, networkConditions]);

  const shouldLoadVideo = useCallback(() => {
    return deviceCapabilities.type !== 'mobile' && 
           networkConditions.speed !== 'slow' &&
           !deviceCapabilities.reducedMotion;
  }, [deviceCapabilities, networkConditions]);

  const shouldUseParallax = useCallback(() => {
    return deviceCapabilities.performance !== 'low' && 
           !deviceCapabilities.reducedMotion;
  }, [deviceCapabilities]);

  const shouldPreloadImages = useCallback(() => {
    return networkConditions.speed === 'fast' && 
           !networkConditions.saveData;
  }, [networkConditions]);

  return {
    shouldLoadHighQuality,
    shouldLoadVideo,
    shouldUseParallax,
    shouldPreloadImages,
    deviceCapabilities,
    networkConditions
  };
};

// Generate responsive CSS custom properties
export const generateResponsiveCSS = (deviceCapabilities: DeviceCapabilities) => {
  const { type, viewportWidth, performance } = deviceCapabilities;
  
  return {
    '--responsive-scale': type === 'mobile' ? '0.8' : type === 'tablet' ? '0.9' : '1',
    '--responsive-spacing': type === 'mobile' ? '1rem' : type === 'tablet' ? '1.5rem' : '2rem',
    '--responsive-font-scale': type === 'mobile' ? '0.875' : type === 'tablet' ? '0.9375' : '1',
    '--responsive-animation-duration': performance === 'low' ? '0.1s' : performance === 'medium' ? '0.3s' : '0.5s',
    '--responsive-blur': performance === 'low' ? '0px' : '10px',
    '--responsive-shadow': performance === 'low' ? 'none' : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '--container-width': `${Math.min(viewportWidth * 0.9, 1200)}px`,
    '--viewport-width': `${viewportWidth}px`,
    '--container-query-support': CSS.supports('container-type: inline-size') ? '1' : '0'
  };
};