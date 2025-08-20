import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveCard } from './micro-interactions';

interface EnhancedCardProps {
  children: React.ReactNode;
  className?: string;
  hover3d?: boolean;
  magnetic?: boolean;
  glowEffect?: boolean;
  onClick?: () => void;
}

export const EnhancedCard: React.FC<EnhancedCardProps> = ({
  children,
  className = '',
  hover3d = true,
  magnetic = false,
  glowEffect = false,
  onClick
}) => {
  if (hover3d) {
    return (
      <InteractiveCard className={`${className} cursor-pointer`} onClick={onClick}>
        <motion.div
          className={`h-full w-full rounded-lg transition-all duration-300 ${
            glowEffect ? 'hover:shadow-2xl hover:shadow-primary/20' : ''
          }`}
          whileHover={{
            y: -8,
            transition: { type: "spring", stiffness: 300, damping: 20 }
          }}
        >
          {children}
        </motion.div>
      </InteractiveCard>
    );
  }

  return (
    <motion.div
      className={`${className} cursor-pointer`}
      onClick={onClick}
      whileHover={{
        scale: magnetic ? 1.05 : 1.02,
        y: -4,
        boxShadow: glowEffect 
          ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {children}
    </motion.div>
  );
};