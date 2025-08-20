import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useMotionValue, useTransform } from 'framer-motion';

// Ripple Effect Component
interface RippleProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  duration?: number;
  disabled?: boolean;
}

export const RippleButton: React.FC<RippleProps> = ({
  children,
  className = '',
  color = 'rgba(255, 255, 255, 0.5)',
  duration = 600,
  disabled = false,
  ...props
}) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const [isPressed, setIsPressed] = useState(false);

  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setIsPressed(true);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
      setIsPressed(false);
    }, duration);
  };

  return (
    <motion.button
      className={`relative overflow-hidden ${className}`}
      onMouseDown={createRipple}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      {...props}
    >
      {children}
      <AnimatePresence>
        {ripples.map(ripple => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: ripple.x,
              top: ripple.y,
              background: color,
            }}
            initial={{ width: 0, height: 0, opacity: 0.8 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: duration / 1000, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </motion.button>
  );
};

// Floating Action Button with Pulse
interface FloatingButtonProps {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
  onClick?: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  className = '',
  pulse = true,
  onClick
}) => {
  return (
    <motion.button
      className={`fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg z-50 ${className}`}
      onClick={onClick}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      whileTap={{ scale: 0.9 }}
      animate={pulse ? {
        boxShadow: [
          "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
        ]
      } : {}}
      transition={{
        duration: 2,
        repeat: pulse ? Infinity : 0,
        repeatType: "reverse"
      }}
    >
      {children}
    </motion.button>
  );
};

// Magnetic Effect Component
interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

export const MagneticElement: React.FC<MagneticProps> = ({
  children,
  className = '',
  strength = 20
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  const handleMouse = (event: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    x.set(deltaX * (strength / 100));
    y.set(deltaY * (strength / 100));
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y, rotateX, rotateY }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      {children}
    </motion.div>
  );
};

// Loading Skeleton Component
interface SkeletonProps {
  className?: string;
  lines?: number;
  animate?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  lines = 1,
  animate = true
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <motion.div
          key={index}
          className="bg-gray-200 rounded h-4"
          animate={animate ? {
            opacity: [0.5, 1, 0.5],
          } : {}}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.1
          }}
          style={{
            width: index === lines - 1 ? '75%' : '100%'
          }}
        />
      ))}
    </div>
  );
};

// Smooth Count Animation
interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  from = 0,
  to,
  duration = 2,
  className = ''
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(from);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (duration * 1000), 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3); // Ease out cubic
      const currentCount = Math.floor(from + (to - from) * easeProgress);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      }
    };

    requestAnimationFrame(updateCount);
  }, [from, to, duration]);

  return (
    <motion.span
      ref={nodeRef}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count.toLocaleString()}
    </motion.span>
  );
};

// Progressive Image Loading
interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PC9zdmc+'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence>
        {!isLoaded && !isError && (
          <motion.img
            src={placeholder}
            alt=""
            className="absolute inset-0 w-full h-full object-cover filter blur-sm"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>
      
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsError(true)}
      />

      {!isLoaded && !isError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </div>
  );
};

// Scroll Progress Indicator
export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ type: "spring", stiffness: 400, damping: 40 }}
    />
  );
};

// Interactive Card Hover Effect
interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
}

export const InteractiveCard: React.FC<InteractiveCardProps> = ({
  children,
  className = ''
}) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotX = (y - centerY) / 4;
    const rotY = (centerX - x) / 4;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      className={`perspective-1000 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotateX,
        rotateY: rotateY,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: isHovered 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
      }}
    >
      {children}
    </motion.div>
  );
};

// Toast Notification Component
interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  onClose?: () => void;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  type = 'info',
  duration = 4000,
  onClose
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const bgColor = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500'
  }[type];

  return (
    <motion.div
      className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm`}
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 100, scale: 0.8 }}
      transition={{ type: "spring", stiffness: 500, damping: 30 }}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-3 text-white hover:text-gray-200 transition-colors"
        >
          ×
        </button>
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-white/30 rounded-full"
        initial={{ width: "100%" }}
        animate={{ width: "0%" }}
        transition={{ duration: duration / 1000, ease: "linear" }}
      />
    </motion.div>
  );
};